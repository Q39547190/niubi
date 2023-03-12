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

const iCloud = $drive("icloud"); // 创建一个 iCloud Drive 实例

if (!iCloud.exists) { // 检查是否可用于 iCloud
    $notify("iCloud 不可用", "请登录您的 iCloud 帐户并重试。"); // 提醒用户 iCloud 不可用
    $done();
}

const text = "这是要保存的文本内容"; // 要保存的文本内容

iCloud.write("/9999.txt", text); // 将文本内容写入名为 test.txt 的文件中

$notify("文本已保存", "文本已成功保存到 iCloud Drive 中。"); // 向用户发送成功消息

$done();

$done({
    headers : vip
});
