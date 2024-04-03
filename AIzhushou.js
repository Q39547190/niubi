
/******************************
中车专属破解
*******************************
[rewrite_local]

^https:\/\/mingnianbaofu\.top\/api\/app\/user\/getCurrentInfo url script-response-body https://mirror.ghproxy.com/https://raw.githubusercontent.com/Q39547190/niubi/main/AIzhushou.js

[mitm] 
hostname =*mingnianbaofu.top*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var nickname = /"nickname":".*?"/g;
var avatar = /"avatar":".*?"/g;
var vipStatus = /"vipStatus":"\d+"/g;
var vipLabel = /"vipLabel":"\d+"/g;

if (url.indexOf("/user/getCurrentInfo") != -1) {

body = body.replace(avatar,'"avatar":"https://cdn-upyun-images.dushu365.com/16780925047b3dd56c7b43caf85e4827dc24a193b655ontm"').replace(nickname,'"nickname":"中车专属破解"').replace(vipStatus,'"vipStatus":"1"').replace(vipLabel,'"vipLabel":"1"');

$notify("中车专属破解-Ai助手","****破解代码注入成功****","永久vip破解成功‼️");

$done({
    body
});
}
