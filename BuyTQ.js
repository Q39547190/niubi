/*************************************

测试

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/BuyTQ.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/

var data = $response.body;
$notify("中车专属破解", "❌❌❌获取Token失败❌❌❌", data);
console.log(data);
$done();


