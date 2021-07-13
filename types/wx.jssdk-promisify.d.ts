/// <reference path="./wx.jssdk.d.ts" />

declare namespace WechatJssdk {
    namespace Wx {
        type CallbackOption = {
            success?: (...args: any) => void;
            fail?: (...args: any) => void;
            complete?: (...args: any) => void;
        };
        type PromisifiedCallbackOption<T extends CallbackOption> = Omit<T, keyof CallbackOption>;
        type PromisifiedCallbackResult<T extends CallbackOption> = Promise<Parameters<T['success']>[0]>;
    }

    interface Wx {
        checkJsApiAsync(
            options?: Wx.PromisifiedCallbackOption<CheckJsApiOption>
        ): Wx.PromisifiedCallbackResult<CheckJsApiOption>;

        /* 分享接口 */
        updateAppMessageShareDataAsync(
            options?: Wx.PromisifiedCallbackOption<UpdateAppMessageShareDataOption>
        ): Wx.PromisifiedCallbackResult<UpdateAppMessageShareDataOption>;
        updateTimelineShareDataAsync(
            options?: Wx.PromisifiedCallbackOption<UpdateTimelineShareDataOption>
        ): Wx.PromisifiedCallbackResult<UpdateTimelineShareDataOption>;
        onMenuShareTimelineAsync(
            options?: Wx.PromisifiedCallbackOption<OnMenuShareTimelineOption>
        ): Wx.PromisifiedCallbackResult<OnMenuShareTimelineOption>;
        onMenuShareAppMessageAsync(
            options?: Wx.PromisifiedCallbackOption<OnMenuShareAppMessageOption>
        ): Wx.PromisifiedCallbackResult<OnMenuShareAppMessageOption>;
        onMenuShareQQAsync(
            options?: Wx.PromisifiedCallbackOption<OnMenuShareQQOption>
        ): Wx.PromisifiedCallbackResult<OnMenuShareQQOption>;
        onMenuShareWeiboAsync(
            options?: Wx.PromisifiedCallbackOption<OnMenuShareWeiboOption>
        ): Wx.PromisifiedCallbackResult<OnMenuShareWeiboOption>;
        onMenuShareQZoneAsync(
            options?: Wx.PromisifiedCallbackOption<OnMenuShareQZoneOption>
        ): Wx.PromisifiedCallbackResult<OnMenuShareQZoneOption>;

        /* 图像接口 */
        chooseImageAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseImageOption>
        ): Wx.PromisifiedCallbackResult<ChooseImageOption>;
        previewImageAsync(
            options?: Wx.PromisifiedCallbackOption<PreviewImageOption>
        ): Wx.PromisifiedCallbackResult<PreviewImageOption>;
        uploadImageAsync(
            options?: Wx.PromisifiedCallbackOption<UploadImageOption>
        ): Wx.PromisifiedCallbackResult<UploadImageOption>;
        downloadImageAsync(
            options?: Wx.PromisifiedCallbackOption<DownloadImageOption>
        ): Wx.PromisifiedCallbackResult<DownloadImageOption>;
        getLocalImgDataAsync(
            options?: Wx.PromisifiedCallbackOption<GetLocalImgDataOption>
        ): Wx.PromisifiedCallbackResult<GetLocalImgDataOption>;

