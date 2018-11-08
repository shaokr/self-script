const fp = require('lodash/fp');
const fs = require('fs-extra');

const reg = new RegExp(/([\S]+):[\s]+'(.+)'/, 'g');
const getLangArr = (lang) => {
  const _str = fs.readFileSync(`${__dirname}/${lang}.js`, 'utf-8');
  const list = [];
  let match = [];
  while ((match = reg.exec(_str)) !== null) {
    list.push(match[1]);
  }
  return list;
}
const listEn = getLangArr('en');
const listZh = getLangArr('zh');
fp.flow([
  fp.concat,
  fp.max,
  fp.range(0),
  fp.map(index => {
    if (listEn[index] !== listZh[index]) {
      return [index, listEn[index], listZh[index]];
    }
  }),
  fp.compact,
  fp.concat([['', 'en', 'zh']]),
  console.log
])(fp.size(listEn), fp.size(listZh));
export {};
