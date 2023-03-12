/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[task]
# 将 Authorization 保存到 iCloud 文档

echo $QX_REQHEADER_ALL > /path/to/消防账号文本.txt

[mitm] 
hostname =  *119*

*******************************/

// 请求头保存脚本
var fs = $ios ? require('fs') : require('file');
// 保存请求头的文件路径
var filePath = '$HOME/Library/Mobile Documents/消防账号文本.txt';

$task.fetch({}).then(response => {
    // 获取完整请求头信息
    var headers = response.headers;
    // 将请求头转换为字符串
    var headersString = JSON.stringify(headers, null, '\t');
    // 将请求头写入文件
    if ($ios) {
        // 如果在 iOS 上运行，使用 fs 模块来写入文件
        fs.writeString(filePath, headersString);
    } else {
        // 如果在 macOS 或 Windows 上运行，使用 file 模块来写入文件
        fs.write(filePath, headersString);
    }
    // 显示请求头
    $notify("请求头信息", "", headersString);
}, reason => {
    $done();
});

