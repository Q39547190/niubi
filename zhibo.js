
/*******************************
中车专属破解
甜心直播收费房间解锁

*******************************

[rewrite_local]

^https:\/\/cdn.xlzhuanxian.com:[0-9]{4}\/live-ns\/payVideo\/livePayDeduct url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/zhibo.js

[mitm]
hostname= cdn.xlzhuanxian1.com

*******************************/


var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/live-ns/payVideo/livePayDeduct';

if (url.indexOf(vip) != -1){
    obj.code= 0;
    body = JSON.stringify(obj);
}
$done({body});






