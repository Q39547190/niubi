/******************************
中车专属破解

Muscle Booster(健身软件)
下载地址 https://apps.apple.com/cn/app/muscle-booster-%E8%AE%BE%E8%AE%A1%E7%9A%84%E5%81%A5%E8%BA%AB%E6%95%99%E7%BB%83/id1446447749
*******************************
[rewrite_local]
# >Muscle Booster(健身软件)

^https:\/\/menscoach-api.asqq.io\/prod\/(user|check-receipt|subscription-restore) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/mbZS.js

[mitm] 
hostname =*menscoach*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var is_validation_success = /"is_validation_success":\s+\w+/g;
var is_paid = /"is_paid":\s+\w+/g;
var name = /"name":\s+".*?"/g;

if (url.indexOf("subscription-restore") != -1) {

body = body.replace(is_validation_success,'"is_validation_success":true');

$notify("中车专属破解-Muscle Booster 🏊","****破解代码注入成功****","永久vip破解成功‼️");

$done({
    body
});
}

if (url.indexOf("user") != -1) {

body = body.replace(is_paid,'"is_paid":true').replace(name,'"name":"中车大神"');

$notify("中车专属破解-Muscle Booster 🏊","****破解代码注入成功****","永久vip破解成功‼️");

$done({
    body
});
}

if (url.indexOf("check-receipt") != -1) {

body = body.replace(is_paid,'"is_paid":true').replace(name,'"name":"中车大神"');

$notify("中车专属破解-Muscle Booster 🏊","****破解代码注入成功****","永久vip破解成功‼️");

$done({
    body
});
}