        /* 音频接口 */
        startRecordAsync(
            options?: Wx.PromisifiedCallbackOption<StartRecordOption>
        ): Wx.PromisifiedCallbackResult<StartRecordOption>;
        stopRecordAsync(
            options?: Wx.PromisifiedCallbackOption<StopRecordOption>
        ): Wx.PromisifiedCallbackResult<StopRecordOption>;
        playVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<PlayVoiceOption>
        ): Wx.PromisifiedCallbackResult<PlayVoiceOption>;
        pauseVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<PauseVoiceOption>
        ): Wx.PromisifiedCallbackResult<PauseVoiceOption>;
        stopVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<StopVoiceOption>
        ): Wx.PromisifiedCallbackResult<StopVoiceOption>;
        uploadVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<UploadVoiceOption>
        ): Wx.PromisifiedCallbackResult<UploadVoiceOption>;
        downloadVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<DownloadVoiceOption>
        ): Wx.PromisifiedCallbackResult<DownloadVoiceOption>;

        /* 智能接口 */
        translateVoiceAsync(
            options?: Wx.PromisifiedCallbackOption<TranslateVoiceOption>
        ): Wx.PromisifiedCallbackResult<TranslateVoiceOption>;

        /* 设备信息 */
        getNetworkTypeAsync(
            options?: Wx.PromisifiedCallbackOption<GetNetworkTypeOption>
        ): Wx.PromisifiedCallbackResult<GetNetworkTypeOption>;

        /* 地理位置 */
        openLocationAsync(
            options?: Wx.PromisifiedCallbackOption<OpenLocationOption>
        ): Wx.PromisifiedCallbackResult<OpenLocationOption>;
        getLocationAsync(
            options?: Wx.PromisifiedCallbackOption<GetLocationOption>
        ): Wx.PromisifiedCallbackResult<GetLocationOption>;

        /* 摇一摇周边 */
        startSearchBeaconsAsync(
            options?: Wx.PromisifiedCallbackOption<StartSearchBeaconsOption>
        ): Wx.PromisifiedCallbackResult<StartSearchBeaconsOption>;
        stopSearchBeaconsAsync(
            options?: Wx.PromisifiedCallbackOption<StopSearchBeaconsOption>
        ): Wx.PromisifiedCallbackResult<StopSearchBeaconsOption>;

        /* 界面操作 */
        hideMenuItemsAsync(
            options?: Wx.PromisifiedCallbackOption<HideMenuItemsOption>
        ): Wx.PromisifiedCallbackResult<HideMenuItemsOption>;
        showMenuItemsAsync(
            options?: Wx.PromisifiedCallbackOption<ShowMenuItemsOption>
        ): Wx.PromisifiedCallbackResult<ShowMenuItemsOption>;
        hideAllNonBaseMenuItemAsync(
            options?: Wx.PromisifiedCallbackOption<HideAllNonBaseMenuItemOption>
        ): Wx.PromisifiedCallbackResult<HideAllNonBaseMenuItemOption>;
        showAllNonBaseMenuItemAsync(
            options?: Wx.PromisifiedCallbackOption<ShowAllNonBaseMenuItemOption>
        ): Wx.PromisifiedCallbackResult<ShowAllNonBaseMenuItemOption>;

        /* 微信扫一扫 */
        scanQRCodeAsync(
            options?: Wx.PromisifiedCallbackOption<ScanQRCodeOption>
        ): Wx.PromisifiedCallbackResult<ScanQRCodeOption>;

        /* 微信小店 */
        openProductSpecificViewAsync(
            options?: Wx.PromisifiedCallbackOption<OpenProductSpecificViewOption>
        ): Wx.PromisifiedCallbackResult<OpenProductSpecificViewOption>;

        /* 微信卡券 */
        chooseCardAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseCardOption>
        ): Wx.PromisifiedCallbackResult<ChooseCardOption>;
        addCardAsync(
            options?: Wx.PromisifiedCallbackOption<AddCardOption>
        ): Wx.PromisifiedCallbackResult<AddCardOption>;
        openCardAsync(
            options?: Wx.PromisifiedCallbackOption<OpenCardOption>
        ): Wx.PromisifiedCallbackResult<OpenCardOption>;

        /* 微信支付 */
        chooseWXPayAsync(
            options?: Wx.PromisifiedCallbackOption<ChooseWXPayOption>
        ): Wx.PromisifiedCallbackResult<ChooseWXPayOption>;

        /* 快速输入 */
        openAddressAsync(
            options?: Wx.PromisifiedCallbackOption<OpenAddressOption>
        ): Wx.PromisifiedCallbackResult<OpenAddressOption>;
    }
}
