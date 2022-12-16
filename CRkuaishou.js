/******************************
中车专属破解
成人快手
下载地址 https://eg2xe6.com?pc=E35HX5QZ
*******************************
[rewrite_local]
# > 成人快手解全部视频

^https:\/\/h5.zhihuav.com.+\/(media|bulletscreen)\/(like|play|list) url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/CRkuaishou.js

[mitm] 
hostname =*zhihuav*

*******************************/

var vip = $request.headers;
var $request_url = $request.$request_url;
vip['Authorization'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2NzM3Njg4NTAsImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6MTUwOTUyMzB9.8cUd3IbFX5qx2jIEm0In5nybvsQXQEWEQnhwkkz3XPw';
vip['Cookie'] = 'zh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJwdWJsaWMiLCJleHAiOjE2NzM3Njg4NTAsImlzc3VlciI6ImNvbS5idXR0ZXJmbHkiLCJzdWIiOiJhc2lnbiIsInVzZXJJZCI6MTUwOTUyMzB9.8cUd3IbFX5qx2jIEm0In5nybvsQXQEWEQnhwkkz3XPw';
vip['x-api-key'] = 'timestamp=1671189395;sign=bd28d8891832e9f36c6fd36604d60fbd4a0e4e64;nonce=760fd810-3188-4f54-8576-cbdd5dc7a5a9';
$done({
    headers : vip
});
