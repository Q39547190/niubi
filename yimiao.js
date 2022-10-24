/*******************************
中车专属破解
我的疫苗破解

*******************************

[rewrite_local]

^https:\/\/www.et98.net\/[^\s]* url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/yimiao.js

[mitm]
hostname= et98.net

*******************************/


let obj = JSON.parse($response.body);

let code = "0";

if (obj.hasOwnProperty("timeArry")) {
    if (obj.msg.hasOwnProperty("state1")) {
        obj.timeArry.state1 = code;
    }
}

$done({ body: JSON.stringify(obj) });
