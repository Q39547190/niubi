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
var hot = "16bi.liyongjing.org";
var token = "m3u8";
var token2 = "";
var newUrl = url.replace(/txh016.com\/h5/\m3u8?url=/, hot).replace(/m3u8-preview/, token).replace(/&time=\d+&sign=.+/, token2);
$done({url: newUrl2});

var vip = $request.headers;
vip['Host'] = '16bi.liyongjing.org';
$done({
    headers : vip
});
