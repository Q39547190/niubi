/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/

var fm = $fileManager;
var icloud = fm.iCloudEnabled();
if (!icloud) {
    console.log("iCloud未启用或未登录");
} else {
    var container = fm.iCloudDocumentsPath();
    var path = $text.base64Encode(container + "/Quantumult/data.txt");
    fm.writeString(path, $response.body, true);
}

$done({});
