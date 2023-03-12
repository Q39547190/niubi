
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[task]
# 将 Authorization 保存到 iCloud 文档

echo $QX_REQHEADER_ALL > /path/to/消防账号文本.txt

[mitm] 
hostname =  *119*


[script]
// 请求头保存脚本
var fm = $ios ? $fileManager : null;
// 保存文件的路径
var filePath = 'headers.txt';

$task.fetch({}).then(response => {
    // 获取完整请求头信息
    var headers = response.headers;
    // 将请求头转换为字符串
    var headersString = JSON.stringify(headers, null, '\t');
    // 将请求头写入文件
    if (fm && fm.write) {
        fm.writeString(fm.joinPath(fm.documentsDirectory(), filePath), headersString);
        // 显示通知
        $notify("请求头已保存", "", "请求头信息已成功保存到文件 " + filePath);
    } else {
        $notify("请求头保存失败", "", "无法访问文件系统");
    }
}, reason => {
    $done();
});
