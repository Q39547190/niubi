/*******************************
中车专属破解
VPN mastre
下载地址: https://testflight.apple.com/join/Lr2NqCzs

*******************************

[rewrite_local]

^http[s]?:\/\/vmweb\.4kfreevideo\.live\/api\/(node|user/.+) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/VPN.js

[mitm]
hostname= vmweb.4kfreevideo.live

*******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip1 = '/api/user';

const vip2 = '/api/node';

if (url.indexOf(vip1) != -1){
    obj.data.transfer_enable = 999991288490189;
    obj.data.expire_time = "2099-09-09";
    body = JSON.stringify(obj);
}

if (url.indexOf(vip2) != -1){
var hack = /"vip":\d+/g;
body = body.replace(hack,'"vip":0');
$done({
 body
});
}

$done({body});
