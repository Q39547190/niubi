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
if (authHeader) {
  var token = authHeader.replace("Bearer ", "");
  // 将Token保存到名为“MY_TOKEN”的变量中，以便后续的脚本使用
  $persistentStore.write(token, "MY_TOKEN");
  // 或者将Token保存到名为“消防账号.txt”的文本文件中，以便后续的脚本使用
  $file.write({
    "data": token,
    "path": "/path/to/消防账号.txt",
    "append": false
  });
  
  // 发送通知告知用户获取Authorization成功
  $notify("车专属破解", "获取Authorization成功！", "现在可以正常使用车专属破解了。");
}

// 继续处理当前请求
$done();
