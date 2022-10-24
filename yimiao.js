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

obj.data.info[0]["state1"]="0";

$done({ body: JSON.stringify(obj) });
