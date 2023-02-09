/******************************
中车专属破解
91TV破解全部视频
*******************************
[rewrite_local]
# > 91TV破解全部视频

^https:\/\/.+xcsxchen.+m3u8.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/91TV.js

[mitm] 
hostname = *xcsxchen*

******************************/

var url = $request.url;
var token = "";
var newUrl = url.replace(/m3u8-preview/, token);
$done({url: newUrl});
