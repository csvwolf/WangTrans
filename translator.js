const pinyin = require('pinyin');
const toClipboard = require('to-clipboard');

module.exports = function(chunk, word, clip) {
  let message = '';
  [...chunk].forEach((val) => {
    let result = pinyin(val, {
      style: pinyin.STYLE_NORMAL
    });
    let content = '';
    if (result[0][0].length !== val.length)
      if (word) content = `汪(${result[0]})`;
      else content = ` 🐶 (${result[0]})`;
    else
      content = `${val}`;
    process.stdout.write(`${content}`);
    message += content;
  });
  if (clip) toClipboard.sync(`${message}`);
}
