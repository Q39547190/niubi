/******************************
中车专属破解
糖心🔞
*******************************
[rewrite_local]
# > 糖心🔞

^https:\/\/txh016.+m3u8.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/tangxin.js

[mitm] 
hostname = *txh016*

******************************/

var url = $request.url;
var hot = "";
var token = "m3u8";
var token2 = "";
var newUrl = url.replace(/\/h5\/m3u8\?url=/, hot).replace(/m3u8-preview/, token).replace(/&time=\d+&sign=.+/, token2);
$done({url: newUrl});
