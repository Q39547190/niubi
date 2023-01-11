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
if ($request_url.indexOf("/v1/h5/vip/sub_detail.json") != -1) {
    $response_body = $response.body.replace(/\"old_vip_type\"\:\d+/g, "\"old_vip_type\":4").replace(/\"is_expire\"\:\d+/g, "\"is_expire\":0").replace(/\"sub_type\"\:\d+/g, "\"sub_type\":8").replace(/\"expire_days\"\:.*?/g, "\"expire_days\":-999").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"已破解\"").replace(/\"invalid_time\"\:\d+/g, "\"invalid_time\":1893430861");
    parse.data.valid_time = 1642350722;
    parse.data.is_expire = 0;
    parse.data.old_vip_type = 4;
    parse.data.expire_days = -999;
    parse.data.renew = 1;
    parse.data.exchange_vip = 0;
    parse.data.screen_name = "已破解";
    parse.data.invalid_time = 1893430861;
    $response_body = JSON.stringify(parse);
} else if ($request_url.indexOf("/v1/h5/vip/user_detail.json") != -1) {
    $response_body = $response.body.replace(/\"old_vip_type\"\:\d+/g, "\"old_vip_type\":4").replace(/\"is_expire\"\:\d+/g, "\"is_expire\":0").replace(/\"sub_type\"\:\d+/g, "\"sub_type\":8").replace(/\"expire_days\"\:.*?/g, "\"expire_days\":-999").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"已破解\"").replace(/\"invalid_time\"\:\d+/g, "\"invalid_time\":1893430861");
    parse.data.valid_time = 1642350722;
    parse.data.is_expire = 0;
    parse.data.old_vip_type = 4;
    parse.data.sub_type = 8;
    parse.data.show_auto_renew = 0;
    parse.data.expire_days = -999;
    parse.data.renew = 1;
    parse.data.exchange_vip = 0;
    parse.data.screen_name = "已破解";
    parse.data.invalid_time = 1893430861;
    $response_body = JSON.stringify(parse);
} else if ($request_url.indexOf("/v1/vip/vip_show.json") != -1) {
    $response_body = $response.body.replace(/\"old_vip_type\"\:\d+/g, "\"old_vip_type\":4").replace(/\"is_expire\"\:\d+/g, "\"is_expire\":0").replace(/\"sub_type\"\:\d+/g, "\"sub_type\":8").replace(/\"expire_days\"\:.*?/g, "\"expire_days\":-999").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"已破解\"").replace(/\"invalid_time\"\:\d+/g, "\"invalid_time\":1893430861");
    parse.data.id = 6888888888888889000;
    parse.data.id_str = "6888888888888888888";
    parse.data.valid_time = 1642350000;
    parse.data.sub_type = 3;
    parse.data.sub_biz_type = 1;
    parse.data.avatar_url = "http://maavatar1.meitudata.com/a14872cb2e0273a0aa04c0d7674fa457.png";
    parse.data.is_expire = 0;
    parse.data.expire_days = -999;
    parse.data.gid = 2500000000;
    parse.data.vip_type = 101;
    parse.data.platform = 2;
    parse.data.sub_name = "包年";
    parse.data.renew = 2;
    parse.data.s = 1;
    parse.data.is_valid_user = 1;
    parse.data.create_time = 1642350000;
    parse.data.screen_name = "已破解";
    parse.data.in_valid_time = 1893430861;
    $response_body = JSON.stringify(parse);
} else if ($request_url.indexOf("/v1/user/show.json") != -1) {
    $response_body = $response.body.replace(/\"free_trial\"\:\d+/g, "\"free_trial\":1").replace(/\"vip_type\"\:\d+/g, "\"vip_type\":1").replace(/\"screen_name\"\:\".*?\"/g, "\"screen_name\":\"已破解\"");
} else if ($request_url.indexOf("/v1/vip/prompt/query.json") != -1) {
    $response_body = $response.body.replace(/\"home_prompt\"\:\".*?\"/g, "\"home_prompt\":\"您的会员将于2030/01/01过期\u3002\"").replace(/\"home_btn_prompt\"\:\".*?\"/g, "\"home_btn_prompt\":\"立即查看\"").replace(/\"beautify_btn_prompt\"\:\".*?\"/g, "\"beautify_btn_prompt\":\"\"").replace(/\"beautify_prompt\"\:\".*?\"/g, "\"beautify_prompt\":\"\"");
} else if ($request_url.indexOf("/v1/account/verify_credentials.json") != -1) {
    parse.data.vip_type = 1;
    parse.data.screen_name = "已破解";
    parse.data.free_trial = 1;
    $response_body = JSON.stringify(parse);
}
$done({ "body": $response_body });
