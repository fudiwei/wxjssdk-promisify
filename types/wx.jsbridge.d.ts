declare namespace WechatJssdk {
    interface WeixinJSBridgeInvokeApiMap {
        getBrandWCPayRequest: { option: GetBrandWCPayRequestOption; result: GetBrandWCPayRequestCallbackResult };
    }

    interface GetBrandWCPayRequestOption {
        /**
         * @property {String} 公众号 AppId。
         */
        appId: string;
        /**
         * @property {String} 时间戳。
         */
        timeStamp: string;
        /**
         * @property {String} 随机字符串。
         */
        nonceStr: string;
        /**
         * @property {String} 订单详情扩展字符串。
         */
        package: string;
        /**
         * @property {String} 签名方式。
         */
        signType: string;
        /**
         * @property {String} 签名。
         */
        paySign: string;
    }

    interface GetBrandWCPayRequestCallbackResult {
        /**
         * @property {String} 返回结果信息。
         */
        err_msg?: 'get_brand_wcpay_request:ok' | 'get_brand_wcpay_request:cancel' | 'get_brand_wcpay_request:fail';
    }

    interface WeixinJSBridge {
        /**
         * @deprecated
         */
        on(menu: string, callback: (res?: any) => void): void;

        /**
         * @deprecated
         */
        call(api: string): void;

        invoke(api: string, args?: any, callback?: (res?: any) => void): void;
        invoke<K extends keyof WeixinJSBridgeInvokeApiMap>(
            api: K,
            args?: WeixinJSBridgeInvokeApiMap[K]['option'],
            callback?: (res: WeixinJSBridgeInvokeApiMap[K]['result']) => void
        ): void;
    }
}

declare interface DocumentEventMap {
    WeixinJSBridgeReady: Event;
}

declare const WeixinJSBridge: WechatJssdk.WeixinJSBridge;
