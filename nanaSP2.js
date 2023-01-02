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
var parse = JSON.parse(body);
if (url.indexOf("/user/info") != -1) {
    parse = {"status":{"code":200,"message":"success"},"response":{"user_id":99999999,"email":null,"phone":18888888888,"vip":true,"expiry":9999999999,"invite_code":"us52806408","invite_count":null,"promoter":null,"points":null,"no_purchase":true,"shop_icon":"first","shop_link":"\/v1\/shop\/2","video_views":[10,10]}};
    body = JSON.stringify(parse);


$done({ "body": body });
}
