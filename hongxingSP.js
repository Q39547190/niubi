/******************************
中车专属破解
红杏视频🔞
*******************************
[rewrite_local]
# > 红杏视频🔞

^https:\/\/api.jgf985.com\/WebApp\/WebUser\/WebUserInfo url response-body .+ response-body {"code":200200,"message":"SUCCESS","data":{"user_info":{"id":8991819,"pid":483550,"username":"中车专属破解","nickname":"","img":"","status":0,"referral_code":"8991819","created_at":"2023-02-19 11:14:40","updated_at":"2023-02-19 17:44:14","account_from":2,"client_system":3,"phone":"","email":"","total_integral":0,"puser_info":{"id":483550,"username":"bill@xxx.com","nickname":"","img":"","status":0,"referral_code":"VE5fgAY6"},"is_vip":3,"vip_end_time":1999999999,"login_os":"","end_login_time":"2023-02-19 17:44:14","end_login_ip":"","end_login_time_at":null,"machine_num":"0","vip_role_id":88888888,"role_info":null,"role_info_list":null}}}

^https:\/\/.+peilinwenhua.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/hongxingSP.js

[mitm] 
hostname = *peilinwenhua*,

******************************/

var url = $request.url;
var vip = $request.headers;
var token = "";
var newUrl = url.replace(/&time=\d+&segments=\d+/, token);
$done({url: newUrl});
