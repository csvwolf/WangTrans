# WangTrans
将中文转换为汪星人专用语言（狗粮特典）

## 安装
```shell
npm install -g wangtrans
```

## 使用

```
Usage: index [options]

单身狗汪化翻译机，把你的话都变成汪星语

Options:

  -h, --help     output usage information
  -V, --version  output the version number
  -e --emoj      使用emoj来替代汉字汪
  -i --stdin     传输标准输入流文本而不是命令行参数
  -c --clip      自动复制到剪贴板（文本过大慎用）
```

## 示例
```
$ wangtrans 你好，世界
汪(ni)汪(hao)，汪(shi)汪(jie)

$ wangtrans -e 你好，世界
 🐶 (ni) 🐶 (hao)， 🐶 (shi) 🐶 (jie)

$ wangtrans --stdin < short_word.txt
Hello。World，汪(ni)汪(hao)汪(shi)汪(jie)。汪(wang)汪(wang)汪(wang)
```
