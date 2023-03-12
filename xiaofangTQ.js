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
  var token = authHeader.replace("Bearer ", "");
  // 将Token保存到指定路径下的文本文件中，以便后续的请求使用
  $file.write({
    "data": token, // 添加换行符
    "path": "/path/to/消防账号.txt",
    "append": false       // 追加到文件末尾
  });
}

// 继续处理当前请求
$done();
