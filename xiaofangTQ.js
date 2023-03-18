/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/

// 提取 Authorization，并写入 iCloud 文件
let filePath = "消防账号.txt";

let authHeader = $request.headers["Authorization"];
let encoder = new TextEncoder();
let authUint8Array = encoder.encode(authHeader);

if ($iCloud.writeFile(authUint8Array, filePath)) {
    console.log("写入成功:", authHeader);
} else {
    console.log("写入失败:", authHeader);
}

$done();
