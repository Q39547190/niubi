/******************************
中车专属破解
懂阴帝🔞

*******************************
[rewrite_local]
# > 懂阴帝🔞
#下载地址https://2bwhhp.com?pc=LCHZJ7V9

^https:\/\/.+djqyarm.+(m3u8|app).+(m3u8|login\/guest|play) url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/dongyindi.js

[mitm] 
hostname = *djqyarm*

******************************/

var url = $request.url;
var vip = $request.headers;
var token = "";
var newUrl = url.replace(/_0001/, token);

if (url.indexOf("m3u8") != -1) {

$done({url: newUrl});
}

if (url.indexOf("/login/guest") != -1) {

vip['device'] = 'ios';

$notify("中车专属破解-懂阴帝🚗","****破解代码注入成功****","破解全部视频成功‼️");

$done({
    headers : vip
});

}
