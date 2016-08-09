const pinyin = require('pinyin');
const toClipboard = require('to-clipboard');
const isChinese = require('is-chinese');

module.exports = function(chunk, word, clip) {
  let message = '';
  [...chunk].forEach((val) => {
    let result = pinyin(val, {
      style: pinyin.STYLE_NORMAL
    });
    let content = '';
    if (isChinese(val))
      if (word) content = `汪(${result[0]})`;
      else content = ` 🐶 (${result[0]})`;
    else
      content = `${val}`;
    process.stdout.write(`${content}`);
    message += content;
  });
  if (clip) toClipboard.sync(`${message}`);
}
