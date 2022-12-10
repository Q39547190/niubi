/******************************
中车专属破解
#暗TV🔞(来至暗网)下载地址：https://an2.somi7.xyz/?antvinvite=mbkRl2mYaz
*******************************
[rewrite_local]
# > 暗Tv全部视频
^http[s]?:\/\/.+antvapp.+\/api\/videos\/.*$ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/antv.js

[mitm] 
hostname = *antvapp*

*******************************/

var vip = $request.headers;
vip['Authorization'] = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2FwaTIuYW50dmFwcC5jb206ODA4MC9hcGkvYXV0aC9yZXN0b3JlIiwiaWF0IjoxNjcwMjk0MzIzLCJleHAiOjE3MDEzOTgzMjMsIm5iZiI6MTY3MDI5NDMyMywianRpIjoiMTdmdXVkN0dLeUxCRHRGbyIsInN1YiI6IjEwMjUxMDQ1IiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.-CJfM7Zg-Wpl-t4LDUk8qi2YlauhZe8chB6yc6kGFw8';
$done({
    headers : vip
});

