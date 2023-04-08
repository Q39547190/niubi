/******************************
中车专属破解
*******************************
[rewrite_local]
# > 神户live

^https:\/\/gitee\.com\/ReactJSTeams\/next\.js\/raw\/master\/examples\/nested-components\/\.gitignore url response-body .+ response-body eyJpbmZvIjp7InpoTmFtZSI6IuS4rei9pkxpdmUiLCJ6aExpdmVOYW1lIjoi5Lit6L2m5LiT5bGe56C06KejIiwic2hvcnROYW1lIjoi5Lit6L2mIiwibG9uZ05hbWUiOiLkuK3ovabkuJPlsZ7noLTop6MiLCJlbk5hbWUiOiJLb2JlIExpdmUiLCJkb21haW4iOiLkuK3ovaZZWURTIiwiemhDb21wYW55TmFtZSI6IuS4rei9puS4k+WxnkxPR09TIiwiZW5Db21wYW55TmFtZSI6IkxFU0hBUkUgQ1VMVFVSRSBMSU1JVEVEIChIT05HS09ORykifSwiaG9zdCI6eyJhcGlIb3N0IjoiaHR0cHM6Ly9hcGkuZG9tYWluLmxpdW5pdWtlamkuaGVzaHVhbmdkZS5jb20vaW5kZXgucGhwL0FwcC8iLCJ3d3dIb3N0IjoiaHR0cHM6Ly90ZWxlZ3JhcGgtaW1hZ2UucGFnZXMuZGV2LyJ9LCJhZCI6eyJhZF9pZCI6NDEsInRpbWUiOjMsImltYWdlIjoiaHR0cHM6Ly9jZG4tdXB5dW4taW1hZ2VzLmR1c2h1MzY1LmNvbS8xNjc4MDkyNTA0N2IzZGQ1NmM3YjQzY2FmODVlNDgyN2RjMjRhMTkzYjY1NW9udG0iLCJ1cmwiOiJodHRwczovL2Nkbi11cHl1bi1pbWFnZXMuZHVzaHUzNjUuY29tLzE2NzgwOTI1MDQ3YjNkZDU2YzdiNDNjYWY4NWU0ODI3ZGMyNGExOTNiNjU1b250bSJ9fQ==

^https:\/\/api.domain.liuniukeji.heshuangde.com\/index.php\/App\/(User|Account|Index)\/(Info|Login|Update) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/shenhu2.js

[mitm] 
hostname = *liuniukeji*


*******************************/

var body = $response.body;
var url = $request.url;
var parse = JSON.parse(body);
if (url.indexOf("/User/Info") != -1) {
   parse = {"status":true,"result":{"mobile":"中车大神","no_agents":1,"sales_page":"中车专属破解","expired_time":32493834549,"expired_days":356674,"sales_page_online":"中车专属破解","contect_info":"請聯繫閣下原購買經銷商"}};

body = JSON.stringify(parse);

$done({ "body": body });
}

if (url.indexOf("/Account/Login") != -1) {
   parse = {"status":true,"result":{"code":"86","mobile":"18747778866","uid":"100585595","token":"fe379f939844808645589f5fadccf834"},"code":0};

$notify("中车专属破解-神户live🚗","****破解代码注入成功****","永久vip破解成功‼️");

body = JSON.stringify(parse);

$done({ "body": body });
}

if (url.indexOf("/Index/Update") != -1) {
   parse = {"status":true,"result":{"forceUpdate":false},"ad":{"active":true,"image":"https://cdn-upyun-images.dushu365.com/16780925047b3dd56c7b43caf85e4827dc24a193b655ontm","url":"https://cdn-upyun-images.dushu365.com/16780925047b3dd56c7b43caf85e4827dc24a193b655ontm","info":{"aid":"ad_1018","close_forever":false}}};

$notify("中车专属破解-神户live🚗","****破解代码注入成功****","永久vip破解成功‼️");

body = JSON.stringify(parse);

$done({ "body": body });
}
