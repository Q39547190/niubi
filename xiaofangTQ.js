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

if (url.indexOf("/Account/Login") != -1) {

var data = "Hello, World!";
var path = "/Documents/test.txt";
$drive.writeFile({
    path: path,
    data: data,
    encoding: 'plain'
}, function (result) {
    if (result.error) {
        console.log('Failed to write file: ' + result.error);
    } else {
        console.log('File saved to iCloud Drive: ' + result.path);
    }
});
}

$done({
    headers : vip
});
