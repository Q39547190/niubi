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
    vip.replace(/VIP_STATUS":(\d+)/, "VIP_STATUS"\:2");
    $done({ "body": body });
}


