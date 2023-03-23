/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ2.js

[mitm] 
hostname =  *119*

*******************************/
let writeContent = $request.headers["Authorization"]; // 获取 Authorization 头的值并赋给 writeContent 变量

const url = "https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/home\/taskScord\/completeTask?taskCode=CTWLPRACTICEWEEK";
const method = "GET";
const headers = {};
const body = ""; 
headers.Authorization = writeContent; // 将 writeContent 的值添加到请求头部信息中的 Authorization 字段中

$httpClient.request({
    url: url,
    method: method,
    headers: headers,
}, function(error, response, data){
    if (error) {
        console.log(error);
        $notification.post("通用签到", "发生错误", error);
    } else {
        console.log(data);
        $notification.post("通用签到", "签到成功", data);
    }
});

$done();
