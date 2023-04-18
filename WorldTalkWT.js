/******************************
中车专属破解

WorldTalk(国外版探探)全部破解
下载地址 https://apps.apple.com/cn/app/worldtalk-%E8%BD%BB%E6%9D%BE%E4%B8%8E%E5%A4%96%E5%9B%BD%E4%BA%BA%E8%AF%AD%E9%9F%B3-%E8%A7%86%E9%A2%91%E8%81%8A%E5%A4%A9/id1439411974
*******************************
[rewrite_local]
# >WorldTalk(国外版探探)全部破解

^https:\/\/www.zerophil.com\/(services|pay)\/(v1|v2)\/(query_user_detail|query_vip_by_talk_id|query_translation|get_wallet|send_gift_blue|trade_gateway|create_one_chat_order) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/WorldTalkWT.js

[mitm] 
hostname =*zerophil*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var vip = /"vip":\d+/g;
var concernCount = /"concernCount":\d+/g;
var introduce = /"introduce":".*?"/g;
var blueDia = /"blueDia":\d+/g;
var totalPrice = /"totalPrice":\d+/g;
var pinkDia = /"pinkDia":\d+/g;
var code = /"code":\d+/g;

if (url.indexOf("query_user_detail") != -1) {

body = body.replace(introduce,'"introduce":"中车专属破解"').replace(vip,'"vip":12').replace(concernCount,'"concernCount":9999999');

$done({
    body
});
}

if (url.indexOf("get_wallet") != -1) {

body = body.replace(totalPrice,'"totalPrice":99999999999').replace(pinkDia,'"pinkDia":99999999999').replace(blueDia,'"blueDia":99999999999');

$done({
    body
});
}

if (url.indexOf("trade_gateway") != -1) {

body = body.replace(code,'"code":0');

$done({
    body
});
}

if (url.indexOf("send_gift_blue") != -1) {

body = body.replace(code,'"code":0');

$done({
    body
});
}

if (url.indexOf("create_one_chat_order") != -1) {

parse = {"code":0,"data":{"chatNum":9999999},"info":null,"reqCode":null};

body = JSON.stringify(parse);

$done({ "body": body });

}

if (url.indexOf("query_vip_by_talk_id") != -1) {

parse = {"code":0,"data":{"vip":{"birthday":734848464000,"channel":"550330976882917376","country":"CN","createTime":1650948554147,"expirationTime":32494706931000,"month":12,"name":"鬼三","orderNo":"12022042612490724","sex":1,"systemType":1,"talkId":"25215819","version":"V5.8.2"}},"info":null,"reqCode":"save_friend"};

body = JSON.stringify(parse);

$done({ "body": body });

}

if (url.indexOf("query_translation") != -1) {

parse = {"code":0,"data":{"translation":{"birthday":734848464000,"channel":"550330976882917376","country":"CN","createTime":1650948073427,"expirationTime":32494706931000,"name":"鬼三","number":365,"sex":1,"systemType":1,"talkId":"25215819","version":"V5.8.2"}},"info":null,"reqCode":"save_friend"};

body = JSON.stringify(parse);

$notify("中车专属破解-WorldTalk 👩","****破解代码注入成功****","全部功能破解成功‼️");

$done({ "body": body });

}
