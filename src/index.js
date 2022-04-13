const _apis = [
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

const _isFn = (fn) => 'function' === typeof fn;

const promisify = (fn) => {
    if (!_isFn(fn))
        throw 'The first argument `fn` must be a function.';

    return (options = {}, ...args) => {
        const onSuccess = options.success,
            onFail = options.fail,
            onComplete = options.complete;

        const p = new Promise((resolve, reject) => {
            options.success = (res) => resolve(res);
            options.fail = (err) => reject(err);
            options.complete = undefined;
            fn(options, ...args);
        }).then((res) => {
            _isFn(onSuccess) && onSuccess(res);
            return res;
        }).catch((err) => {
            _isFn(onFail) && onFail(err);
            throw err;
        });

        _isFn(p.finally) && _isFn(onComplete) && p.finally(onComplete);

        return p;
    };
};

const promisifyAll = (config = {}) => {
    config = Object.assign({
        root: wx,
        extends: []
    }, config);

    if (wx == null)
        throw 'This module can be injected into WeChat Webview runtime only.';
    if (config.root == null)
        throw 'The first argument `config.root` should be a not-empty object.';
    if (config.extends != null && !Array.isArray(config.extends))
        throw 'The first argument `config.extends` should be an array.';

    []
        .concat(_apis, config.extends)
        .filter((e, i, arr) => !!e && arr.indexOf(e, 0) === i)
        .forEach((prop) => {
            const fn = _isFn(wx[prop])
                ? wx[prop]
                : function (args = {}) {
                    args.fail({ errMsg: `${prop}:not supported` });
                    args.complete({ errMsg: `${prop}:not supported` });
                };
            config.root[prop + 'Async'] = promisify(fn);
        });
};

module.exports = {
    promisify,
    promisifyAll
};
