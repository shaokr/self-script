/**
 * 专门删除自己的项目一些多余的文件夹
 * 就是毛注释都没有！气死你！
 */
const fs = require("fs-extra");
const rimraf = require("rimraf");
const _ = require("lodash");
const fp = require("lodash/fp");

const glob = require("glob");
var a = glob.sync("../release/config/**/*.js");

const keyListConfig = ["cc-sdk", "bridge-ws", "api-util", "react-component-zy", 'antd'];
let list = {};

const w1 = fp.flow([fp.split("/"), fp.slice(1)(-1)]);
const w2 = fp.flow([
  str => str.match(/host:js(.+)/g),
  fp.map(w1),
  fp.forEach(item => {
    if (!list[item[0]]) list[item[0]] = [];
    list[item[0]].push(item[1]);
  })
  // fp.uniqBy(fp.join("/"))
]);
const w3 = fp.curry(val => fs.readFileSync(val, "utf-8"));
const w4 = fp.flow([w3, w2]);
fp.forEach(w4)(a);

const zzz = fp.flow([
  fp.curryRight(_.map)((item, key) => {
    if (fp.includes(key)(keyListConfig)) {
      const str = fp.flow(
        fp.uniq,
        fp.join("|")
      )(item);
      return `${key}/!(${str})`;
    }
  }),
  fp.compact,
  fp.join(",")
])(list);
// console.log(`../release/js/{${zzz || '""'},""}`, glob.sync(`../release/js/{${zzz || '""'},''}`));
rimraf.sync(`../release/js/{${zzz || '""'},""}`);
console.log("清理的项目:", keyListConfig);

export {}
