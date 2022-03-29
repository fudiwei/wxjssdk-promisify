/// <reference path="./wx.jsbridge.d.ts" />
/// <reference path="./wx.jssdk.d.ts" />
/// <reference path="./wx.jssdk-promisify.d.ts" />

declare namespace SKIT.WxJssdkPromisify {
    interface WxJssdkPromisifyAllConfig {
        /**
         * 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
         */
        root?: unknown;
        /**
         * 若基础库新增了某些 API 而本库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
         */
        extends?: Array<string>;
    }

    export const _default: {
        promisify<T>(fn: (options?: { success?: (res?: T) => void }) => void): Promise<T>;
        promisifyAll(config?: WxJssdkPromisifyAllConfig): void;
    };
}

export default SKIT.WxJssdkPromisify._default;
