/******************************
中车专属破解
成人快手
下载地址 https://eg2xe6.com?pc=E35HX5QZ
*******************************
[rewrite_local]
# > 成人快手解全部视频

^https:\/\/h5.zhihuav.com.+\/media\/enkey url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/CRkuaishou.js

[mitm] 
hostname =*zhihuav*

*******************************/

var vip = $request.headers;
var $request_url = $request.$request_url;
vip['Cookie'] = 'zh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2NzM3Njg4NTAsImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6MTUwOTUyMzB9.8cUd3IbFX5qx2jIEm0In5nybvsQXQEWEQnhwkkz3XPw';
$done({
    headers : vip
});
