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

// 定义文件路径
let filePath = "world/birth.txt"; // 或者 "birth.txt";

// 写入 iCloud 文件
// 要写入的内容
let writeContent = "Hello World 😀 !";
// 将内容编码成 Uint8Array 格式
let encoder = new TextEncoder();
let writeUint8Array = encoder.encode(writeContent);

// 调用 $iCloud.writeFile() 方法并传入 Uint8Array 和文件路径作为参数
if ($iCloud.writeFile(writeUint8Array, filePath)) {
    console.log("写入成功");
} else {
    console.log("写入失败，请检查文件路径是否正确");
}
