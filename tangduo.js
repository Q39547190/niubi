/******************************
中车专属破解
#糖豆pro
#下载地址 https://td.kkc607.com?channelCode=7Ta2zX4
*******************************
[rewrite_local]
# >糖豆pro

^https:\/\/.+kk.+\/(v1|v2)\/(getAd|auth\/user\/userinfo|auth\/video\/check_play) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/tangdou.js

[mitm] 
hostname =*kkb108*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var img = /"img":".*?"/g;
var vip_expire_at = /"vip_expire_at":".*?"/g;
var nick_name = /"nick_name":".*?"/g;
var phone = /"phone":".*?"/g;
var is_vip = /"is_vip":\d+/g;
var avatar = /"avatar":".*?"/g;
var avatar = /"last_ip_province":".*?"/g;

if (url.indexOf("/auth/user/userinfo") != -1) {

body = body.replace(last_ip_province,'"last_ip_province":"中车专属破解"').replace(vip_expire_at,'"vip_expire_at":"2999-03-15T19:36:57+08:00"').replace(is_vip,'"is_vip":2').replace(phone,'"phone":"18888888888"').replace(avatar,'"avatar":"images/202303/1513/15116623613.png"').replace(nick_name,'"nick_name":"中车大神"');
$done({
    body
});
}

if (url.indexOf("getAd") != -1) {

body = body.replace(img,'"img":"images/202303/1513/15116623613.png"');

$notify("中车专属破解-糖豆pro🚗","****破解代码注入成功****","永久vip破解成功‼️");

$done({
    body
});
}

if (url.indexOf("getAd") != -1) {

parse = {"code":200,"data":{"is_watch":2,"type":"vip","is_vip":2},"message":"操作成功"};

body = JSON.stringify(parse);

$done({ "body": body });

}
