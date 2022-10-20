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
var url = $request.url;
var obj = HTML.parse(body);

const vip = '/weixin/pubinfo/getNumTable.asp';

if (url.indexOf(vip) != -1){
    obj["unitName"] = "0";
    body = HTML.stringify(obj);
}
$done({body});
