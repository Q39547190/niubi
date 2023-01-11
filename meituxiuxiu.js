/******************************
中车专属破解
美图秀秀(自己去商店下载)
*******************************
[rewrite_local]
# > 美图秀秀(自己去商店下载)
^https:\/\/.+xiuxiu.+(/user/show.json|/vip/prompt/query.json).+ url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/meituxiuxiu.js

[mitm] 
hostname = *xiuxiu*

******************************/

var $response_body = $response.body;
var $request_url = $request.url;
var parse = JSON.parse($response_body);
if ($request_url.indexOf("/v1/user/show.json") != -1) {
    $response_body = $response.body.replace(/\"free_trial\"\:\d+/g, "\"free_trial\":1").replace(/\"vip_type\"\:\d+/g, "\"vip_type\":1").replace(/\"fan_count\"\:\d+/g, "\"fan_count\":999999999999").replace(/\"pendants_content\"\:[]/g, "\"pendants_content\":[{"url":"https://xximg1.meitudata.com/6852519777427291680.png","link":"meituxiuxiu://webview?url=https%3a%2f%2ftitan-h5.meitu.com%2fxiu-h5%2fframer%2findex.html","width":62,"height":16,"color":"#FCF0FC","title":"美图之星","type":3}]").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"中车专属破解\"").replace(/\"identity_desc\"\:\".*?\"/g, "\"identity_desc\":\"美图秀秀官方认证美图之星\"");
} else if ($request_url.indexOf("/v1/vip/prompt/query.json") != -1) {
    $response_body = $response.body.replace(/\"home_prompt\"\:\".*?\"/g, "\"home_prompt\":\"您的会员将于9999-09-09过期❤️\"").replace(/\"home_btn_prompt\"\:\".*?\"/g, "\"home_btn_prompt\":\"永久不会过期不用看了\"").replace(/\"beautify_btn_prompt\"\:\".*?\"/g, "\"beautify_btn_prompt\":\"\"").replace(/\"beautify_prompt\"\:\".*?\"/g, "\"beautify_prompt\":\"\"");
}
$done({ "body": $response_body });
