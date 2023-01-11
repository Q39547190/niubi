/******************************
中车专属破解
轻颜相机(仅支持4.3.1以下版本)
*******************************
[rewrite_local]
# > 轻颜相机(仅支持4.3.1以下版本)
^https:\/\/commerce-api\.faceu\.mobi\/commerce\/v1\/subscription\/user_info? url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/qingyanXJ.js

[mitm] 
hostname = *faceu*

******************************/

var body = $response.body;
var obj = JSON.parse(body);
    obj.data.flag = true;
    obj.data.is_cancel_subscribe = true;
    obj.data.end_time = 32493852882;
    obj.data.start_time = 1673417683;
    obj.data.uid = "1104356426136016";
    body = JSON.stringify(obj);
$notify("轻颜相机📷","****破解代码注入成功****","vip破解成功‼️");
$done({ "body": body });
