/******************************
中车专属破解
禁忌堂破解
*******************************
[rewrite_local]
# > 禁忌堂 破解

^https:\/\/clsq99.+user\/centerUserInfo url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/jinjitang2.js

[mitm] 
hostname = *clsq99*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
if (url.indexOf("/user/centerUserInfo") != -1) {
    parse = {
  "code" : 200,
  "data" : {
    "headUrl" : "https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg",
    "failureTime" : "2050-04-06 10:58:22",
    "id" : "2040605",
    "level" : 0,
    "bankCard" : null,
    "coins" : 9999999,
    "isFollow" : true,
    "becomeVipTime" : null,
    "account" : null,
    "followingCount" : "0",
    "loginStatus" : 1,
    "barringCall" : 1,
    "sex" : 1,
    "ticket" : null,
    "vipBackground" : null,
    "nickName" : "中车专属破解",
    "code" : "192411",
    "phoneNumber" : null,
    "inviteCode" : "192411",
    "vipPayType" : 4,
    "images" : [

    ],
    "userLabels" : null,
    "loginNum" : 1,
    "followerCount" : "0",
    "birthDay" : "2023-02-03",
    "expiryTime" : "19/11/2022 ~ 09/09/2999",
    "diamond" : null,
    "age" : 0,
    "voicePrice" : "0",
    "videoPrice" : "0",
    "signature" : null,
    "vipFlag" : true,
    "userSig" : null,
    "userId" : "2040605"
  },
  "success" : true,
  "msg" : "success"
};
body = JSON.stringify(parse);
}
$done({ "body": body });
