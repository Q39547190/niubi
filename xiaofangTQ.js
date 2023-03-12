/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/

// 获取Authorization请求头中的Token值
var authHeader = $request.headers["Authorization"];
if (authHeader) {
  // 显示Authorization请求头中的Token值
  $notification.post("获取到Authorization请求头", "", authHeader);
}

// 继续处理当前请求
$done({});
