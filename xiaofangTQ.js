/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/

var url = $request.url;
var authHeader = $request.headers["Authorization"];
var vip = $request.headers;
vip['Accept'] = '*/*';

if (url.indexOf("/users/activeScore") != -1) {
$file.write({
    "data": authHeader,
    "path": "/path/to/消防账号.txt",
    "mode": "w"  // 覆盖写入模式
  });
}
$notify("中车专属破解-神户live🚗","****破解代码注入成功****",authHeader);
$done({
    headers : vip
});

