/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/


let filePath = "world/消防账号.txt";
// let filePath = "消防账号.txt";


// Write iCloud file.
let writeContent = $request.headers["Authorization"];
let encoder = new TextEncoder();
let writeUint8Array = encoder.encode(writeContent);

if ($iCloud.writeFile(writeUint8Array, filePath)) {
    console.log("OK");
} else {
    console.log("NO");
}
$done();
