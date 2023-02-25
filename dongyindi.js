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

if (url.indexOf("/media/play") != -1) {

vip['authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2Nzk4MzU4NjksImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6NjYzNjEwMn0.8UetDIBtYEWN-jbncl-t6JRu3JsXWtcXkSPFBxL5OgI';
vip['user-agent'] = 'DevID%3DE3A45292-2CCC-4149-B5B7-1335F60DE196%3BDevType%3DiOS%3A15.0%3BSysType%3Dios%3BVer%3D2.4.3%3BBuildID%3Dhqyy_opera';

$done({
    headers : vip
});

}
