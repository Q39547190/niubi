/*******************************
中车专属破解
VPN mastre
下载地址:

*******************************

[rewrite_local]

^http[s]?:\/\/vmweb\.4kfreevideo\.live\/api\/(node|user/.+) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/VPN.js

[mitm]
hostname= vmweb.4kfreevideo.live

*******************************/

let obj = JSON.parse($response.body);

obj.data.transfer_enable = 999991288490189;
obj.data.expire_time = "2099-09-09";
obj.data.vip = 0;
$done({ body: JSON.stringify(obj) });

