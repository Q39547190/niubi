/******************************
中车专属破解
*******************************
[rewrite_local]
# > 漫画神器🐶

^https:\/\/pay2\.pigqq\.com\/Orders\/GetMemberVipTime url script-response-body https://ghproxy.com/https://raw.githubusercontent.com/Q39547190/niubi/main/manhuashenqi.js

[mitm] 
hostname = pay2.pigqq.com*


*******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);

if (url.indexOf("GetMemberVipTime") != -1) {
   parse = {"status":1,"info":"success","count":0,"data":{"curtime":"2023-09-30T08:20:20.1385344+08:00","message":"用户与设备匹配","viptime":"9999-09-30T00:00:00","isvip":true,"nviptime":"9999-09-30T00:00:00","isnvip":true}};

$notify("中车专属破解-漫画神器🐶","****破解代码注入成功****","永久vip破解成功‼️");

body = JSON.stringify(parse);

$done({ "body": body });
}
