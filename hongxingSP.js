/******************************
中车专属破解
红杏视频🔞
*******************************
[rewrite_local]
# > 红杏视频🔞

^https:\/\/api.jgf985.com\/WebApp\/WebUser\/WebUserInfo url response-body username":".*?" response-body username":"中车专属破解"

^https:\/\/.+peilinwenhua.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/hongxingSP.js

[mitm] 
hostname = *peilinwenhua*,

******************************/

var url = $request.url;
var vip = $request.headers;
var token = "";
var newUrl = url.replace(/&time=\d+&segments=\d+/, token);
$done({url: newUrl});
