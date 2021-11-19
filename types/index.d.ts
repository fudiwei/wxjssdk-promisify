/// <reference path="./wx.jsbridge.d.ts" />
/// <reference path="./wx.jssdk.d.ts" />
/// <reference path="./wx.jssdk-promisify.d.ts" />

declare namespace SKIT.WxJssdkPromisify {
    interface WxJssdkPromisifyOptions {
        /**
         * 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
         */
        root?: any;
        /**
         * 若基础库新增了某些 API 而本库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
         */
        extends?: Array<string>;
        /**
         * 是否为兼容低版本 JS-SDK。默认值为 true。
         */
        enableCompatible?: boolean;
    }

    interface WxJssdk {
        promisify(options?: WxJssdkPromisifyOptions): void;
    }

    export const wxjssdk: WxJssdk;
}

export default SKIT.WxJssdkPromisify.wxjssdk;
