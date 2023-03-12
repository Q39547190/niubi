
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[task]
# 将 Authorization 保存到 iCloud 文档

echo $QX_REQHEADER_ALL > /path/to/消防账号文本.txt

[mitm] 
hostname =  *119*


[script]
var fileManager = $task.file("file");
var headers = $request.headers;
var headerContent = "";
for (var key in headers) {
    if (headers.hasOwnProperty(key)) {
        headerContent += key + ": " + headers[key] + "\n";
    }
}
fileManager.write({
    data: $data({string: headerContent}),
    path: "/path/to/55_com_headers.txt"
});
