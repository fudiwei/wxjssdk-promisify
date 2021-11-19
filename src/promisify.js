const isCallable = (fn) => 'function' === typeof fn;
const noop = () => { };

const promisyFuncs = [
    'checkJsApi',

    /* 分享接口 */
    'updateAppMessageShareData',
    'updateTimelineShareData',
    'onMenuShareTimeline',
    'onMenuShareAppMessage',
    'onMenuShareQQ',
    'onMenuShareWeibo',
    'onMenuShareQZone',

    /* 图像接口 */
    'chooseImage',
    'previewImage',
    'uploadImage',
    'downloadImage',
    'getLocalImgData',

    /* 音频接口 */
    'startRecord',
    'stopRecord',
    'playVoice',
    'pauseVoice',
    'stopVoice',
    'uploadVoice',
    'downloadVoice',

    /* 智能接口 */
    'translateVoice',

    /* 设备信息 */
    'getNetworkType',

    /* 地理位置 */
    'openLocation',
    'getLocation',

    /* 摇一摇周边 */
    'startSearchBeacons',
    'stopSearchBeacons',

    /* 界面操作 */
    'hideMenuItems',
    'showMenuItems',
    'hideAllNonBaseMenuItem',
    'showAllNonBaseMenuItem',

    /* 微信扫一扫 */
    'scanQRCode',

    /* 微信小店 */
    'openProductSpecificView',

    /* 微信卡券 */
    'chooseCard',
    'addCard',
    'openCard',
    'consumeAndShareCard',

    /* 微信支付 */
    'chooseWXPay',
    'openBusinessView',

    /* 快速输入 */
    'openAddress',

    /* 小程序 */
    'launchMiniProgram',

    /* 企业微信 */
    'openEnterpriseRedPacket',
    'openEnterpriseChat'
];

/**
 *
 * @param {Object} options
 * @param {Object} [options.root] 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
 * @param {Array} [options.extends] 若 JS-SDK 新增了某些 API 而本库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
 * @param {Boolean} [options.enableCompatible] 是否为兼容低版本 JS-SDK。默认值为 true。
 */
module.exports = (options = {}) => {
    options = Object.assign({
        root: wx,
        extends: [],
        enableCompatible: true
    }, options, {});

    if (null === wx || undefined === wx) {
        throw 'This module can be injected into WeChat Webview runtime only.';
    }
    if (null === options.root || undefined === options.root) {
        throw 'The value of `options.root` must be a not-empty object.';
    }
    if (!Array.isArray(options.extends)) {
        options.extends = Array.from(options.extends);
    }

    [].concat(promisyFuncs, options.extends)
        .filter((e, i, arr) => !!e && arr.indexOf(e, 0) === i)
        .forEach((prop) => {
            let fn = wx[prop];
            if (!isCallable(fn)) {
                if (!options.enableCompatible) {
                    return;
                }

                fn = (args) => {
                    if ('object' === typeof args) {
                        if (isCallable(args.fail)) {
                            args.fail({ errMsg: `${prop}:not supported` });
                        }
                        if (isCallable(args.complete)) {
                            args.complete({ errMsg: `${prop}:not supported` });
                        }
                    }
                };
            }

            const newFn = (args = {}) => {
                args = Object.assign({
                    success: noop,
                    fail: noop,
                    complete: noop
                }, args, {});

                const successFn = args.success,
                    failFn = args.fail,
                    completeFn = args.complete;

                const p = new Promise((resolve, reject) => {
                    args.success = (res) => resolve(res);
                    args.fail = (res) => reject(res);
                    args.complete = noop;

                    fn(args);
                }).then(res => {
                    if (isCallable(successFn)) {
                        successFn(res);
                    }

                    return Promise.resolve(res);
                }).catch(res => {
                    if (isCallable(failFn)) {
                        failFn(res);
                    }

                    return Promise.reject(res);
                });

                if (isCallable(p.finally)) {
                    p.finally(() => {
                        if (isCallable(completeFn)) {
                            completeFn();
                        }
                    });
                }

                return p;
            };

            options.root[prop + 'Async'] = newFn;
        });
};
