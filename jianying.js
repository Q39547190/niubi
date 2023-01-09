/******************************
中车专属破解
剪映(自己去商店下载)
*******************************
[rewrite_local]
# > 剪映(自己去商店下载)
^https:\/\/commerce-api-lq\.faceu\.mobi\/commerce\/v1.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/jianying.js

[mitm] 
hostname = *faceu*,*retouchpics*

******************************/

var vip = $request.headers;

vip['x-Tt-Token'] = '008b669a103f1dc7b4edbe2b4fe455be2c00c53a9d16370b753f466c85de0e7a1ed6ec6545e6e2417d8109a7e09c0122754a0a9a7073e8c670b3162023d2f62c4470135070c30aebf5a4512588a441a11c6c2ee91ce3565cb310f45cbb66a902f950f-1.0.1';
vip['User-Agent'] = 'VideoFusion 9.5.2 rv:9.5.2.10 (iPhone; iOS 15.3.1; zh_CN) Cronet';
$done({ 
  headers: modifiedHeaders 
});

