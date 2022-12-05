/******************************
中车专属破解
M3u8 网址提取
*******************************
[rewrite_local]
# > 50度灰全部视频
^http[s]?:\/\/.+ludeng.+watch9.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/50duhui.js

[mitm] 
hostname = 120play*,*ludeng*

*******************************/

var vip = $request.url;
var urls = vip.replace(/h5play/g,"long");
$done({urls});
