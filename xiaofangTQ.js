/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/

// 设置要保存到本地的文件路径
var path = "/path/to/header.txt";

// 如果是 HTTP 请求，则获取请求头信息并保存到本地文件中
if ($request && $request.headers) {
    // 获取当前请求的头部信息
    var headers = JSON.stringify($request.headers);
    
    // 将头部信息写入到指定的本地文件中
    $fileManager.writeString(path, headers);
    
    // 显示成功信息
    console.log("请求头信息已保存到：" + path);
}

// 通知 Quantumult X 脚本已经执行完成
$done();
