/******************************
中车专属破解
加藤视频
下载地址 https://91p65.app/?channelCode=0000&inviteCode=sG9MoCEQ
*******************************
[rewrite_local]
# > 加藤视频

^https:\/\/api.jttv0(1|2|3|4).+\/resource\/(adInfoPageList|getWindowNotice).+ url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/jiatengSP.js

[mitm] 
hostname =*jttv01*,*jttv03*,*jttv02*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var fsUrl = /"fsUrl":".*?"/g;
var adUrl = /"adUrl":".*?"/g;

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
