/******************************
中车专属破解
醒图-修出你的美(自己去商店下载)
*******************************
[rewrite_local]
# > 醒图-修出你的美(自己去商店下载)
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info\?(iid|.&aid|.&iid).* url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xingtu.js

[mitm] 
hostname = *faceu*,*retouchpics*

******************************/

var vip = $request.headers;

vip['x-Tt-Token'] = '0015dadfedf3108ad757cd3002edbd4d9e02abeb921d666860296643fe697d427c5c63a9f2ca13e8cf1a52e4c04c3227be121051afbd0ee1fdbc712075aa491fdd6f3a01ee00dd571d4ef0c7baf60a34b9877c306954f634c4b98e0f22581f757f8cd-1.0.1';
vip['User-Agent'] = 'Retouch 6.8.0 rv:6.8.0.31 (iPhone; iOS 15.3.1; zh_CN) Cronet';
$done({ 
  headers: vip 
});

