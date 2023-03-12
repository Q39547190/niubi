
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[task]
# 将 Authorization 保存到 iCloud 文档

echo $QX_REQHEADER_ALL > /path/to/消防账号文本.txt

[mitm] 
hostname =  *119*


[script]
// 获取应用程序沙盒目录路径
var appDirectory = $file.dirname($context.info.scriptPath);
// 存储文件名和路径
var fileName = "request_headers.txt";
var filePath = appDirectory + "/" + fileName;

$task.fetch({
    method: 'GET',
    url: $request.url,
    headers: $request.headers,
    body: ""
}, function(error, response, data) {
    if (error) {
        console.log("Fetch error:", error);
        return;
    }
    var headers = JSON.stringify($request.headers);
    $file.write({
        data: headers,
        path: filePath
    });
    console.log("Request headers saved to file:", filePath);
});
