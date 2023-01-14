/******************************
中车专属破解
轻颜相机📷最新版(自己去商店下载)
*******************************
[rewrite_local]
# > 轻颜相机📷最新版(自己去商店下载)
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info.*total_memory.* url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/QYXJ.js

[mitm] 
hostname = *faceu*,*retouchpics*

******************************/

var vip = $request.headers;

vip['x-Tt-Token'] = '00d92c845a0798b601cfff0ff6bc691968048463291c894309dd151edcb3f90513652a1a7f9d2e69e3296b55b0ee5e36333282064e1ae4d3ce557bd62b4c35a72bab83a51e54fb2e283b71dc720f797da603495ebb0652efb0d49f3af541deda385dd-1.0.1';
vip['User-Agent'] = 'Beauty 5.0.0 rv:5.0.0.10 (iPhone; iOS 15.3.1; zh_CN) Cronet';
$notify("轻颜相机📷","****破解代码注入成功****","vip破解成功‼️")
$done({ 
  headers: modifiedHeaders 
});

