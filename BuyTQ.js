/*************************************

测试

**************************************

[rewrite_local]
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/iTunes/xiaojizhuanzhu.js

[mitm]
hostname = buy.itunes.apple.com

*************************************/

var data = JSON.parse($response.body);
$notify("中车专属破解", "❌❌❌获取Token失败❌❌❌", data);
console.log(data);
$done();
