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

var path = "/path/to/header.txt";

$fileManager.writeString(path, vip);

vip['Accept'] = '*/*';


$done({
    headers : vip
});
