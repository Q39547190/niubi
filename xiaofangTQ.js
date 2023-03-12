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

var vip = $request.headers;

// 获取Authorization请求头中的Token值
var authHeader = $request.headers["Authorization"];

vip['Accept'] = '*/*';

$notify("中车专属破解-神户live🚗","****破解代码注入成功****",authHeader);

if (url.indexOf("/users/activeScore") != -1) {$notify("请求头保存", "是否要将请求头保存到iCloud网盘？", {
  "Yes": function() {

var data = "Hello, World!";
var path = "/Documents/3954719.txt";

$drive.writeFile({
  data: "Hello, World!",
  path: "39547190.txt",
  encoding: "utf8",
  mode: "overwrite",
  folderId: "Quantumult",
  ondone: function(success) {
    if (success) {
      console.log("File saved to iCloud Drive");
    } else {
      console.log("Failed to save file to iCloud Drive");
    }
  }
});
}

}

$done({
    headers : vip
});
