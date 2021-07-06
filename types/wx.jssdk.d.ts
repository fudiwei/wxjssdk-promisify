declare namespace WechatJssdk {
    type JsApiNames =
        /* 分享接口 */
        | 'updateAppMessageShareData'
        | 'updateTimelineShareData'
        | 'onMenuShareTimeline'
        | 'onMenuShareAppMessage'
        | 'onMenuShareQQ'
        | 'onMenuShareWeibo'
        | 'onMenuShareQZone'
        /* 图像接口 */
        | 'chooseImage'
        | 'previewImage'
        | 'uploadImage'
        | 'downloadImage'
        | 'getLocalImgData'
        /* 音频接口 */
        | 'startRecord'
        | 'stopRecord'
        | 'onVoiceRecordEnd'
        | 'playVoice'
        | 'pauseVoice'
        | 'stopVoice'
        | 'onVoicePlayEnd'
        | 'uploadVoice'
        | 'downloadVoice'
        /* 智能接口 */
        | 'translateVoice'
        /* 设备信息 */
        | 'getNetworkType'
        /* 地理位置 */
        | 'openLocation'
        | 'getLocation'
        /* 摇一摇周边 */
        | 'startSearchBeacons'
        | 'stopSearchBeacons'
        | 'onSearchBeacons'
        /* 界面操作 */
        | 'closeWindow'
        | 'hideOptionMenu'
        | 'showOptionMenu'
        | 'hideMenuItems'
        | 'showMenuItems'
        | 'hideAllNonBaseMenuItem'
        | 'showAllNonBaseMenuItem'
        /* 微信扫一扫 */
        | 'scanQRCode'
        /* 微信小店 */
        | 'openProductSpecificView'
        /* 微信卡券 */
        | 'chooseCard'
        | 'addCard'
        | 'openCard'
        /* 微信支付 */
        | 'chooseWXPay'
        /* 快速输入 */
        | 'openAddress';

    type MenuNames =
        /* 基本类 */
        | 'menuItem:exposeArticle'
        | 'menuItem:setFont'
        | 'menuItem:dayMode'
        | 'menuItem:nightMode'
        | 'menuItem:refresh'
        | 'menuItem:profile'
        | 'menuItem:addContact'
        /* 传播类 */
        | 'menuItem:share:appMessage'
        | 'menuItem:share:timeline'
        | 'menuItem:share:qq'
        | 'menuItem:share:weiboApp'
        | 'menuItem:favorite'
        | 'menuItem:share:facebook'
        | 'menuItem:share:QZone'
        | 'menuItem:share:email'
        | 'menuItem:share:brand'
        /* 保护类 */
        | 'menuItem:editTag'
        | 'menuItem:delete'
        | 'menuItem:copyUrl'
        | 'menuItem:originPage'
        | 'menuItem:readMode'
        | 'menuItem:openWithQQBrowser'
        | 'menuItem:openWithSafari';

    type ShareAppMessageTypes = 'music' | 'video' | 'link';

    type ImageSizeTypes = 'original' | 'compressed';

    type ImageSourceTypes = 'album' | 'camera';

    type LocationTypes = 'wgs84' | 'gcj02';

    type ScanTypes = 'qrCode' | 'barCode';

    type ProductSpecificViewTypes = 0 | 1 | 2;

    interface ConfigOption {
        /**
         * @property {Boolean} 是否开启调试模式。
         */
        debug?: boolean;
        /**
         * @requires
         * @property {Boolean} 公众号的唯一标识。
         */
        appId: string;
        /**
         * @requires
         * @property {Boolean} 生成签名的时间戳。
         */
        timestamp: string;
        /**
         * @requires
         * @property {Boolean} 生成签名的随机串。
         */
        nonceStr: string;
        /**
         * @requires
         * @property {Boolean} 签名。
         */
        signature: string;
        /**
         * @requires
         * @property {Boolean} 需要使用的 JS 接口列表。
         */
        jsApiList: JsApiNames[];
    }

    interface GeneralCallbackResult {
        /**
         * @property {String} 错误信息。
         */
        errMsg?: string;
    }

    interface CheckJsApiOption {
        /**
         * @property {Array} 需要检测的 JS 接口列表。
         */
        jsApiList: JsApiNames[];

        success?: (res?: CheckJsApiSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface CheckJsApiSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {Object} JS 接口字典。
         */
        checkResult: Record<JsApiNames, boolean>;
    }

    interface UpdateAppMessageShareDataOption {
        /**
         * @property {String} 分享标题。
         */
        title: string;
        /**
         * @property {String} 分享描述。
         */
        desc: string;
        /**
         * @property {String} 分享链接。
         */
        link: string;
        /**
         * @property {String} 分享图标。
         */
        imgUrl: string;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface UpdateTimelineShareDataOption {
        /**
         * @property {String} 分享标题。
         */
        title: string;
        /**
         * @property {String} 分享链接。
         */
        link: string;
        /**
         * @property {String} 分享图标。
         */
        imgUrl: string;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OnMenuShareTimelineOption {
        /**
         * @property {String} 分享标题。
         */
        title: string;
        /**
         * @property {String} 分享链接。
         */
        link: string;
        /**
         * @property {String} 分享图标。
         */
        imgUrl: string;

        trigger?: (res?: GeneralCallbackResult) => void;
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OnMenuShareAppMessageOption {
        /**
         * @property {String} 分享标题。
         */
        title: string;
        /**
         * @property {String} 分享描述。
         */
        desc: string;
        /**
         * @property {String} 分享链接。
         */
        link: string;
        /**
         * @property {String} 分享图标。
         */
        imgUrl: string;
        /**
         * @property {String} 分享类型。
         */
        type?: ShareAppMessageTypes;
        /**
         * @property {String} 分享数据链接。
         */
        dataUrl?: string;

        trigger?: (res?: GeneralCallbackResult) => void;
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OnMenuShareQQOption {
        /**
         * @property {String} 分享标题。
         */
        title: string;
        /**
         * @property {String} 分享描述。
         */
        desc: string;
        /**
         * @property {String} 分享链接。
         */
        link: string;
        /**
         * @property {String} 分享图标。
         */
        imgUrl: string;

        trigger?: (res?: GeneralCallbackResult) => void;
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OnMenuShareWeiboOption {
        /**
         * @property {String} 分享标题。
         */
        title: string;
        /**
         * @property {String} 分享描述。
         */
        desc: string;
        /**
         * @property {String} 分享链接。
         */
        link: string;
        /**
         * @property {String} 分享图标。
         */
        imgUrl: string;

        trigger?: (res?: GeneralCallbackResult) => void;
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OnMenuShareQZoneOption {
        /**
         * @property {String} 分享标题。
         */
        title: string;
        /**
         * @property {String} 分享描述。
         */
        desc: string;
        /**
         * @property {String} 分享链接。
         */
        link: string;
        /**
         * @property {String} 分享图标。
         */
        imgUrl: string;

        trigger?: (res?: GeneralCallbackResult) => void;
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ChooseImageOption {
        /**
         * @property {Number} 一次可选择图片数量。
         */
        count?: number;
        /**
         * @property {Array} 指定是原图还是压缩图。
         */
        sizeType?: ImageSizeTypes[];
        /**
         * @property {Array} 指定来源是相册还是相机。
         */
        sourceType?: ImageSourceTypes[];

        cancel?: (res?: GeneralCallbackResult) => void;
        success?: (res?: ChooseImageSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ChooseImageSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {Array} 选定照片的本地 ID 列表。
         */
        localIds: string[];
    }

    interface PreviewImageOption {
        /**
         * @property {String} 当前显示图片的链接。
         */
        current: string;
        /**
         * @property {Array} 需要预览的图片链接列表。
         */
        urls: string[];

        cancel?: (res?: GeneralCallbackResult) => void;
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface UploadImageOption {
        /**
         * @property {String} 需要上传的图片的本地 ID。
         */
        localId: string;
        /**
         * @property {Boolean} 是否显示进度提示。
         */
        isShowProgressTips?: boolean;

        cancel?: (res?: GeneralCallbackResult) => void;
        success?: (res?: UploadImageSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface UploadImageSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 图片的服务端 ID。
         */
        serverId: string;
    }

    interface DownloadImageOption {
        /**
         * @property {String} 需要下载的图片的服务端 ID。
         */
        serverId: string;
        /**
         * @property {Boolean} 是否显示进度提示。
         */
        isShowProgressTips?: boolean;

        cancel?: (res?: GeneralCallbackResult) => void;
        success?: (res?: DownloadImageSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface DownloadImageSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 图片的本地 ID。
         */
        localId: string;
    }

    interface GetLocalImgDataOption {
        /**
         * @property {String} 图片的本地 ID。
         */
        localId: string;

        success?: (res?: GetLocalImgDataSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface GetLocalImgDataSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 图片的 Base64 数据。
         */
        localData: string;
    }

    interface StartRecordOption {
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface StopRecordOption {
        success?: (res?: StopRecordSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface StopRecordSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 录音的本地 ID。
         */
        localId: string;
    }

    interface OnVoiceRecordEndOption {
        complete?: (res?: OnVoiceRecordEndCompleteCallbackResult) => void;
    }

    interface OnVoiceRecordEndCompleteCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 录音的本地 ID。
         */
        localId: string;
    }

    interface PlayVoiceOption {
        /**
         * @property {String} 需要播放的音频的本地 ID。
         */
        localId: string;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface PauseVoiceOption {
        /**
         * @property {String} 需要暂停的音频的本地 ID。
         */
        localId: string;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface StopVoiceOption {
        /**
         * @property {String} 需要停止的音频的本地 ID。
         */
        localId: string;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OnVoicePlayEndOption {
        complete?: (res?: OnVoicePlayEndSuccessCallbackResult) => void;
    }

    interface OnVoicePlayEndSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 音频的本地 ID。
         */
        localId: string;
    }

    interface UploadVoiceOption {
        /**
         * @property {String} 需要上传的音频的本地 ID。
         */
        localId: string;
        /**
         * @property {Boolean} 是否显示进度提示。
         */
        isShowProgressTips?: boolean;

        success?: (res?: UploadVoiceSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface UploadVoiceSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 音频的服务端 ID。
         */
        serverId: string;
    }

    interface DownloadVoiceOption {
        /**
         * @property {String} 需要下载的音频的服务端 ID。
         */
        serverId: string;
        /**
         * @property {Boolean} 是否显示进度提示。
         */
        isShowProgressTips?: boolean;

        success?: (res?: DownloadVoiceSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface DownloadVoiceSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 音频的本地 ID。
         */
        localId: string;
    }

    interface TranslateVoiceOption {
        /**
         * @property {String} 需要上传的音频的本地 ID。
         */
        localId: string;
        /**
         * @property {Boolean} 是否显示进度提示。
         */
        isShowProgressTips?: boolean;

        success?: (res?: TranslateVoiceSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface TranslateVoiceSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 语音识别的结果。
         */
        translateResult: string;
    }

    interface GetNetworkTypeOption {
        success?: (res?: GetNetworkTypeSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface GetNetworkTypeSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 网络类型。
         */
        networkType: string;
    }

    interface OpenLocationOption {
        /**
         * @property {Number} 纬度。
         */
        latitude: number;
        /**
         * @property {Number} 经度。
         */
        longitude: number;
        /**
         * @property {String} 位置名。
         */
        name: string;
        /**
         * @property {String} 地址详情说明。
         */
        address: string;
        /**
         * @property {String} 地图缩放级别。
         */
        scale?: number;
        /**
         * @property {String} 在查看位置界面底部显示的超链接。
         */
        infoUrl?: string;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface GetLocationOption {
        /**
         * @property {String} 坐标类型。
         */
        type?: LocationTypes;

        success?: (res?: GetLocationSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface GetLocationSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {Number} 纬度。
         */
        latitude: number;
        /**
         * @property {Number} 经度。
         */
        longitude: number;
        /**
         * @property {Number} 速度（单位：米每秒）。
         */
        speed: number;
        /**
         * @property {Number} 位置精度。
         */
        accuracy: number;
    }

    interface StartSearchBeaconsOption {
        /**
         * @property {String} 摇周边的业务 Ticket。
         */
        ticket: string;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface StopSearchBeaconsOption {
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OnSearchBeaconsOption {
        complete?: (res?: OnSearchBeaconsCompleteCallbackResult) => void;
    }

    interface OnSearchBeaconsCompleteCallbackResult extends GeneralCallbackResult {
        /**
         * @property {Array} 设备列表。
         */
        beacons: Array<{
            /**
             * @property {String} UUID。
             */
            uuid: string;
            /**
             * @property {Number} Major。
             */
            major: number;
            /**
             * @property {Number} Minor。
             */
            minor: number;
            /**
             * @property {String} 距离（单位：米）。
             */
            accuracy: string;
            /**
             * @property {String} 精度。
             */
            proximity: string;
            /**
             * @property {String} 接收信号的强度指示。
             */
            rssi: string;
            /**
             * @property {String} 接收信号时设备的方向。
             */
            heading?: string;
        }>;
    }

    interface HideMenuItemsOption {
        /**
         * @property {Array} 要隐藏的菜单项。
         */
        menuList: MenuNames[];

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ShowMenuItemsOption {
        /**
         * @property {Array} 要隐藏的菜单项。
         */
        menuList: MenuNames[];

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface HideAllNonBaseMenuItemOption {
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ShowAllNonBaseMenuItemOption {
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ScanQRCodeOption {
        /**
         * @property {Number} 是否直接返回扫描结果。
         */
        needResult?: 0 | 1;
        /**
         * 指定扫二维码还是一维码。
         */
        scanType?: ScanTypes[];

        cancel?: (res?: GeneralCallbackResult) => void;
        success?: (res?: ScanQRCodeSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ScanQRCodeSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 扫描结果。
         */
        resultStr?: string;
    }

    interface OpenProductSpecificViewOption {
        /**
         * @property {String} 商品 ID。
         */
        productId: string;
        /**
         * @property {Number} 页面类型。
         */
        viewType?: ProductSpecificViewTypes;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ChooseCardOption {
        /**
         * @property {String} 门店 ID。
         */
        shopId: string;
        /**
         * @property {String} 卡券类型。
         */
        cardType: string;
        /**
         * @property {String} 卡券 ID。
         */
        cardId: string;
        /**
         * @property {String} 卡券签名时间戳。
         */
        timestamp: string;
        /**
         * @property {String} 卡券签名随机串。
         */
        nonceStr: string;
        /**
         * @property {String} 签名方式。
         */
        signType: string;
        /**
         * @property {String} 卡券签名。
         */
        cardSign: string;

        success?: (res?: ChooseCardSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ChooseCardSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {Array} 卡券列表。
         */
        cardList?: any[];
    }

    interface AddCardOption {
        /**
         * @property {Array} 要添加的卡券列表。
         */
        cardList: Array<{
            /**
             * @property {String} 卡券 ID。
             */
            cardId: string;
            /**
             * @property {String} 卡券扩展参数。
             */
            cardExt?: string;
        }>;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OpenCardOption {
        /**
         * @property {Array} 要打开的卡券列表。
         */
        cardList: Array<{
            /**
             * @property {String} 卡券 ID。
             */
            cardId: string;
            /**
             * @property {String} 卡券 Code。
             */
            code: string;
        }>;

        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface ChooseWXPayOption {
        /**
         * @property {String} 支付签名时间戳。
         */
        timestamp: string;
        /**
         * @property {String} 支付签名随机串。
         */
        nonceStr: string;
        /**
         * @property {String} 支付参数。
         */
        package: string;
        /**
         * @property {String} 签名方式。
         */
        signType: string;
        /**
         * @property {String} 支付签名。
         */
        paySign: string;

        cancel?: (res?: GeneralCallbackResult) => void;
        success?: (res?: GeneralCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OpenAddressOption {
        cancel?: (res?: GeneralCallbackResult) => void;
        success?: (res?: OpenAddressSuccessCallbackResult) => void;
        fail?: (res?: GeneralCallbackResult) => void;
        complete?: (res?: GeneralCallbackResult) => void;
    }

    interface OpenAddressSuccessCallbackResult extends GeneralCallbackResult {
        /**
         * @property {String} 收货人姓名。
         */
        userName: string;
        /**
         * @property {String} 邮编。
         */
        postalCode: string;
        /**
         * @property {String} 国标收货地址第一级地址（省）。
         */
        provinceName: string;
        /**
         * @property {String} 国标收货地址第二级地址（市）。
         */
        cityName: string;
        /**
         * @property {String} 国标收货地址第三级地址（国家）。
         */
        countryName: string;
        /**
         * @property {String} 详细收货地址信息。
         */
        detailInfo: string;
        /**
         * @property {String} 收货地址国家码。
         */
        nationalCode?: string;
        /**
         * @property {String} 收货人手机号码。
         */
        telNumber: string;
    }

    interface Wx {
        /**
         * 注入权限验证配置。
         * @param {Object} option 配置项。
         */
        config(option: ConfigOption): void;

        /**
         * 处理成功的回调方法。
         * @param {Function} callback 回调函数。
         */
        ready(callback: () => void): void;

        /**
         * 处理失败的回调方法。
         * @param {Function} callback 回调函数。
         */
        error(callback: (res?: GeneralCallbackResult) => void): void;

        /**
         * 判断当前客户端版本是否支持指定 JS 接口。
         * @param {Object} option 配置项。
         */
        checkJsApi(option: CheckJsApiOption): void;

        /**
         * 自定义“分享给朋友”及“分享到 QQ”按钮的分享内容。
         * @param {Object} option 配置项。
         */
        updateAppMessageShareData(option: UpdateAppMessageShareDataOption): void;

        /**
         * 自定义“分享到朋友圈”及“分享到 QQ 空间”按钮的分享内容。
         * @param {Object} option 配置项。
         */
        updateTimelineShareData(option: UpdateTimelineShareDataOption): void;

        /**
         * 获取“分享到朋友圈”按钮点击状态及自定义分享内容。
         * @param {Object} option 配置项。
         * @deprecated
         */
        onMenuShareTimeline(option: OnMenuShareTimelineOption): void;

        /**
         * 获取“分享给朋友”按钮点击状态及自定义分享内容。
         * @param {Object} option 配置项。
         * @deprecated
         */
        onMenuShareAppMessage(option: OnMenuShareAppMessageOption): void;

        /**
         * 获取“分享到 QQ”按钮点击状态及自定义分享内容。
         * @param {Object} option 配置项。
         * @deprecated
         */
        onMenuShareQQ(option: OnMenuShareQQOption): void;

        /**
         * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容。
         * @param {Object} option 配置项。
         * @deprecated
         */
        onMenuShareWeibo(option: OnMenuShareWeiboOption): void;

        /**
         * 获取“分享到 QQ 空间”按钮点击状态及自定义分享内容。
         * @param {Object} option 配置项。
         * @deprecated
         */
        onMenuShareQZone(option: OnMenuShareQZoneOption): void;

        /**
         * 拍照或从手机相册中选图。
         * @param {Object} option 配置项。
         */
        chooseImage(option: ChooseImageOption): void;

        /**
         * 预览图片。
         * @param {Object} option 配置项。
         */
        previewImage(option: PreviewImageOption): void;

        /**
         * 上传图片。
         * @param {Object} option 配置项。
         */
        uploadImage(option: UploadImageOption): void;

        /**
         * 下载图片。
         * @param {Object} option 配置项。
         */
        downloadImage(option: DownloadImageOption): void;

        /**
         * 获取本地图片。
         * @param {Object} option 配置项。
         */
        getLocalImgData(option: GetLocalImgDataOption): void;

        /**
         * 开始录音。
         * @param {Object} option 配置项。
         */
        startRecord(option: StartRecordOption): void;

        /**
         * 停止录音。
         * @param {Object} option 配置项。
         */
        stopRecord(option: StopRecordOption): void;

        /**
         * 监听录音自动停止。
         * @param {Object} option 配置项。
         */
        onVoiceRecordEnd(option: OnVoiceRecordEndOption): void;

        /**
         * 播放语音。
         * @param {Object} option 配置项。
         */
        playVoice(option: PlayVoiceOption): void;

        /**
         * 暂停播放。
         * @param {Object} option 配置项。
         */
        pauseVoice(option: PauseVoiceOption): void;

        /**
         * 停止播放接口。
         * @param {Object} option 配置项。
         */
        stopVoice(option: StopVoiceOption): void;

        /**
         * 监听语音播放完毕。
         * @param {Object} option 配置项。
         */
        onVoicePlayEnd(option: OnVoicePlayEndOption): void;

        /**
         * 上传语音。
         * @param {Object} option 配置项。
         */
        uploadVoice(option: UploadVoiceOption): void;

        /**
         * 下载语音。
         * @param {Object} option 配置项。
         */
        downloadVoice(option: DownloadVoiceOption): void;

        /**
         * 识别音频并返回识别结果。
         * @param {Object} option 配置项。
         */
        translateVoice(option: TranslateVoiceOption): void;

        /**
         * 获取网络状态。
         * @param {Object} option 配置项。
         */
        getNetworkType(option: GetNetworkTypeOption): void;

        /**
         * 使用微信内置地图查看位置。
         * @param {Object} option 配置项。
         */
        openLocation(option: OpenLocationOption): void;

        /**
         * 获取地理位置。
         * @param {Object} option 配置项。
         */
        getLocation(option: GetLocationOption): void;

        /**
         * 开启查找周边 iBeacon 设备。
         * @param {Object} option 配置项。
         */
        startSearchBeacons(option: StartSearchBeaconsOption): void;

        /**
         * 关闭查找周边 iBeacon 设备。
         * @param {Object} option 配置项。
         */
        stopSearchBeacons(option?: StopSearchBeaconsOption): void;

        /**
         * 监听周边 iBeacon 设备。
         * @param {Object} option 配置项。
         */
        onSearchBeacons(option: OnSearchBeaconsOption): void;

        /**
         * 关闭当前网页窗口。
         */
        closeWindow(): void;

        /**
         * 隐藏右上角菜单。
         */
        hideOptionMenu(): void;

        /**
         * 显示右上角菜单。
         */
        showOptionMenu(): void;

        /**
         * 批量隐藏功能按钮。
         * @param {Object} option 配置项。
         */
        hideMenuItems(option: HideMenuItemsOption): void;

        /**
         * 批量显示功能按钮。
         * @param {Object} option 配置项。
         */
        showMenuItems(option: ShowMenuItemsOption): void;

        /**
         * 隐藏所有非基础按钮。
         * @param {Object} option 配置项。
         */
        hideAllNonBaseMenuItem(option?: HideAllNonBaseMenuItemOption): void;

        /**
         * 显示所有功能按钮。
         * @param {Object} option 配置项。
         */
        showAllNonBaseMenuItem(option?: ShowAllNonBaseMenuItemOption): void;

        /**
         * 调起微信扫一扫。
         * @param {Object} option 配置项。
         */
        scanQRCode(option: ScanQRCodeOption): void;

        /**
         * 跳转微信商品页。
         * @param {Object} option 配置项。
         */
        openProductSpecificView(option: OpenProductSpecificViewOption): void;

        /**
         * 拉取适用卡券列表并获取用户选择信息。
         * @param {Object} option 配置项。
         */
        chooseCard(option: ChooseCardOption): void;

        /**
         * 批量添加卡券。
         * @param {Object} option 配置项。
         */
        addCard(option: AddCardOption): void;

        /**
         * 查看微信卡包中的卡券。
         * @param {Object} option 配置项。
         */
        openCard(option: OpenCardOption): void;

        /**
         * 发起一个微信支付请求。
         * @param {Object} option 配置项。
         */
        chooseWXPay(option: ChooseWXPayOption): void;

        /**
         * 共享收货地址。
         * @param {Object} option 配置项。
         */
        openAddress(option: OpenAddressOption): void;
    }
}

interface Window {
    wx: typeof wx;
}

declare const wx: WechatJssdk.Wx;
