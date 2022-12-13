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
modifiedHeaders.x-Tt-Token = "007cc1cfb0c9d2583c328612b058d8d0fd05879779847bc986d2185d9f4f23a4f23665536c5d312da609b7133e853a297999d74c65696f5f948aaed366986ba79f292d24d0cd78ec2b5a90211f3e42d858975d54e400195293bd9774b773982ee5f30-1.0.1";
modifiedHeaders.User-Agent = "Retouch 6.8.0 rv:6.8.0.31 (iPhone; iOS 15.3.1; zh_CN) Cronet";
$done({ headers: modifiedHeaders });
