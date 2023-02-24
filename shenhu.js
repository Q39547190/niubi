/******************************
中车专属破解
*******************************
[rewrite_local]
# > 神户live
^https:\/\/api.domain.liuniukeji.heshuangde.com\/index.php\/App\/Host\/Info url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/shenhu.js

[mitm] 
hostname = *liuniukeji*

*******************************/

var vip = $request.headers;
vip['user-info'] = '100565099';
vip['uid'] = '100565099';
vip['token'] = '05185f113fe7ac5eebaa4e01e50267f4';
$done({
    headers : vip
});
