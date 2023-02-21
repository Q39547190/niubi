/******************************
中车专属破解
含羞草研究所
*******************************
[rewrite_local]
# > 含羞草研究所

^https:\/\/.+hbcl.+m3u8.+sign.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/hanxiucao2.js

[mitm] 
hostname = *hbcl*

******************************/

var url = $request.url;
var token = "";
var newUrl = url.replace(/start=\d+&end=\d+&/, token);
$done({url: newUrl});
