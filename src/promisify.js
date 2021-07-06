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

    /* 微信支付 */
    'chooseWXPay',

    /* 快速输入 */
    'openAddress'
];

/**
 *
 * @param {Object} options
 * @param {Object} [options.root] 指定异步方法挂载到某个对象的属性上。默认挂载到 wx。
 * @param {Array} [options.extends] 若基础库新增了某些 API 而该库尚未更新，可由此传入相应的方法名数组以转换成异步方法。
 */
module.exports = (options = {}) => {
    options = Object.assign({
        root: wx,
        extends: [],
        enableCompatible: true,
        enableEventListener: true
    }, options, {});

    if (null === wx || undefined === wx) {
        throw 'This module can be injected into wechat webview runtime only.';
    }
    if (null === options.root || undefined === options.root) {
        throw 'The value of root must be a not-empty object.';
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
                            args.fail({ errMsg: `${prop}:not support` });
                        }
                        if (isCallable(args.complete)) {
                            args.complete({ errMsg: `${prop}:not support` });
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

                return new Promise((resolve, reject) => {
                    args.success = (res) => {
                        resolve(res);
                    };
                    args.fail = (res) => {
                        reject(res);
                    };
                    args.complete = () => { };

                    fn(args);
                }).then(res => {
                    if (isCallable(successFn)) {
                        try {
                            successFn(res);
                        } catch (err) {
                            console.error(err);
                        }
                    }

                    return Promise.resolve(res);
                }).catch(res => {
                    if (isCallable(failFn)) {
                        try {
                            failFn(res);
                        } catch (err) {
                            console.error(err);
                        }
                    }

                    return Promise.reject(res);
                }).finally(() => {
                    if (isCallable(completeFn)) {
                        try {
                            completeFn();
                        } catch (err) {
                            console.error(err);
                        }
                    }
                });
            };

            options.root[prop + 'Async'] = newFn;
        });
};
