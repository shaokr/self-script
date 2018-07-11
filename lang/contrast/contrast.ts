const fp = require('lodash/fp');
const fs = require('fs-extra');

const enStr = fs.readFileSync(`${__dirname}/en.js`, 'utf-8');
const zhStr = fs.readFileSync(`${__dirname}/zh.js`, 'utf-8');

const reg = new RegExp(/([\S]+):[\s]+'(.+)'/, 'g');
const listEn = [];
const listZh = [];
let match = [];
while ((match = reg.exec(enStr)) !== null) {
  listEn.push(match[1]);
}
while ((match = reg.exec(zhStr)) !== null) {
  listZh.push(match[1]);
}
const list = [['', 'en', 'zh']];
fp.flow([
  fp.concat,
  fp.max,
  fp.range(0),
  fp.map(index => {
    if (listEn[index] !== listZh[index])
      list.push([index, listEn[index], listZh[index]]);
  })
])(fp.size(listEn), fp.size(listZh));
console.log(list);
export {};
