/******************************
中车专属破解
*******************************
[rewrite_local]
# > 神户live

^https:\/\/gitee\.com\/ReactJSTeams\/next\.js\/raw\/master\/examples\/nested-components\/\.gitignore url response-body .+ response-body eyJpbmZvIjp7InpoTmFtZSI6IuS4rei9pkxpdmUiLCJ6aExpdmVOYW1lIjoi5Lit6L2m5LiT5bGe56C06KejIiwic2hvcnROYW1lIjoi5Lit6L2mIiwibG9uZ05hbWUiOiLkuK3ovabkuJPlsZ7noLTop6MiLCJlbk5hbWUiOiJLb2JlIExpdmUiLCJkb21haW4iOiLkuK3ovaZZWURTIiwiemhDb21wYW55TmFtZSI6IuS4rei9puS4k+WxnkxPR09TIiwiZW5Db21wYW55TmFtZSI6IkxFU0hBUkUgQ1VMVFVSRSBMSU1JVEVEIChIT05HS09ORykifSwiaG9zdCI6eyJhcGlIb3N0IjoiaHR0cHM6Ly9hcGkuZG9tYWluLmxpdW5pdWtlamkuaGVzaHVhbmdkZS5jb20vaW5kZXgucGhwL0FwcC8iLCJ3d3dIb3N0IjoiaHR0cHM6Ly90ZWxlZ3JhcGgtaW1hZ2UucGFnZXMuZGV2LyJ9LCJhZCI6eyJhZF9pZCI6NDEsInRpbWUiOjMsImltYWdlIjoiaHR0cHM6Ly90ZWxlZ3JhcGgtaW1hZ2UucGFnZXMuZGV2L2ZpbGUvOTI2YTY0YzUyM2I4Y2RhMzA4MThhLmpwZyIsInVybCI6Imh0dHBzOi8vdGVsZWdyYXBoLWltYWdlLnBhZ2VzLmRldi9maWxlLzkyNmE2NGM1MjNiOGNkYTMwODE4YS5qcGcifX0=

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
   parse = {"status":true,"code":0,"result":{"uid":"100565099","token":"05185f113fe7ac5eebaa4e01e50267f4","code":"86","mobile":"15517816666"}};

$notify("中车专属破解-神户live🚗","****破解代码注入成功****","永久vip破解成功‼️");

body = JSON.stringify(parse);

$done({ "body": body });
}

if (url.indexOf("/Index/Update") != -1) {
   parse = {"status":true,"result":{"forceUpdate":false},"ad":{"active":true,"image":"https://cdn-upyun-images.dushu365.com/16780925047b3dd56c7b43caf85e4827dc24a193b655ontm","url":"","info":{"aid":"ad_1018","close_forever":false}}};

$notify("中车专属破解-神户live🚗","****破解代码注入成功****","永久vip破解成功‼️");

body = JSON.stringify(parse);

$done({ "body": body });
}
