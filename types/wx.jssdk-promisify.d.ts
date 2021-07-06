/// <reference path="./wx.jssdk.d.ts" />

declare namespace WechatJssdk {
    namespace Wx {
        type PromisifiedCallbackResult<T extends { success?: (...args: any) => any }> = Promise<Parameters<T['success']>[0]>;
    }

    interface Wx {
        checkJsApiAsync(options?: CheckJsApiOption): Wx.PromisifiedCallbackResult<CheckJsApiOption>;

        /* 分享接口 */
        updateAppMessageShareDataAsync(options?: UpdateAppMessageShareDataOption): Wx.PromisifiedCallbackResult<UpdateAppMessageShareDataOption>;
        updateTimelineShareDataAsync(options?: UpdateTimelineShareDataOption): Wx.PromisifiedCallbackResult<UpdateTimelineShareDataOption>;
        onMenuShareTimelineAsync(options?: OnMenuShareTimelineOption): Wx.PromisifiedCallbackResult<OnMenuShareTimelineOption>;
        onMenuShareAppMessageAsync(options?: OnMenuShareAppMessageOption): Wx.PromisifiedCallbackResult<OnMenuShareAppMessageOption>;
        onMenuShareQQAsync(options?: OnMenuShareQQOption): Wx.PromisifiedCallbackResult<OnMenuShareQQOption>;
        onMenuShareWeiboAsync(options?: OnMenuShareWeiboOption): Wx.PromisifiedCallbackResult<OnMenuShareWeiboOption>;
        onMenuShareQZoneAsync(options?: OnMenuShareQZoneOption): Wx.PromisifiedCallbackResult<OnMenuShareQZoneOption>;

        /* 图像接口 */
        chooseImageAsync(options?: ChooseImageOption): Wx.PromisifiedCallbackResult<ChooseImageOption>;
        previewImageAsync(options?: PreviewImageOption): Wx.PromisifiedCallbackResult<PreviewImageOption>;
        uploadImageAsync(options?: UploadImageOption): Wx.PromisifiedCallbackResult<UploadImageOption>;
        downloadImageAsync(options?: DownloadImageOption): Wx.PromisifiedCallbackResult<DownloadImageOption>;
        getLocalImgDataAsync(options?: GetLocalImgDataOption): Wx.PromisifiedCallbackResult<GetLocalImgDataOption>;

        /* 音频接口 */
        startRecordAsync(options?: StartRecordOption): Wx.PromisifiedCallbackResult<StartRecordOption>;
        stopRecordAsync(options?: StopRecordOption): Wx.PromisifiedCallbackResult<StopRecordOption>;
        playVoiceAsync(options?: PlayVoiceOption): Wx.PromisifiedCallbackResult<PlayVoiceOption>;
        pauseVoiceAsync(options?: PauseVoiceOption): Wx.PromisifiedCallbackResult<PauseVoiceOption>;
        stopVoiceAsync(options?: StopVoiceOption): Wx.PromisifiedCallbackResult<StopVoiceOption>;
        uploadVoiceAsync(options?: UploadVoiceOption): Wx.PromisifiedCallbackResult<UploadVoiceOption>;
        downloadVoiceAsync(options?: DownloadVoiceOption): Wx.PromisifiedCallbackResult<DownloadVoiceOption>;

        /* 智能接口 */
        translateVoiceAsync(options?: TranslateVoiceOption): Wx.PromisifiedCallbackResult<TranslateVoiceOption>;

        /* 设备信息 */
        getNetworkTypeAsync(options?: GetNetworkTypeOption): Wx.PromisifiedCallbackResult<GetNetworkTypeOption>;

        /* 地理位置 */
        openLocationAsync(options?: OpenLocationOption): Wx.PromisifiedCallbackResult<OpenLocationOption>;
        getLocationAsync(options?: GetLocationOption): Wx.PromisifiedCallbackResult<GetLocationOption>;

        /* 摇一摇周边 */
        startSearchBeaconsAsync(options?: StartSearchBeaconsOption): Wx.PromisifiedCallbackResult<StartSearchBeaconsOption>;
        stopSearchBeaconsAsync(options?: StopSearchBeaconsOption): Wx.PromisifiedCallbackResult<StopSearchBeaconsOption>;

        /* 界面操作 */
        hideMenuItemsAsync(options?: HideMenuItemsOption): Wx.PromisifiedCallbackResult<HideMenuItemsOption>;
        showMenuItemsAsync(options?: ShowMenuItemsOption): Wx.PromisifiedCallbackResult<ShowMenuItemsOption>;
        hideAllNonBaseMenuItemAsync(options?: HideAllNonBaseMenuItemOption): Wx.PromisifiedCallbackResult<HideAllNonBaseMenuItemOption>;
        showAllNonBaseMenuItemAsync(options?: ShowAllNonBaseMenuItemOption): Wx.PromisifiedCallbackResult<ShowAllNonBaseMenuItemOption>;

        /* 微信扫一扫 */
        scanQRCodeAsync(options?: ScanQRCodeOption): Wx.PromisifiedCallbackResult<ScanQRCodeOption>;

        /* 微信小店 */
        openProductSpecificViewAsync(options?: OpenProductSpecificViewOption): Wx.PromisifiedCallbackResult<OpenProductSpecificViewOption>;

        /* 微信卡券 */
        chooseCardAsync(options?: ChooseCardOption): Wx.PromisifiedCallbackResult<ChooseCardOption>;
        addCardAsync(options?: AddCardOption): Wx.PromisifiedCallbackResult<AddCardOption>;
        openCardAsync(options?: OpenCardOption): Wx.PromisifiedCallbackResult<OpenCardOption>;

        /* 微信支付 */
        chooseWXPayAsync(options?: ChooseWXPayOption): Wx.PromisifiedCallbackResult<ChooseWXPayOption>;

        /* 快速输入 */
        openAddressAsync(options?: OpenAddressOption): Wx.PromisifiedCallbackResult<OpenAddressOption>;
    }
}
