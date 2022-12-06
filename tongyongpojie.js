/******************************
中车专属破解

QQ传媒 2022.12.6
下载地址：https://qq.app002.life/?code=dTD4

-------分割线------

50度灰 2022.12.6
下载地址：https://50.aff007.cool/chan/h50352/dJEah

-------分割线------

*******************************
[rewrite_local]
# > 通用破解全部视频
^http[s]?:\/\/.+ludeng.+watch.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/50duhui.js

[mitm] 
hostname = h5play*,*ludeng*

*******************************/

var vip = $request.headers;
vip['Host'] = 'long.ludeng.co';
$done({
    headers : vip
});
