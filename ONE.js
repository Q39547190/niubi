/******************************
中车专属破解
ONE一个🔞
*******************************
[rewrite_local]
# > ONE一个🔞

^https:\/\/.+(cdchuangao|21ec74|0qda82zu).+(ad|one|comment).+(mp4|space|list) url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/ONE.js

[mitm] 
hostname = *cdchuangao*,*21ec74*

******************************/

var url = $request.url;
var token = "";
var token2 = "api.0qda82zu.com";
var newUrl = url.replace(/-sample/, token);
var newUrl2 = url.replace(/api.21ec74.com/, token2);

if (url.indexOf("mp4") != -1) {
$done({url: newUrl});
}

if (url.indexOf("/ad/space") != -1) {

$notify("中车专属破解-one一个🚗","****破解代码注入成功****","永久vip破解成功‼️");
}

if (url.indexOf("/comment/list") != -1) {
$done({url: newUrl2});
}
