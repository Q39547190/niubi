/******************************
中车专属破解
ONE一个🔞
*******************************
[rewrite_local]
# > ONE一个🔞

^https:\/\/.+21ec74.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/ONE.js

[mitm] 
hostname = *cdchuangao*,*21ec74*

******************************/

var url = $request.url;
var vip = $request.headers;
var token = "";
var token2 = "2.4";
var newUrl = url.replace(/-sample/, token);
var newUrl2 = url.replace(/2.5/, token2);
$done({url: newUrl2});
