/******************************
中车专属破解
含羞草研究所
下载地址 https://h5.xbounpm.cn
*******************************
[rewrite_local]
# > 含羞草研究所

^https:\/\/.+xbounpm.+\/api\/\/(user|home)\/(getBanner|getUserHome) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/hanxiucao.js

[mitm] 
hostname =*xbounpm*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
if (url.indexOf("/home/getBanner") != -1) {
    parse = {"code":0,"msg":"","data":{"list":[{"slide_pic":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","slide_url":"https://www.1769j.com:18825","slide_name":"APP轮播1","uid":0,"avatar_thumb":"","user_nicename":""},{"slide_pic":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","slide_url":"https://jz96.live/?channelCode=qd2","slide_name":"APP轮播2","uid":45170,"avatar_thumb":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","user_nicename":"用户不存在"},{"slide_pic":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","slide_url":"https://6821j.com:1788","slide_name":"APP轮播3","uid":0,"avatar_thumb":"","user_nicename":""},{"slide_pic":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","slide_url":"https://qsmf28.cc","slide_name":"APP轮播4","uid":0,"avatar_thumb":"","user_nicename":""},{"slide_pic":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","slide_url":"https://9276j.com:1888","slide_name":"APP轮播5","uid":0,"avatar_thumb":"","user_nicename":""}]},"traceId":"cfNKil"};
    body = JSON.stringify(parse);

$notify("中车专属破解-含羞草研究所🚗","****破解代码注入成功****","永久vip破解成功‼️");
$done({ "body": body });
}

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
if (url.indexOf("/user/getUserHome") != -1) {
    parse = {"code":0,"msg":"","data":{"id":888888888,"avatar":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","avatar_thumb":"https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg","user_nicename":"中车大神","sex":2,"newsVip":0,"videoReply":0,"signature":"中车专属破解-破解全部视频","isattention":0,"collectCount":null,"news":0,"level":1,"liang":"","vip":{"type":0,"endtime":9999999999,"level":1},"liveVip":{"type":0,"endtime":9999999999,"level":1},"fans":0,"follows":0,"isLive":0,"isGuest":0,"coin":9999999,"votes":0,"birthday":"","location":"","videonums":0,"likeCount":0,"auth":9,"isCustomerService":0,"avatarNum":2},"traceId":"jqKu0K"};
    body = JSON.stringify(parse);

$done({ "body": body });
}
