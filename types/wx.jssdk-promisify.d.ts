/// <reference path="./wx.jssdk.d.ts" />

declare namespace WechatJssdk {
    namespace Wx {
        type CallbackOption = {
            success?: (...args: any) => void;
            fail?: (...args: any) => void;
            complete?: (...args: any) => void;
        };
        type PromisifiedOption<T extends CallbackOption> = Omit<T, keyof CallbackOption>;
        type PromisifiedResult<T extends CallbackOption> = Promise<Parameters<T['success']>[0]>;
    }

    interface Wx {
        checkJsApiAsync(options?: Wx.PromisifiedOption<CheckJsApiOption>): Wx.PromisifiedResult<CheckJsApiOption>;

        /* 分享接口 */
        updateAppMessageShareDataAsync(
            options?: Wx.PromisifiedOption<UpdateAppMessageShareDataOption>
        ): Wx.PromisifiedResult<UpdateAppMessageShareDataOption>;
        updateTimelineShareDataAsync(
            options?: Wx.PromisifiedOption<UpdateTimelineShareDataOption>
        ): Wx.PromisifiedResult<UpdateTimelineShareDataOption>;
        onMenuShareTimelineAsync(
            options?: Wx.PromisifiedOption<OnMenuShareTimelineOption>
        ): Wx.PromisifiedResult<OnMenuShareTimelineOption>;
        onMenuShareAppMessageAsync(
            options?: Wx.PromisifiedOption<OnMenuShareAppMessageOption>
        ): Wx.PromisifiedResult<OnMenuShareAppMessageOption>;
        onMenuShareQQAsync(
            options?: Wx.PromisifiedOption<OnMenuShareQQOption>
        ): Wx.PromisifiedResult<OnMenuShareQQOption>;
        onMenuShareWeiboAsync(
            options?: Wx.PromisifiedOption<OnMenuShareWeiboOption>
        ): Wx.PromisifiedResult<OnMenuShareWeiboOption>;
        onMenuShareQZoneAsync(
            options?: Wx.PromisifiedOption<OnMenuShareQZoneOption>
        ): Wx.PromisifiedResult<OnMenuShareQZoneOption>;

        /* 图像接口 */
        chooseImageAsync(options?: Wx.PromisifiedOption<ChooseImageOption>): Wx.PromisifiedResult<ChooseImageOption>;
        previewImageAsync(options?: Wx.PromisifiedOption<PreviewImageOption>): Wx.PromisifiedResult<PreviewImageOption>;
        uploadImageAsync(options?: Wx.PromisifiedOption<UploadImageOption>): Wx.PromisifiedResult<UploadImageOption>;
        downloadImageAsync(
            options?: Wx.PromisifiedOption<DownloadImageOption>
        ): Wx.PromisifiedResult<DownloadImageOption>;
        getLocalImgDataAsync(
            options?: Wx.PromisifiedOption<GetLocalImgDataOption>
        ): Wx.PromisifiedResult<GetLocalImgDataOption>;

        /* 音频接口 */
        startRecordAsync(options?: Wx.PromisifiedOption<StartRecordOption>): Wx.PromisifiedResult<StartRecordOption>;
        stopRecordAsync(options?: Wx.PromisifiedOption<StopRecordOption>): Wx.PromisifiedResult<StopRecordOption>;
        playVoiceAsync(options?: Wx.PromisifiedOption<PlayVoiceOption>): Wx.PromisifiedResult<PlayVoiceOption>;
        pauseVoiceAsync(options?: Wx.PromisifiedOption<PauseVoiceOption>): Wx.PromisifiedResult<PauseVoiceOption>;
        stopVoiceAsync(options?: Wx.PromisifiedOption<StopVoiceOption>): Wx.PromisifiedResult<StopVoiceOption>;
        uploadVoiceAsync(options?: Wx.PromisifiedOption<UploadVoiceOption>): Wx.PromisifiedResult<UploadVoiceOption>;
        downloadVoiceAsync(
            options?: Wx.PromisifiedOption<DownloadVoiceOption>
        ): Wx.PromisifiedResult<DownloadVoiceOption>;

        /* 智能接口 */
        translateVoiceAsync(
            options?: Wx.PromisifiedOption<TranslateVoiceOption>
        ): Wx.PromisifiedResult<TranslateVoiceOption>;

