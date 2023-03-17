/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/


// 将请求和响应写入文件
var req = $request;
var res = $response;

// 获取请求URL和响应体内容
var url = req.url;
var body = res.body;

// 将请求URL和响应体内容写入文件
$drive.write("Quantumult/" + new Date().getTime() + ".txt", url + "\n" + body, function(success) {
   if (success) {
      $notify("储存成功", "请求URL: " + url, "");
   } else {
      $notify("储存失败", "请求URL: " + url, "");
   }
});
