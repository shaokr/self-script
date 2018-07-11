// 偷懒复制专用
// const Git = require("nodegit");
const path = require("path");
// const git = require("gulp-git");
const fs = require("fs-extra");
const rimraf = require("rimraf");
const colors = require("colors");

const _ = require("lodash");
const fp = require("lodash/fp");
const glob = require("glob");
const copyGoConfig = require("./copy-go-config");

let { sep } = path;
/**
 *   go: 'E:/kook/kook-web-fed/web-api-config/', // 需要复制的项目地址 必须在项目中含有package.json文件并且含有版本属性 已经放到了copyGoConfig配置中
     to: [ // 需要复制到的地址，默认第一个为cdn地址
       '../release/js/api-util', 
     ],
     globFile: '', // 需要复制的文件
     exclude: [/config/], // 需要过滤的模块
      upConfigVersion // 需要修改的 config 配置模块
 */
interface ConfigObj {
  to: Array<string>; // 需要复制到的地址，默认第一个为cdn地址
  globFile: string; // 需要复制的文件
  exclude: Array<RegExp>; // 需要过滤的模块
  upConfigVersion?: object; // 需要修改的 config 配置模块
}
interface Config {
  "api-util": ConfigObj;
  "cc-sdk": ConfigObj;
  "debug-tool": ConfigObj;
  "react-component": ConfigObj;
  "fed-const": ConfigObj;
  "bridge-ws": ConfigObj;
  "auto-login": ConfigObj;
  "slate-plugins-at": ConfigObj;
}
let config: Config = {
  "api-util": {
    to: ["../release/js/api-util"],
    globFile: "**/dist/{min,}/*.js",
    exclude: [/config/],
    upConfigVersion: {
      "~1.1.0": ["^1.0.0", "^2.0.0"]
    }
  },

  "cc-sdk": {
    // go: 'E:/kook/kook-web-fed/cc-sdk',
    to: ["../release/js/cc-sdk"],
    globFile: "dist/{min,}/cc{.js,.min.js}",
    exclude: [/config/, /main/],
    upConfigVersion: {
      "~1.1.3": ["^1.0.0", "^2.0.0"]
    }
  },
  "debug-tool": {
    // go: 'E:/kook/kook-web-fed/debug-tool',
    to: [`../release/js/debug-tool`],
    globFile: "dist/{min,}/*.{js,css}",
    exclude: [/config/, /main/],
    upConfigVersion: {
      "~1.0.0": ["~1.0.0", "~2.0.0"]
    }
  },

  "react-component": {
    // go: 'E:/kook/kook-web-fed/react-component',
    to: [`../release/js/react-component-zy`],
    globFile: "dist/{min,}/*.{js,css}",
    exclude: [/config/, /main/],
    upConfigVersion: {
      "0.0.2": ["1.0.6"],
      "1.0.6": ["2.1.0", "2.1.1"],
      "~1.1.0": ["2.1.2", '~2.2.0', '~2.3.0']
    }
  },

  "fed-const": {
    // go: 'E:/kook/kook-web-fed/fed-const/',
    to: ["../release/js/fed-const"],
    globFile: "dist/{min,}/*.js",
    exclude: [/config/],
    upConfigVersion: {
      "~1.0.0": ["~1.0.0", "^2.0.0"]
    }
  },

  "bridge-ws": {
    // go: 'E:/kook/kook-web-fed/web-bridge-ws',
    to: ["../release/js/bridge-ws"],
    globFile: "dist/{min,}/bridge{.js,.min.js}",
    exclude: [/config/, /main/],
    upConfigVersion: {
      "1.0.8": ["2.1.0"],
      "1.0.9": ["2.1.1"],
      "~1.1.0": ["2.1.1"],
      "~1.2.0": ["2.1.2", "~2.2.0", "~2.3.0"]
    }
  },
  "auto-login": {
    // go: 'E:/kook/kook-web-fed/auto-login',
    to: ["../release/js/auto-login"],
    globFile: "dist/{min,}/index{.js,.min.js}",
    exclude: [/config/, /main/],
    upConfigVersion: {}
  },
  "slate-plugins-at": {
    // go: 'E:/kook/kook-web-fed/slate-plugins-at/',
    to: ["../release/js/slate-plugins-at"],
    globFile: "dist/{min,}/*.js",
    exclude: [/config/],
    upConfigVersion: {
      // '0.0.1': ['^1.0.0', '^2.0.0']
    }
  }
};
// fp.map有点问题无法获取key
const configFilterStep1 = _.curryRight(_.map, 2)((item, key) => {
  const _config = fp.getOr({})([key])(copyGoConfig);
  if (_config.open) {
    return {
      ...item,
      go: _config.go
    };
  }
});
interface ConfigArr extends ConfigObj {
  go: string;
}
const configArr: Array<ConfigArr> = fp.pipe([configFilterStep1, fp.compact])(
  config
);
/**
 * 复制文件
 */
