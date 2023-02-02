/******************************
中车专属破解
69AV破解
*******************************
[rewrite_local]
# > 69AV 破解

^http://((jiekou1)|(jiekou))\.(shijiujin|jable44)\.(com|shop)\/(Login|Vod)\/(info|getList|sygg|gg) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/69AV.js

[mitm] 
hostname = *jiekou*,*jiekou1*

******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
if (url.indexOf("/Login/info") != -1) {
    parse =  {
    "msg": "成功",
    "data": {
        "end_time": 999999,
        "is_end": 1,
        "look_end": 1,
        "nickname": "中车专属破解",
        "level": 5,
        "agent_url": "0000",
        "agent_phone": "0000",
        "agent_mobile": "0000",
        "card_str": "128830"
    },
    "code": 200
};
    body = JSON.stringify(parse);
}

if (url.indexOf("/Vod/sygg") != -1) {

parse = {
  "data": {
    "vod_id": "1",
    "vod_url": "https://dd.pindhen.com/8476.html",
    "vod_img": "https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg"
  },
  "Msg": "获取成功~!",
  "code": 200
};
body = JSON.stringify(parse);
}

if (url.indexOf("/Vod/gg") != -1) {

parse = {
  "data": {
    "gg": "中车专属破解🚗\n 已经完全破解\n大家一起来看片\n上万高清片源\n值得拥有"
  },
  "Msg": "获取成功~!",
  "code": 200
};
body = JSON.stringify(parse);
}

if (url.indexOf("/Vod/getList") != -1) {
    body = $response.body.replace(/https:\/\/s3.bmp.ovh\/imgs\/2023\/01\/13\/82be0b2d524eb561.gif/g, "https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg");
}
$done({ "body": body });


