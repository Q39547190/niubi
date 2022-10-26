/*******************************
中车专属破解
我的疫苗破解

*******************************

[rewrite_local]

^https:\/\/www.et98.net\/[^\s]* url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/yimiao.js

[mitm]
hostname= et98.net

*******************************/

var body = $response.body;
var hack = /"state1":\d+/g;
body = body.replace(hack,'"state1":0');
$done({
    body
});