        /* 设备信息 */
        getNetworkTypeAsync(
            options?: Wx.PromisifiedOption<GetNetworkTypeOption>
        ): Wx.PromisifiedResult<GetNetworkTypeOption>;

        /* 地理位置 */
        openLocationAsync(options?: Wx.PromisifiedOption<OpenLocationOption>): Wx.PromisifiedResult<OpenLocationOption>;
        getLocationAsync(options?: Wx.PromisifiedOption<GetLocationOption>): Wx.PromisifiedResult<GetLocationOption>;

        /* 摇一摇周边 */
        startSearchBeaconsAsync(
            options?: Wx.PromisifiedOption<StartSearchBeaconsOption>
        ): Wx.PromisifiedResult<StartSearchBeaconsOption>;
        stopSearchBeaconsAsync(
            options?: Wx.PromisifiedOption<StopSearchBeaconsOption>
        ): Wx.PromisifiedResult<StopSearchBeaconsOption>;

        /* 界面操作 */
        hideMenuItemsAsync(
            options?: Wx.PromisifiedOption<HideMenuItemsOption>
        ): Wx.PromisifiedResult<HideMenuItemsOption>;
        showMenuItemsAsync(
            options?: Wx.PromisifiedOption<ShowMenuItemsOption>
        ): Wx.PromisifiedResult<ShowMenuItemsOption>;
        hideAllNonBaseMenuItemAsync(
            options?: Wx.PromisifiedOption<HideAllNonBaseMenuItemOption>
        ): Wx.PromisifiedResult<HideAllNonBaseMenuItemOption>;
        showAllNonBaseMenuItemAsync(
            options?: Wx.PromisifiedOption<ShowAllNonBaseMenuItemOption>
        ): Wx.PromisifiedResult<ShowAllNonBaseMenuItemOption>;

        /* 微信扫一扫 */
        scanQRCodeAsync(options?: Wx.PromisifiedOption<ScanQRCodeOption>): Wx.PromisifiedResult<ScanQRCodeOption>;

        /* 微信小店 */
        openProductSpecificViewAsync(
            options?: Wx.PromisifiedOption<OpenProductSpecificViewOption>
        ): Wx.PromisifiedResult<OpenProductSpecificViewOption>;

        /* 微信卡券 */
        chooseCardAsync(options?: Wx.PromisifiedOption<ChooseCardOption>): Wx.PromisifiedResult<ChooseCardOption>;
        addCardAsync(options?: Wx.PromisifiedOption<AddCardOption>): Wx.PromisifiedResult<AddCardOption>;
        openCardAsync(options?: Wx.PromisifiedOption<OpenCardOption>): Wx.PromisifiedResult<OpenCardOption>;
        consumeAndShareCardAsync(
            options?: Wx.PromisifiedOption<ConsumeAndShareCardOption>
        ): Wx.PromisifiedResult<ConsumeAndShareCardOption>;

        /* 微信支付 */
        chooseWXPayAsync(options?: Wx.PromisifiedOption<ChooseWXPayOption>): Wx.PromisifiedResult<ChooseWXPayOption>;
        openBusinessViewAsync(
            options?: Wx.PromisifiedOption<OpenBusinessViewOption>
        ): Wx.PromisifiedResult<OpenBusinessViewOption>;

        /* 快速输入 */
        openAddressAsync(options?: Wx.PromisifiedOption<OpenAddressOption>): Wx.PromisifiedResult<OpenAddressOption>;

        /* 小程序 */
        launchMiniProgramAsync(
            options?: Wx.PromisifiedOption<LaunchMiniProgramOption>
        ): Wx.PromisifiedResult<LaunchMiniProgramOption>;

        /* 企业微信 */
        openEnterpriseRedPacketAsync(
            options?: Wx.PromisifiedOption<OpenEnterpriseRedPacketOption>
        ): Wx.PromisifiedResult<OpenEnterpriseRedPacketOption>;
        openEnterpriseChatAsync(
            options?: Wx.PromisifiedOption<OpenEnterpriseChatOption>
        ): Wx.PromisifiedResult<OpenEnterpriseChatOption>;
    }
}
