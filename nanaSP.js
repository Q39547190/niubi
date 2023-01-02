/******************************
中车专属破解
娜娜视频
下载地址 https://app.pjli.xyz/i-WS48XLJ
*******************************
[rewrite_local]
# > 娜娜视频全部视频

^http[s]?:\/\/pwa.+video.+info.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/nanaSP.js

[mitm] 
hostname =*pwa*

******************************/

var url = $request.url;
var obj = $url.query;
obj.token = "eyJ1c2VyX2lkIjo1Mjc3Mjg3MSwibGFzdGxvZ2luIjoxNjcyNDgzODYxfQ.540da036e734961b48a2fbc60ba31a9d.62a6205ce69d4b09d026da90ed92bf54522b37515ec5bcbcf307b292";
$done({url: url.replace(/\?(.*)$/, "?" + $querystring.stringify(obj))});
