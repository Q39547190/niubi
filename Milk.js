/*******************************
中车专属破解

Milk 下载地址: https://milk.kzk61yo.cn/?

*******************************

[rewrite_local]

^http[s]?:\/\/ppt.fuaybr.cn\/\/Api\/(getmovexiangqing|getmhepisodesimg).*$ url request-body sign_token=[a-zA-Z0-9]+ request-body sign_token=b6d059068ee765eb74f43523dac85141

^https:\/\/ppt.fuaybr.cn\/\/(Api|Milk)\/(getuserinfo|getstartup|getvideotop) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/Milk.js

[mitm]

hostname = *fuaybr*

*******************************/

var $response_body = $response.body;
var $request_url = $request.url;
var parse = JSON.parse($response_body);
if ($request_url.indexOf("Api/getuserinfo") != -1) {
    parse = {
        "msg": "获取用户数据成功",
        "user_info": {
            "description": "",
            "grades": "1",
            "sign_token": "",
            "app_uuid": "",
            "last_login_time": "",
            "status": "1",
            "login_type": "3",
            "zhanghaobj": "https://ppt.fuaybr.cn/Public/appimg/zhanghaobj005.png",
            "mfseett": "获取更多免费看",
            "qrpassword": "",
            "sex": "0",
            "invitshow": 0,
            "share_id": "98027",
            "account_token": "",
            "ke_id": 1,
            "share_url": "",
            "balance": "99999999",
            "point": "99999999",
            "mf_see": "0",
            "level_expire": "9999年09月09日 09:09",
            "id": "888888",
            "userhead": "https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg",
            "level": "5",
            "invit_code": "",
            "qr_code": "https://ppt.fuaybr.cn",
            "mobile": "18666666666",
            "zhanghaoerwmbj": "https://ppt.fuaybr.cn/Public/appimg/ffffff.png",
            "dl": "0",
            "login_banben": "3",
            "username": "中车专属破解"
        },
        "code": 10000
    };
    $response_body = JSON.stringify(parse);
}
if ($request_url.indexOf("getstartup") != -1) {
    parse = {
        "msg": "获取成功",
        "data": {
            "is_open": 1,
            "ggjump": "",
            "minint": 1,
            "bjimgurl": "https://telegraph-image.pages.dev/file/926a64c523b8cda30818a.jpg"
        },
        "code": 10000
    };
    $response_body = JSON.stringify(parse);
}
if ($request_url.indexOf("getvideotop") != -1) {
    parse.indextcggtztxt = [
        "中车专属破解",
        "已解锁全部视频",
        "失效请联系我😏",
        "尽情享受吧"
    ];
    $response_body = JSON.stringify(parse);
}
$done({ "body": $response_body });
