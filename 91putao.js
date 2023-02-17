/******************************
中车专属破解
91葡萄
下载地址 https://h5.xbounpm.cn
*******************************
[rewrite_local]
# > 91葡萄

^https:\/\/.+h84ug5.+(resource|member)\/(memberInfo|mode|popNotice)\/(vipCenterBanner|list|av|playingAdv|getInfoById) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/91putao.js

[mitm] 
hostname =*h84ug5*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
var hack = /"advUrl":".*?"/g;
if (url.indexOf("mode\/(av|jx)") != -1) {
   parse = {"code":200,"msg":"SUCCESS","data":[{"id":1,"sort":100,"iconLink":1,"showType":1,"modeShowType":-1,"modeName":"全部","coverType":2,"bannerList":[{"id":58,"position":3,"advTitle":"网红","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"9","advType":1},{"id":56,"position":3,"advTitle":"里番","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":32,\"modeName\":\"成人动漫\",\"type\":\"av\"}","advLink":"9","advType":1},{"id":54,"position":3,"advTitle":"思密达","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"blockId\":10050,\"blockName\":\"直播诱惑\",\"blockType\":3,\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"4","advType":1}]},{"id":23,"sort":90,"iconLink":2,"showType":1,"modeShowType":4,"modeName":"排行榜","coverType":2,"bannerList":[{"id":58,"position":3,"advTitle":"网红","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"9","advType":1},{"id":56,"position":3,"advTitle":"里番","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":32,\"modeName\":\"成人动漫\",\"type\":\"av\"}","advLink":"9","advType":1},{"id":54,"position":3,"advTitle":"思密达","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"blockId\":10050,\"blockName\":\"直播诱惑\",\"blockType\":3,\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"4","advType":1}]},{"id":13,"sort":80,"iconLink":2,"showType":1,"modeShowType":-1,"modeName":"制服诱惑","coverType":2,"bannerList":[{"id":58,"position":3,"advTitle":"网红","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"9","advType":1},{"id":56,"position":3,"advTitle":"里番","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":32,\"modeName\":\"成人动漫\",\"type\":\"av\"}","advLink":"9","advType":1},{"id":54,"position":3,"advTitle":"思密达","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"blockId\":10050,\"blockName\":\"直播诱惑\",\"blockType\":3,\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"4","advType":1}]},{"id":15,"sort":70,"iconLink":2,"showType":1,"modeShowType":-1,"modeName":"人妻荡妇","coverType":2,"bannerList":[{"id":58,"position":3,"advTitle":"网红","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"9","advType":1},{"id":56,"position":3,"advTitle":"里番","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":32,\"modeName\":\"成人动漫\",\"type\":\"av\"}","advLink":"9","advType":1},{"id":54,"position":3,"advTitle":"思密达","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"blockId\":10050,\"blockName\":\"直播诱惑\",\"blockType\":3,\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"4","advType":1}]},{"id":16,"sort":60,"iconLink":2,"showType":1,"modeShowType":-1,"modeName":"淫虐调教","coverType":2,"bannerList":[{"id":58,"position":3,"advTitle":"网红","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"9","advType":1},{"id":56,"position":3,"advTitle":"里番","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":32,\"modeName\":\"成人动漫\",\"type\":\"av\"}","advLink":"9","advType":1},{"id":54,"position":3,"advTitle":"思密达","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"blockId\":10050,\"blockName\":\"直播诱惑\",\"blockType\":3,\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"4","advType":1}]},{"id":17,"sort":50,"iconLink":2,"showType":1,"modeShowType":-1,"modeName":"学生萝莉","coverType":2,"bannerList":[{"id":58,"position":3,"advTitle":"网红","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"9","advType":1},{"id":56,"position":3,"advTitle":"里番","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":32,\"modeName\":\"成人动漫\",\"type\":\"av\"}","advLink":"9","advType":1},{"id":54,"position":3,"advTitle":"思密达","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"blockId\":10050,\"blockName\":\"直播诱惑\",\"blockType\":3,\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"4","advType":1}]},{"id":32,"sort":45,"iconLink":2,"showType":1,"modeShowType":-1,"modeName":"成人动漫","coverType":1,"bannerList":[{"id":58,"position":3,"advTitle":"网红","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"9","advType":1},{"id":56,"position":3,"advTitle":"里番","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"modeId\":32,\"modeName\":\"成人动漫\",\"type\":\"av\"}","advLink":"9","advType":1},{"id":54,"position":3,"advTitle":"思密达","advUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","info":"{\"blockId\":10050,\"blockName\":\"直播诱惑\",\"blockType\":3,\"modeId\":19,\"modeName\":\"COS网黄\",\"type\":\"jx\"}","advLink":"4","advType":1}]}]};

body = JSON.stringify(parse);
$done({ "body": body });
}

if (url.indexOf("/popNotice/list") != -1) {

parse = {"msg":"操作成功","code":200,"data":[{"id":19,"status":1,"title":"中车专属破解","type":2,"imgUrl":"https://ims.abcimgs1.comhttps://video.qoffxs.com/md/img/1673609620888弹窗--邀请.png","jumpUrl":null,"jumpUrlType":1,"interJumpUrl":1,"content":"44CQ5Lit6L2m5LiT5bGe56C06Kej44CR5rOo5YWl5Lit6L2m5LiT5bGebG9nb+KAqOOAkOS4rei9puS4k+WxnuegtOino+OAkeWujOWFqOegtOino+WFqOmDqOinhumikfCfmpfigKjjgJDkuK3ovablpKfnpZ7jgJHkuK3ovaZZWURTCg==","sort":999,"createBy":"yys","updateBy":"yys"},{"id":23,"status":1,"title":"中车专属破解","type":1,"imgUrl":"https://im.gurl.eu.org/file/e02bee8ccae8f450fc173.png","jumpUrl":null,"jumpUrlType":1,"interJumpUrl":1,"content":"bnVsbA==","sort":999,"createBy":"yys","updateBy":"yys"}]};

    body = JSON.stringify(parse);

$notify("中车专属破解-91葡萄🚗","****破解代码注入成功****","永久vip破解成功‼️");
$done({ "body": body });
}

if (url.indexOf("/memberInfo/getInfoById") != -1) {

parse = {"code":200,"msg":null,"data":{"id":1107380,"profilePhoto":null,"nickname":"中车大神","robot":0,"officialAccount":0,"platform":2,"unitType":"50970640-37B4-4034-8D85-604568CCE96F","level":0,"phone":null,"password":null,"sex":1,"sign":"中车专属破解-破解全部视频","channelCode":"0000","appLink":"https://91p65.app/?channelCode=0000&inviteCode=sG9MoCEQ","openNum":null,"goldCoin":0,"watchNum":0,"movieTicketNum":0,"vip":2,"vipName":"中车专属永久卡","vipExpirationTime":"2099-02-17 19:34:54","inviteMember":null,"inviteCode":"sG9MoCEQ","bindInviteCode":null,"inviteNum":0,"status":1,"registerTime":"2023-02-16 19:21:22","lastLoginTime":"2023-02-16 19:21:24","lastLoginIp":null,"registerIp":"112.96.176.150","lastFindTime":null,"updateTime":"2023-02-16 21:00:25"}};
    body = JSON.stringify(parse);
$done({ "body": body });
}
