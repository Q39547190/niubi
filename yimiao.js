/*******************************
 中车专属破解
疫苗
脚本名称:疫苗
使用声明：️此脚本仅供学习与交流，
        请勿转载与贩卖！️️️

*******************************
[rewrite_local]
^http[s]?:\/\/www.et98.net(.+) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/yimiao.js
[mitm] 
hostname = *.et98.*

*******************************/
var obj = JSON.parse($response.body);
    obj.state1=  "0";
obj.success1= "0";
obj.linkBtnDesc= 6";
obj.usable= "1";
obj.statusCode= "200";
    $done({body: JSON.stringify(obj)});


