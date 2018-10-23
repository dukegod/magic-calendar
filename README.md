# [magic-calendar](https://github.com/dukegod/magic-calendar)
[![](https://img.shields.io/badge/Powered%20by-jslib%20base-brightgreen.svg)](https://github.com/dukegod/magic-calendar)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/dukegod/magic-calendar/blob/master/LICENSE)
[![Build Status](https://travis-ci.org/dukegod/magic-calendar.svg?branch=master)](https://travis-ci.org/dukegod/magic-calendar)
[![npm](https://img.shields.io/badge/npm-0.1.0-orange.svg)](https://www.npmjs.com/package/magic-calendar)
[![NPM downloads](http://img.shields.io/npm/dm/magic-calendar.svg?style=flat-square)](http://www.npmtrends.com/magic-calendar)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/dukegod/magic-calendar.svg)](http://isitmaintained.com/project/dukegod/magic-calendar "Percentage of issues still open")

## 特性

## 兼容性
单元测试保证支持如下环境：

| IE   | CH   | FF   | SF   | OP   | IOS  | 安卓   | Node  |
| ---- | ---- | ---- | ---- | ---- | ---- | ---- | ----- |
| 6+   | 23+  | 4+   | 6+   | 10+  | 5+   | 2.3+ | 0.10+ |


## 目录介绍

```
.
├── demo 使用demo
├── dist 编译产出代码
├── doc 项目文档
├── src 源代码目录
├── test 单元测试
├── CHANGELOG.md 变更日志
└── TODO.md 计划功能
```

## 使用者指南
通过npm下载安装代码

<!-- ```bash
$ npm install --save magic-calendar
```

如果你是node环境

```js
var base = require('magic-calendar');
```

如果你是webpack等环境

```js
import base from 'magic-calendar';
```

如果你是requirejs环境

```js
requirejs(['node_modules/magic-calendar/dist/index.aio.js'], function (base) {
    // xxx
})
``` -->

如果你是浏览器环境

```html
<script src="node_modules/magic-calendar/dist/index.aio.js"></script>
```

## 文档
- [API](https://github.com/dukegod/magic-calendar/blob/master/doc/api.md)

## 贡献者指南
首次运行需要先安装依赖

```bash
$ npm install
```

一键打包生成生产代码

```bash
$ npm run build
```

运行单元测试，浏览器环境需要手动测试，位于`test/browser`

```bash
$ npm test
```

修改package.json中的版本号，修改README.md中的版本号，修改CHANGELOG.md，然后发布新版

```bash
$ npm run release
```

将新版本发布到npm

```bash
$ npm publish
```

```bash
$ npm run rename # 重命名命令
```
## 贡献者列表
[contributors](https://github.com/dukegod/magic-calendar/graphs/contributors)

## 更新日志
[CHANGELOG.md](https://github.com/dukegod/magic-calendar/blob/master/CHANGELOG.md)

## 计划列表
[TODO.md](https://github.com/dukegod/magic-calendar/blob/master/TODO.md)

