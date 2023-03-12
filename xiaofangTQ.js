/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[task]
# 将 Authorization 保存到 iCloud 文档
0 * * * * echo $QX_AUTHORIZATION > $HOME/Library/Mobile\ Documents/com~apple~CloudDocs/消防账号.txt

[mitm] 
hostname =  *119*

*******************************/

var url = $request.url;
var authHeader = $request.headers["Authorization"];
var vip = $request.headers;
vip['Accept'] = '*/*';

$notify("中车专属破解-神户live🚗","****破解代码注入成功****",authHeader);
$done({
    headers : vip
});

