/******************************
中车专属破解
ONE一个🔞
*******************************
[rewrite_local]
# > ONE一个🔞

^https:\/\/.+(cdchuangao|21ec74|0qda82zu).+(ad|one|comment|article).+(mp4|space|list|detail) url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/ONE.js

[mitm] 
hostname = *cdchuangao*,*21ec74*

******************************/

var url = $request.url;
var vip = $request.headers;
var token = "";
var newUrl = url.replace(/-sample/, token);

if (url.indexOf("mp4") != -1) {
$done({url: newUrl});
}

if (url.indexOf("/ad/space") != -1) {

$notify("中车专属破解-one一个🚗","****破解代码注入成功****","永久vip破解成功‼️");
}

if (url.indexOf("/comment/list") != -1) {

vip['Host'] = 'api.0qda82zu.com';
vip['Referer'] = 'https://byym79.com/';
$done({
    headers : vip
});
}

if (url.indexOf("/article/detail") != -1) {

vip['Host'] = 'api.0qda82zu.com';
vip['Referer'] = 'https://byym79.com/';
$done({
    headers : vip
});
}
