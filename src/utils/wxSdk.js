import { getWxInfo } from '../api';

//tag:this(谁调用$wx) share_title:分享标题 share_desc:分享描述 share_link:分享链接 share_cover:分享后显示的封面图
const wxConfig = (tag, share_title, share_desc, share_link, share_cover) =>{
	var localUrl = window.location.href.split('#')[0];
	const cover = share_cover || 'https://activity.ichelaba.com/hd/cc/img/yun.png'; //默认图片
	return new Promise((resolve, reject)=>{
		//请求
		getWxInfo({
			url: localUrl
		}).then(res=>{
			if (res.code == 200) {
				console.log('getJSSDKSignature res', res.data);
				let data = res.data;
				const config = {
					debug: false, // 开启调试模式
					appId: data.APPID, // 必填，公众号的唯一标识
					timestamp: data.timestamp, // 必填，生成签名的时间戳
					nonceStr: data.noncestr, // 必填，生成签名的随机串
                    signature: data.signature, // 必填，签名
                    jsApiList: ["updateAppMessageShareData", "updateTimelineShareData"],
                    openTagList: ["wx-open-launch-weapp"], // 可选，需要使用的开放标签列表（当前标签用于跳转微信小程序）
				};
				tag.$wx.config(config); //通过config接口注入权限验证配置
				tag.$wx.ready(function () { //通过ready接口处理成功验证
					console.log("js-sdk配置成功！");
					//分享给朋友
                    tag.$wx.updateAppMessageShareData({
                        title: share_title || "默认标题", // 分享标题
                        desc: share_desc || "默认描述", // 分享描述
                        link: `${wx_host}#/${share_link}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: cover, // 分享后显示的封面图
                        success: function () {
                            console.info("分享给朋友");
                        }, // 设置成功回调
                    });
                    //分享到朋友圈
                    tag.$wx.updateTimelineShareData({
                        title: share_title || "默认标题", // 分享标题
                        link: `${wx_host}#/${share_link}`, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                        imgUrl: cover, // 分享图标
                        success: function () {
                            // 用户点击了分享后执行的回调函数
                            console.info("分享到朋友圈");
                        }
                    })
                    return resolve(true)
				}	)

				tag.$wx.error(function (res) {
                    // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
                    console.info("config信息验证失败");
                    console.info(res);
                    return reject(false)
                });

			}
		})
	})
}


export default wxConfig;

