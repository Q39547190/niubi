/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/

/**
 * @fileoverview 一个读取、写入和删除 iCloud 文件的示例
 * 相关文件存储路径：iCloud Drive/Quantumult X/Data/
 *
 * @supported Quantumult X (v1.0.31-build717)
 * 
 * $iCloud.writeFile(Uint8Array, path), $iCloud.readFile(path), iCloud.removeFile(path)
 */

let filePath = "world/birth.txt";
// let filePath = "birth.txt";


// Write iCloud file.
let writeContent = "Hello World 😀 !";
let encoder = new TextEncoder();
let writeUint8Array = encoder.encode(writeContent);

if ($iCloud.writeFile(writeUint8Array, filePath)) {
    console.log("OK");
} else {
    console.log("NO");
}
$done();
