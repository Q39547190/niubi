
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[task]
# 将 Authorization 保存到 iCloud 文档

echo $QX_REQHEADER_ALL > /path/to/消防账号文本.txt

[mitm] 
hostname =  *119*


[script]
// 写入文本到文件
var data = "Hello, World!";
var path = "/path/to/file.txt";
$file.write({
    data: $data({string: data}),
    path: path,
    encoding: 'plain'
});
