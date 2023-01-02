/******************************
中车专属破解
娜娜视频
下载地址 https://app.pjli.xyz/i-WS48XLJ
*******************************
[rewrite_local]
# > 娜娜视频全部视频

^http[s]?:\/\/pwa.+(user|ad|shorts).+(info|poster|videos).+ url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/nanaSP2.js

[mitm] 
hostname =*pwa*

******************************/

var body = $response.body;
var url = $request.url;
if (url.indexOf("/user/info") != -1) {
    body = body.replace(/vip":\w+/g, "vip":true").replace(/phone":\w+/g, "phone":18888888888").replace(/expiry":\w+/g, "expiry":9999999999");
$done({ "body": body });
}
