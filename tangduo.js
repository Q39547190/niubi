/******************************
中车专属破解
糖豆pro
下载地址 https://td.kkc607.com?channelCode=7Ta2zX4
*******************************
[rewrite_local]
# >糖豆pro

^https:\/\/.+kk.+\/(v1|v2)\/(getAd|auth\/user\/userinfo|auth\/video\/check_play|auth\/bannerList) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/tangduo.js

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

parse = {
  "message" : "操作成功",
  "data" : {
    "last_ip_province" : "中车专属破解",
    "vip_expire_at" : "2999-03-15T19:36:57+08:00",
    "my_fun_count" : 999999,
    "summary" : "永久会员",
    "watch_coupon" : 3,
    "base_down_coupon" : 0,
    "base_watch_coupon" : 3,
    "my_submit_count" : 0,
    "sex" : 1,
    "video_count" : 0,
    "last_ip" : "2408:8456:f13f:c0a3:ed13:dd21:4265:3ff7",
    "balance" : 99999999,
    "my_collect" : 0,
    "id" : "29f6dd64-fe12-4ebe-bf2d-cddcaf44fcae",
    "invitecode" : "7Ta2zX4",
    "is_vip" : 2,
    "email" : "",
    "phone" : "18888888888",
    "my_attention_count" : 0,
    "avatar" : "images/202303/1513/15116623613.png",
    "nick_name" : "中车大神",
    "created_at" : "2023-03-15T19:36:57+08:00",
    "pid" : "",
    "down_coupon" : 0,
    "count_invite" : 0
  },
  "code" : 200
};

body = JSON.stringify(parse);

$done({ "body": body });

}

if (url.indexOf("getAd") != -1) {

body = body.replace(img,'"img":"images/202303/1513/15116623613.png"');

$notify("中车专属破解-糖豆pro🚗","****破解代码注入成功****","永久vip破解成功‼️");

$done({
    body
});
}

if (url.indexOf("/video/check_play") != -1) {

parse = {"code":200,"data":{"is_watch":2,"type":"vip","is_vip":2},"message":"操作成功"};

body = JSON.stringify(parse);

$done({ "body": body });

}

if (url.indexOf("/auth/bannerList") != -1) {

body = body.replace(img,'"img":"images/202303/1513/15116623613.png"');

$done({
    body
});
}
