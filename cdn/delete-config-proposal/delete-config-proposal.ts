/**
 * 输出当前项目正在使用的config版本等
 */
const fs = require("fs-extra");
const fp = require("lodash/fp");

const glob = require("glob");
// 项目的config列表
const projectConfigList: Array<string> = glob.sync("../../**/{!node_modules,src}/js/entry/**/config.js");
// 获取文件的内容
const getFileStr: string = fp.curry(val => fs.readFileSync(val, "utf-8"));
fp.flow([
  fp.map(item => ({
    version: fp.flow([getFileStr, data => /config\/(?<v>[1-9]\.[0-9]+\.[0-9]+)\/config/g.exec(data), fp.get("groups.v")])(item),
    project: item,
  })),
  fp.sortBy("version"),
  console.log
])(projectConfigList);

export {};
