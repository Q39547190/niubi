/******************************
中车专属破解
M3u8 网址提取
*******************************
[rewrite_local]
# > 50度灰破解全部视频
^http[s]?:\/\/.+ludeng.+watch.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/50duhui.js

[mitm] 
hostname = h5play*,*ludeng*

*******************************/

var vip = $request.headers;
vip['Host'] = 'long.ludeng.co';
$done({
    headers : vip
});
