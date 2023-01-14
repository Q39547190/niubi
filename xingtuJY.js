/******************************
中车专属破解
醒图➕剪映界面
*******************************
[rewrite_local]
# > 醒图➕剪映界面

^http[s]?:\/\/.+((retouchpics)|(faceu)|(ulikecam)).(com|cn|mobi)\/.+(user|\/v1\/homepage\/pro|ever_photo/space_info|\/subscription\/user_info).+ url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/xingtuJY.js

[mitm] 
hostname = *faceu*,*retouchpics*,*,*.ulikecam.com

******************************/

var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

if (url.indexOf("/api/v1/user/profile") != -1) {
    obj.data.user.name = "中车专属破解";
$notify("醒图🧾","****破解代码注入成功****","vip破解成功‼️");
    body = JSON.stringify(obj);
}
if (url.indexOf("/lv/v1/homepage/profile") != -1) {
    body = body.replace(/name":"[^"]+/g, "name\":\"中车专属破解").replace(/is_vip":\w+/g, "is_vip\":true");
}
if (url.indexOf("/ulike/v1/homepage/profile") != -1) {
    body = body.replace(/name":"[^"]+/g, "name\":\"中车专属破解");
}
if (url.indexOf("ever_photo/space_info") != -1) {
    body = body.replace(/space_end\":\d+/g, "space_end\":32493842714");
}
$done({ "body": body });
