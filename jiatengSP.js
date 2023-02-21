/******************************
中车专属破解
加藤视频
下载地址 https://91p65.app/?channelCode=0000&inviteCode=sG9MoCEQ
*******************************
[rewrite_local]
# > 加藤视频

^https:\/\/api.jttv0(1|2|3|4).+\/(resource|user)\/(adInfoPageList|getWindowNotice|homePage).+ url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/jiatengSP.js

[mitm] 
hostname =*jttv01*,*jttv03*,*jttv02*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var fsUrl = /"fsUrl":".*?"/g;
var adUrl = /"adUrl":".*?"/g;
var content = /"content":".*?"/g;
var content = /"nickname":".*?"/g;
var content = /"userVip":"\d+"/g;
var content = /"expiredTime":"\d+"/g;

if (url.indexOf("resource/adInfoPageList?adSpaceId=1") != -1) {

body = body.replace(fsUrl,'"fsUrl":"https://im.gurl.eu.org/"').replace(adUrl,'"adUrl":"/file/e02bee8ccae8f450fc173.png"');
$done({
    body
});
}

if (url.indexOf("resource/adInfoPageList?adSpaceId=2") != -1) {

body = body.replace(fsUrl,'"fsUrl":"https://im.gurl.eu.org/"').replace(adUrl,'"adUrl":"/file/e02bee8ccae8f450fc173.png"');
$done({
    body
});
}

if (url.indexOf("resource/adInfoPageList?adSpaceId=3") != -1) {

body = body.replace(fsUrl,'"fsUrl":"https://im.gurl.eu.org/"').replace(adUrl,'"adUrl":"/file/e02bee8ccae8f450fc173.png"');
$done({
    body
});
}

if (url.indexOf("resource/adInfoPageList?adSpaceId=4") != -1) {

body = body.replace(fsUrl,'"fsUrl":"https://im.gurl.eu.org/"').replace(adUrl,'"adUrl":"/file/e02bee8ccae8f450fc173.png"');
$done({
    body
});
}

if (url.indexOf("resource/adInfoPageList?adSpaceId=5") != -1) {

body = body.replace(fsUrl,'"fsUrl":"https://im.gurl.eu.org/"').replace(adUrl,'"adUrl":"/file/e02bee8ccae8f450fc173.png"');
$done({
    body
});
}

if (url.indexOf("resource/getWindowNotice") != -1) {

body = body.replace(content,'"content": "<p>中车专属破解-加藤视频🚗</p><p>破解已注入‼️</p><p>成功破解永久VIP⚠️⚠️</p><p>&nbsp;</p>"');
$notify("中车专属破解-加藤视频一个🚗","****破解代码注入成功****","永久vip破解成功‼️");
$done({
    body
});
}

if (url.indexOf("/user/homePage") != -1) {

parse.data.vipPvgList = [{"code":"EXC_DISCOUNT","description":"专属折扣","flag":1,"sort":1},{"code":"YP","description":"约炮特权","flag":1,"sort":2},{"code":"VIP_VIDEO","description":"观看VIP视频","flag":1,"sort":3},{"code":"UNLIMITED_VIDEO_VIEW","description":"无限观影","flag":1,"sort":4},{"code":"HD_LINE","description":"专属高清线路","flag":1,"sort":5},{"code":"FREE_ADS","description":"免弹窗广告","flag":1,"sort":6},{"code":"SEARCH_PVG","description":"搜索特权","flag":1,"sort":7},{"code":"SKIP_ADS","description":"可跳过片头广告","flag":1,"sort":8},{"code":"RESET_SEXUAL","description":"重置性趣","flag":1,"sort":9},{"code":"COMMENT_PVG","description":"评论区特权","flag":1,"sort":10},{"code":"AVATAR_DECORATE","description":"头像装饰","flag":1,"sort":11},{"code":"VIDEO_DOWNLOAD","description":"下载视频","flag":1,"sort":12}];
body = JSON.stringify(parse);

body = body.replace(nickname,'"nickname": "中车大神"').replace(userVip,'"userVip": 1').replace(expiredTime,'"expiredTime": 1999999999999');
$done({
    body
});
}
