/******************************
中车专属破解
美图秀秀(自己去商店下载)
*******************************
[rewrite_local]
# > 美图秀秀(自己去商店下载)
^https:\/\/.+xiuxiu.+(/user/show.json|/vip/prompt/query.json).+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/meituxiuxiu.js

[mitm] 
hostname = *xiuxiu*

******************************/

var body = $response.body;
var url = $request.url;
if (url.indexOf("/user/show.json") != -1) {
    body = $response.body.replace(/\"free_trial\"\:\d+/g, "\"free_trial\":1").replace(/\"vip_type\"\:\d+/g, "\"vip_type\":1").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"已破解\"");
} 

if (url.indexOf(/vip/prompt/query.json") != -1) {
    body = $response.body.replace(/\"home_prompt\"\:\".*?\"/g, "\"home_prompt\":\"您的会员将于2030/01/01过期\u3002\"").replace(/\"home_btn_prompt\"\:\".*?\"/g, "\"home_btn_prompt\":\"立即查看\"").replace(/\"beautify_btn_prompt\"\:\".*?\"/g, "\"beautify_btn_prompt\":\"\"").replace(/\"beautify_prompt\"\:\".*?\"/g, "\"beautify_prompt\":\"\"");
}

$done({ "body": body });
