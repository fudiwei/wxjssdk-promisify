declare namespace WechatJssdk {
    interface WeixinJSBridge {
        on(menu: string, callback: (res?: any) => void);

        call(jsapi: string): void;

        invoke(jsapi: string, data?: any, callback?: (res?: any) => void);
    }
}

/**
 * @deprecated
 */
declare const WeixinJSBridge: WechatJssdk.WeixinJSBridge;
