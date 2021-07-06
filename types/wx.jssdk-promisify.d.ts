/// <reference path="./wx.jssdk.d.ts" />

declare namespace WechatJssdk {
    type ISuccessCallbackResultType<T extends { success?: (...args: any) => any }> = Parameters<T['success']>[0];

    interface Wx {
        checkJsApiAsync(option?: CheckJsApiOption): Promise<ISuccessCallbackResultType<CheckJsApiOption>>;

        /* 分享接口 */
        updateAppMessageShareDataAsync(option?: UpdateAppMessageShareDataOption): Promise<ISuccessCallbackResultType<UpdateAppMessageShareDataOption>>;
        updateTimelineShareDataAsync(option?: UpdateTimelineShareDataOption): Promise<ISuccessCallbackResultType<UpdateTimelineShareDataOption>>;
        onMenuShareTimelineAsync(option?: OnMenuShareTimelineOption): Promise<ISuccessCallbackResultType<OnMenuShareTimelineOption>>;
        onMenuShareAppMessageAsync(option?: OnMenuShareAppMessageOption): Promise<ISuccessCallbackResultType<OnMenuShareAppMessageOption>>;
        onMenuShareQQAsync(option?: OnMenuShareQQOption): Promise<ISuccessCallbackResultType<OnMenuShareQQOption>>;
        onMenuShareWeiboAsync(option?: OnMenuShareWeiboOption): Promise<ISuccessCallbackResultType<OnMenuShareWeiboOption>>;
        onMenuShareQZoneAsync(option?: OnMenuShareQZoneOption): Promise<ISuccessCallbackResultType<OnMenuShareQZoneOption>>;

        /* 图像接口 */
        chooseImageAsync(option?: ChooseImageOption): Promise<ISuccessCallbackResultType<ChooseImageOption>>;
        previewImageAsync(option?: PreviewImageOption): Promise<ISuccessCallbackResultType<PreviewImageOption>>;
        uploadImageAsync(option?: UploadImageOption): Promise<ISuccessCallbackResultType<UploadImageOption>>;
        downloadImageAsync(option?: DownloadImageOption): Promise<ISuccessCallbackResultType<DownloadImageOption>>;
        getLocalImgDataAsync(option?: GetLocalImgDataOption): Promise<ISuccessCallbackResultType<GetLocalImgDataOption>>;

        /* 音频接口 */
        startRecordAsync(option?: StartRecordOption): Promise<ISuccessCallbackResultType<StartRecordOption>>;
        stopRecordAsync(option?: StopRecordOption): Promise<ISuccessCallbackResultType<StopRecordOption>>;
        playVoiceAsync(option?: PlayVoiceOption): Promise<ISuccessCallbackResultType<PlayVoiceOption>>;
        pauseVoiceAsync(option?: PauseVoiceOption): Promise<ISuccessCallbackResultType<PauseVoiceOption>>;
        stopVoiceAsync(option?: StopVoiceOption): Promise<ISuccessCallbackResultType<StopVoiceOption>>;
        uploadVoiceAsync(option?: UploadVoiceOption): Promise<ISuccessCallbackResultType<UploadVoiceOption>>;
        downloadVoiceAsync(option?: DownloadVoiceOption): Promise<ISuccessCallbackResultType<DownloadVoiceOption>>;

        /* 智能接口 */
        translateVoiceAsync(option?: TranslateVoiceOption): Promise<ISuccessCallbackResultType<TranslateVoiceOption>>;

        /* 设备信息 */
        getNetworkTypeAsync(option?: GetNetworkTypeOption): Promise<ISuccessCallbackResultType<GetNetworkTypeOption>>;

        /* 地理位置 */
        openLocationAsync(option?: OpenLocationOption): Promise<ISuccessCallbackResultType<OpenLocationOption>>;
        getLocationAsync(option?: GetLocationOption): Promise<ISuccessCallbackResultType<GetLocationOption>>;

        /* 摇一摇周边 */
        startSearchBeaconsAsync(option?: StartSearchBeaconsOption): Promise<ISuccessCallbackResultType<StartSearchBeaconsOption>>;
        stopSearchBeaconsAsync(option?: StopSearchBeaconsOption): Promise<ISuccessCallbackResultType<StopSearchBeaconsOption>>;

        /* 界面操作 */
        hideMenuItemsAsync(option?: HideMenuItemsOption): Promise<ISuccessCallbackResultType<HideMenuItemsOption>>;
        showMenuItemsAsync(option?: ShowMenuItemsOption): Promise<ISuccessCallbackResultType<ShowMenuItemsOption>>;
        hideAllNonBaseMenuItemAsync(option?: HideAllNonBaseMenuItemOption): Promise<ISuccessCallbackResultType<HideAllNonBaseMenuItemOption>>;
        showAllNonBaseMenuItemAsync(option?: ShowAllNonBaseMenuItemOption): Promise<ISuccessCallbackResultType<ShowAllNonBaseMenuItemOption>>;

        /* 微信扫一扫 */
        scanQRCodeAsync(option?: ScanQRCodeOption): Promise<ISuccessCallbackResultType<ScanQRCodeOption>>;

        /* 微信小店 */
        openProductSpecificViewAsync(option?: OpenProductSpecificViewOption): Promise<ISuccessCallbackResultType<OpenProductSpecificViewOption>>;

        /* 微信卡券 */
        chooseCardAsync(option?: ChooseCardOption): Promise<ISuccessCallbackResultType<ChooseCardOption>>;
        addCardAsync(option?: AddCardOption): Promise<ISuccessCallbackResultType<AddCardOption>>;
        openCardAsync(option?: OpenCardOption): Promise<ISuccessCallbackResultType<OpenCardOption>>;

        /* 微信支付 */
        chooseWXPayAsync(option?: ChooseWXPayOption): Promise<ISuccessCallbackResultType<ChooseWXPayOption>>;

        /* 快速输入 */
        openAddressAsync(option?: OpenAddressOption): Promise<ISuccessCallbackResultType<OpenAddressOption>>;
    }
}
