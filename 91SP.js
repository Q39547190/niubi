/******************************
中车专属破解
91视频
下载地址 https://app.pjli.xyz/i-WS48XLJ
*******************************
[rewrite_local]
# > 91视频全部视频

^http[s]?:\/\/.+((ppapi)|(17gwl)|(sgyrc)|(mnghx)|(czbt)|(jtshuzhiwa)).(info|cc|com)\/(m_sns|m_user)\/(video\/apply_play_permission|film|info).*$ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/91SP.js

[mitm] 
hostname =*ppapi*,*17gwl*,*sgyrc*,*mnghx*,*czbt*,*jtshuzhiwa*

*******************************/

var vip = $response.body;
var _url = $request.$request_url;
var qingqiuti = $request.headers;
qingqiuti['X-AUTH-TOKEN'] = '1511aa9decd50335781baf35983bcdd79eeacff2';
qingqiuti['X-CODESIGN'] = 'eyJhbGciOiJIUzUxMiIsImlhdCI6MTY3MDE2ODE2NCwiZXhwIjoxNjg1NzIwMTY0fQ.eyJpZCI6MTA2MDI5NDExfQ.2Zen35BbPAFjghN45rsy-eB9VNFeV816E__2BS3rLmniEyQ2DUhI2EL_LWzu5ZTLSZeUMiUAr3TOBkMU9gxXyA';
$done({
    headers : qingqiuti
});

