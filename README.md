# @skit/wxjssdk-promisify

[![NPM Version](https://img.shields.io/npm/v/@skit/wxjssdk-promisify.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxjssdk-promisify)
[![NPM Download](https://img.shields.io/npm/dm/@skit/wxjssdk-promisify.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxjssdk-promisify)
[![Dependency Status](https://david-dm.org/fudiwei/wxjssdk-promisify.svg)](https://david-dm.org/fudiwei/wxjssdk-promisify)
[![License](https://img.shields.io/github/license/fudiwei/wxjssdk-promisify)](https://mit-license.org/)

---

## 特性

-   将微信 JS-SDK 中提供的基于回调函数的 API，转化为 Promise 形式（_wx.func_ 将转换成同名的 _wx.funcAsync_ 形式）；
-   可单独拷贝到项目中使用；
-   支持 TypeScript；
-   与微信 JS-SDK（当前版本：1.6.0）同步更新。

---

## 用法

### 安装：

```shell
npm install @skit/wxjssdk-promisify
```

### 导入：

```javascript
const $ = require('@skit/wxjssdk-promisify');

$.promisifyAll({
    root: wx, // （可选）指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
    extends: ['checkJsApi'] // （可选）若 JS-SDK 新增了某些 API 而本库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
});
```

### 使用异步方法：

```javascript
wx.checkJsApiAsync({ jsApiList: ['chooseWXPay'] })
    .then((res) => {
        console.info('success', res.checkResult);
    })
    .catch((err) => {
        console.error('fail', err);
    })
    .finally(() => {
        console.log('complete');
    });

/**
 * @example 以上示例代码等同于下方原生实现：
 */
wx.checkJsApi({
    jsApiList: ['chooseWXPay'],
    success: (res) => {
        console.info('success', res.checkResult);
    },
    fail: (err) => {
        console.error('fail', err);
    },
    complete: () => {
        console.log('complete');
    }
});
```
