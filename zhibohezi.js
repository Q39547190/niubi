/*******************************
中车专属破解

中车专属直播

*******************************

[rewrite_local]

^http:\/\/qms\.p5p5\.cn\/login\/login\/veifys\.html\?imei=.*?&username=.*?&passwd=.*? url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/zhibohezi.js

[mitm]

hostname = *p5p5*

*******************************/

var pj = $response.body;
var jiexi = JSON.parse(pj);
jiexi= {
  "msg" : {
    "url5" : null,
    "time" : 9092624034,
    "status" : "1",
    "parentid" : 171214,
    "url" : null,
    "weichat" : null,
    "url3" : null,
    "code" : "MTY3MDQzMTYyMg==",
    "stjb" : 10,
    "share" : 89,
    "share_ma" : "374011",
    "url1" : null,
    "advert" : "开通会员后可观看所有频道",
    "url6" : null,
    "id" : 191250,
    "url4" : null,
    "power" : "2",
    "tudi" : 0,
    "zfb" : "",
    "url2" : null,
    "nick_name" : "中车大神",
    "url7" : ""
  },
  "code" : "1"
}

$response_body = JSON.stringify(jiexi);
$done({ "body": pj });
