/******************************
中车专属破解
*******************************
[rewrite_local]
# > 神户live
^https:\/\/.+liuniukeji.+\/index.php\/App\/(User|Account)\/(Info|Login) url script-response-body https://raw.githubusercontent.com/Q39547190/niubi/main/shenhu2.js

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
   parse = {"status":true,"code":0,"result":{"uid":"100565099","token":"86be403f029202d22d1afb60cd72f57f","code":"86","mobile":"15517816666"}};

$notify("中车专属破解-神户live🚗","****破解代码注入成功****","永久vip破解成功‼️");

body = JSON.stringify(parse);

$done({ "body": body });
}
