/******************************
中车专属破解
禁忌堂破解
*******************************
[rewrite_local]
# > 禁忌堂破解

^https:\/\/huixuewei.com.+m3u8 url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/jinjitang.js

[mitm] 
hostname = *huixuewei*

******************************/

var url = $request.url;
var token = "";
var newUrl = url.replace(/preview/, "");
$done({url: newUrl});
