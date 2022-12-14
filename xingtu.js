/******************************
中车专属破解
醒图-修出你的美(自己去商店下载)
*******************************
[rewrite_local]
# > 醒图-修出你的美(自己去商店下载)
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xingtu.js

[mitm] 
hostname = *faceu*,*retouchpics*

******************************/

var modifiedHeaders = $request.headers;
modifiedHeaders['User-Agent'] = 'Retouch 6.8.0 rv:6.8.0.31 (iPhone; iOS 15.3.1; zh_CN) Cronet';
$done({ 
  headers: modifiedHeaders 
});