const fileArrC = async (val: string, fileArr: Array<any>, index: number) => {
  for (const item of fileArr) {
    index === 0 && !item.exclude && console.log(item.path);
    const go = item.path;
    const to = path.resolve(val, item.name);
    !item.exclude && fs.copySync(go, to);
  }
  return true;
};
const isSmallVersion = fp.startsWith("~"); // 是否小版本
const isLargeVersion = fp.startsWith("^"); // 是否大版本
/**
 * 查询toVersion是否属于 version 的版本规则
 */
interface GetVersionInfoRes {
  small: boolean;
  large: boolean;
  version: string;
  versionArr: Array<string>;
  isBelongTo: Function;
}
const getVersionInfoCache: Map<string, GetVersionInfoRes> = new Map();
// 查询版本详情
function getVersionInfo(version: string): GetVersionInfoRes {
  if (!getVersionInfoCache.has(version)) {
    const small = isSmallVersion(version);
    const large = isLargeVersion(version);
    if (small || large) {
      version = version.slice(1);
    }
    const versionArr = _.split(version, ".");
    getVersionInfoCache.set(version, {
      small,
      large,
      version,
      versionArr,
      /**
       * 查询toVersion是否属于 version 的版本规则
       */
      isBelongTo(toVersion) {
        const toVersionInfo = getVersionInfo(toVersion);
        if (toVersionInfo.versionArr[0] !== versionArr[0]) {
          return false;
        }
        // 如果是大版本
        if (large) {
          return true;
        }
        // 如果是小版本只有最后个号不进行对比
        if (
          small &&
          fp.isEqual(_.dropRight(toVersionInfo.versionArr))(
            _.dropRight(versionArr)
          )
        ) {
          return true;
        }
        return fp.isEqual(toVersionInfo.versionArr)(versionArr);
      }
    });
  }
  return getVersionInfoCache.get(version);
}

const configDirList = fs.readdirSync("../release/config");
// 修改配置
const configTxtAll = {};
function upConfig(to?: string, version?: string, upConfigVersion?: object) {
  if (arguments.length === 0) {
    // '^1.0.0': ['^1.0.0', '^2.0.0']
    fp.forEach(item => fs.writeFileSync(item.path, item.text))(configTxtAll);
    return;
  }

  let list = [];
  _.forEach(upConfigVersion, (item, key) => {
    const versionInfo = getVersionInfo(key);
    if (versionInfo.isBelongTo(version)) {
      _.forEach(item, val => {
        const valInfo = getVersionInfo(val);
        _.forEach(configDirList, item2 => {
          if (valInfo.isBelongTo(item2)) {
            list.push(item2);
          }
        });
      });
      list = _.uniq(list);
      return false;
    }
  });
  console.log("修改配置组:"["red"], JSON.stringify(list));
  _.forEach(list, configVersion => {
    const _path = `../release/config/${configVersion}/config.js`;

    let textObj = fp.getOr({
      text: fs.readFileSync(_path, "utf-8"),
      path: _path
    })(configVersion)(configTxtAll);

    const [, project = "", version = ""] =
      to[0].match(/release\\(.+)\\([0-9\.]+)/) || [];

    const _project = project.replace("\\", "/");

    textObj.text = textObj.text.replace(
      new RegExp(`${_project}/[0-9\\.]+/([^?'"]+)(\\?([0-9]+))?`, "g"),
      `${_project}/${version}/$1?${+new Date()}`
    );
    _.set(configTxtAll, [configVersion], textObj);
  });
}
// 开始复制
const Go = async (data: ConfigArr) => {
  const goPathDist = path.resolve(data.go);

  const _package = require(`${goPathDist}/package.json`);
  const toPath = fp.map(val => path.resolve(val, `${_package.version}`))(
    data.to
  );
  console.log(`版本:${_package.version}`);
  // return;
  const upConfigVersion = fp.get(["upConfigVersion"])(data);
  // if(upConfigVersion) {
  //   fp.forEach((item) => upConfig(item, toPath[0]))(upConfigVersion);
  // }
  upConfig(toPath, _package.version, upConfigVersion);
  // return;
  let fileArr = glob.sync(`${goPathDist}/${data.globFile}`);

  fileArr = fp.map(val => {
    let name = val.split("/");
    name = name[name.length - 1];

    return {
      name,
      exclude: fp.some(n => name.match(n))(data.exclude),
      path: val
    };
  })(fileArr);

  console.log(`以下文件:`["red"]);
  let i = 0;
  for (const val of toPath) {
    /**
     * 先删除同版本的多余目录
     */
    // await new Promise((resolve, reject) => {
    //   const rfDif = val.replace(/\.[0-9]{13}/,'.?????????????');
    //   rimraf(rfDif, resolve);
    // })
    /**
     * 复制文件
     */
    await fileArrC(val, fileArr, i);
    i++;
    // let text = fs.readFileSync(`../release/config/${val}/config.js`,'utf-8');
    console.log(`=>复制到目录:(${val})`["red"]);
  }
  return toPath;
};

(async () => {
  for (const val of configArr) {
    console.log(
      `------------------项目(${
        val.go
      })---------------------------------------`["green"]
    );
    await Go(val);
    console.log(
      `------------------结束--------------------------------------------------\n`[
        "green"
      ]
    );
  }
  upConfig();
})();
