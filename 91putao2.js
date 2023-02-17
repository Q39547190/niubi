/******************************
中车专属破解
91葡萄
*******************************
[rewrite_local]
# > 91葡萄

^https:\/\/.+abcimgs1.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/91putao2.js

[mitm] 
hostname = *abcimgs1*

******************************/

var url = $request.url;
var token = "index";
var newUrl = url.replace(/preview/, token);
$done({url: newUrl});
