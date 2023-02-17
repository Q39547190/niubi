/******************************
中车专属破解
ONE一个🔞
*******************************
[rewrite_local]
# > ONE一个🔞

^https:\/\/.+(cdchuangao|21ec74|0qda82zu).+(ad|one|comment|article).+(mp4|space|list|detail) url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/ONE.js

[mitm] 
hostname = *cdchuangao*,*21ec74*

******************************/

var url = $request.url;
var vip = $request.headers;
var token = "";
var newUrl = url.replace(/-sample/, token);

if (url.indexOf("mp4") != -1) {
$done({url: newUrl});
}

if (url.indexOf("/ad/space") != -1) {

$notify("中车专属破解-one一个🚗","****破解代码注入成功****","永久vip破解成功‼️");
}

if (url.indexOf("/comment/list") != -1) {

vip['Host'] = 'api.0qda82zu.com';
vip['Referer'] = 'https://byym79.com/';
vip['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1';
vip['Origin'] = 'https://byym79.com/';
vip['app-version'] = '2.2.4';
vip['platform'] = '3';
vip['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE5NTY5NDc5LCJpc192aXNpdG9yIjoxLCJ1dWlkIjoiZjVkYTgyMzAtYWU5ZC0xMWVkLWJjYmUtZjM1MDliZjgwNWM2Iiwibmlja25hbWUiOiJcdTUzZTRcdTVkZThcdTllMjEyMzIxOTY4IiwiaXAiOiIxMTIuOTYuMTM3LjM5IiwiaWF0IjoxNjc2NjIyODk4LCJleHAiOjE2NzcyMzEyOTgsIm5iZiI6MTY3NjYyMjg5OCwic3ViIjoiYXBpLjBxZGE4Mnp1LmNvbSIsImp0aSI6IjkyOGM1YzZjOGU2YzEzMjQwMDRhMDFhYTY2YWFiM2E2In0.lveEwcKtig5MVRSS4DGdMTVshynAXRJk-Znxs696gvc';

$done({
    headers : vip
});
}

if (url.indexOf("/article/detail") != -1) {

vip['Host'] = 'api.0qda82zu.com';
vip['Referer'] = 'https://byym79.com/';
vip['User-Agent'] = 'Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.0 Mobile/15E148 Safari/604.1';
vip['Origin'] = 'https://byym79.com/';
vip['app-version'] = '2.2.4';
vip['platform'] = '3';
vip['token'] = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOjE5NTY5NDc5LCJpc192aXNpdG9yIjoxLCJ1dWlkIjoiZjVkYTgyMzAtYWU5ZC0xMWVkLWJjYmUtZjM1MDliZjgwNWM2Iiwibmlja25hbWUiOiJcdTUzZTRcdTVkZThcdTllMjEyMzIxOTY4IiwiaXAiOiIxMTIuOTYuMTM3LjM5IiwiaWF0IjoxNjc2NjIyODk4LCJleHAiOjE2NzcyMzEyOTgsIm5iZiI6MTY3NjYyMjg5OCwic3ViIjoiYXBpLjBxZGE4Mnp1LmNvbSIsImp0aSI6IjkyOGM1YzZjOGU2YzEzMjQwMDRhMDFhYTY2YWFiM2E2In0.lveEwcKtig5MVRSS4DGdMTVshynAXRJk-Znxs696gvc';
$done({
    headers : vip
});
}
