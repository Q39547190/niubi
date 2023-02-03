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
    "headUrl" : "https://d1twa87wdd5a43.cloudfront.net/2022-05-30/20/7ef6df7b97c04042a73391f56873a42a.png",
    "failureTime" : "2050-04-06 10:58:22",
    "id" : "2040605",
    "level" : 30,
    "bankCard" : null,
    "coins" : 9999999,
    "isFollow" : true,
    "becomeVipTime" : "2023-01-17 23:41:54",
    "account" : null,
    "followingCount" : "9999999",
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
$notify("中车专属破解-禁忌堂🚗","****破解代码注入成功****","永久vip破解成功‼️");
}
$done({ "body": body });
