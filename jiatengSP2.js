/******************************
中车专属破解
加藤视频🔞
*******************************
[rewrite_local]
# > 加藤视频🔞

^https:\/\/filelong.dzeyu.com.+m3u8 url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/jiatengSP2.js

[mitm] 
hostname = *filelong.dzeyu.com*,

******************************/

var url = $request.url;
var vip = $request.headers;
var token = "trailer";
var newUrl = url.replace(/try/, token);
$done({url: newUrl});
