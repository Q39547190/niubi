/******************************
中车专属破解
*******************************
[rewrite_local]
# > 神户live
^https:\/\/.+liuniukeji.+\/index.php\/App\/User\/Info url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/shenhu.js

[mitm] 
hostname = *liuniukeji*

*******************************/

var vip = $request.headers;
vip['user-info'] = '00000000';
vip['uid'] = '00000000';
vip['token'] = '00000000000000000000000000000000000000';
vip['system'] = '{"name":"000000","systemName":"iOS","systemVersion":"15.3","model":"iPhone","localizedModel":"iPhone","identifierForVendor":"000000-0000-0000-80E4-0000000000000","isPhysicalDevice":true,"isTF":"1","bundleID":"jp.kobe.liveapp"}';
vip['Content-Length'] = '0';
$done({
    headers : vip
});
