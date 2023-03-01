/******************************
中车专属破解
糖心🔞
*******************************
[rewrite_local]
# > 糖心🔞

^https:\/\/16bi.liyongjing.org.+m3u8.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/tangxin.js

[mitm] 
hostname = *liyongjing*

******************************/

var url = $request.url;
var hot = "16bi.liyongjing.org";
var token = "m3u8";
var token2 = "";
var newUrl = url.replace(/m3u8-preview/, token);


$done({
    url: newUrl
});
