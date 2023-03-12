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
var authHeader = $response.headers["Authorization"];
  
  // 发送通知告知用户获取Authorization成功
  $notify("车专属破解",authHeader,"现在可以正常使用车专属破解了。");

