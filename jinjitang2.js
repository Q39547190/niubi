/******************************
中车专属破解
69AV破解
*******************************
[rewrite_local]
# > 69AV 破解

^https:\/\/clsq99.+user\/centerUserInfo url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/jinjitang2.js

[mitm] 
hostname = *clsq99*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
if (url.indexOf("/Login/info") != -1) {
    parse = {
  "code" : 200,
  "data" : {
    "headUrl" : "https://d1twa87wdd5a43.cloudfront.net/2022-05-30/20/7ef6df7b97c04042a73391f56873a42a.png",
    "failureTime" : null,
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
    "vipPayType" : 1,
    "images" : [

    ],
    "userLabels" : null,
    "loginNum" : 1,
    "followerCount" : "0",
    "birthDay" : "2023-02-03",
    "expiryTime" : 1999999999,
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
