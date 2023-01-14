/******************************
中车专属破解
醒图-修出你的美(自己去商店下载)
*******************************
[rewrite_local]
# > 醒图-修出你的美(自己去商店下载)
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info.+iid.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xingtu.js

[mitm] 
hostname = *faceu*,*retouchpics*

******************************/

var vip = $request.headers;

vip['x-Tt-Token'] = '00c0dd907e79e5c345c1d7fa3a50e1d55204a4bb6d4d050bc11d69a76ffc4f2237356e8c0e42ae8998c7b10a378c769b355394db154919b9994bf4124c19b0d8a15f69e60b089d355cc65dac525e5315bf40bef23fac8d480d428ddbec931c0ca113f-1.0.1';
vip['User-Agent'] = 'Retouch 6.8.0 rv:6.8.0.31 (iPhone; iOS 15.3.1; zh_CN) Cronet';
$done({ 
  headers: vip 
});

