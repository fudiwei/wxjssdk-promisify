# @skit/wxjssdk

[![NPM Version](https://img.shields.io/npm/v/@skit/wxjssdk.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxjssdk)
[![NPM Download](https://img.shields.io/npm/dm/@skit/wxjssdk.svg?sanitize=true)](https://www.npmjs.com/package/@skit/wxjssdk)
[![Dependency Status](https://david-dm.org/fudiwei/wxjssdk.svg)](https://david-dm.org/fudiwei/wxjssdk)
[![License](https://img.shields.io/github/license/fudiwei/wxjssdk)](https://mit-license.org/)

本库内置完整的微信 JS-SDK TypeScript 声明。

---

## 特性

-   将微信小程序中提供的基于回调函数的 API，转化为 Promise 形式（_wx.func_ 将转换成同名的 _wx.funcAsync_ 形式）；
-   可单独拷贝到项目中使用；
-   支持 TypeScript；
-   与微信 JS-SDK（当前版本：1.6.0）同步更新。

---

## 用法

安装：

```shell
npm install @skit/wxjssdk
```

导入：

```javascript
import wxmini from '@skit/wxjssdk';

wxmini.promisify({
    root: wx, // 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
    extends: ['checkJsApi'] // 若 JS-SDK 新增了某些 API 而该库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
});
```

使用异步方法：

```javascript
// 原始方法
wx.checkJsApi({
    jsApiList: ['chooseWXPay'],
    success: (res) => {
        console.info(res.checkResult);
    },
    fail: (err) => {
        console.error(err);
    },
    complete: () => {
        // Do Something
    }
});

// Promise 方法
wx.checkJsApiAsync({
    jsApiList: ['chooseWXPay']
})
    .then((res) => {
        console.info(res.checkResult);
    })
    .catch((err) => {
        console.error(err);
    })
    .finally(() => {
        // Do Something
    });
```
