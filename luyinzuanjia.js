/******************************
中车专属破解
录音专家
*******************************
[rewrite_local]
# >录音专家

^http:\/\/luyintu\.cushuikeji\.cn\/tuv2.user\/info url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/luyinzuanjia.js

[mitm] 
hostname =*cushuikeji*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var photourl = /"photourl":".*?"/g;
var is_vip = /"is_vip":\d+/g;
var vip_type = /"vip_type":\d+/g;
var vip_end_time = /"vip_end_time":\d+/g;
var volume_vip = /"volume_vip":\d+/g;
var volume_total = /"volume_total":\d+/g;
var volume_use = /"volume_use":\d+/g;
var permanent_vip = /"permanent_vip":\d+/g;
var surplus_duration = /"surplus_duration":\d+/g;

body = body.replace(is_vip,'"is_vip":1').replace(vip_type,'"vip_type":1').replace(vip_end_time,'"vip_end_time":32493859833').replace(photourl,'"photourl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png"').replace(volume_vip,'"volume_vip":10485760000').replace(volume_total,'"volume_total":10485760000').replace(volume_use,'"volume_use":0').replace(permanent_vip,'"permanent_vip":1').replace(surplus_duration,'"surplus_duration":99999999999');

$notify("中车专属破解-录音大师🎵","****破解代码注入成功****","永久vip破解成功‼️");

$done({
    body
});
