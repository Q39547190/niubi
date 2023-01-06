/******************************
中车专属破解
畅K互娱
小程序
*******************************
[rewrite_local]
# > 畅K互娱VIP全部功能

^http[s]?:\/\/.+ycvod.+(/My/my|Home).+(myVipNew|UserInfo) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/changKHY.js

[mitm] 
hostname =*interface.ycvod.cn*

******************************/

var body = $response.body;
var url = $request.url;
var vip = JSON.parse(body);
if (url.indexOf("/Home/UserInfo") != -1) {
    vip.data.user_info.VIP_STATUS = 2;
    vip.data.user_info.EXPIRE_DATE = 32493834549;
    vip.data.user_info.FREE_PLAY_STATUS = 1;
    body = JSON.stringify(vip);
}
$done({ "body": body });


