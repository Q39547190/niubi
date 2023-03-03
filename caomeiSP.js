/******************************
中车专属破解

草莓视频🍓🔞

*******************************
[rewrite_local]
# > 草莓视频🍓🔞
#下载地址https://cmbzaiqr.com?sh=QACD8 

^https:\/\/69cmh07.com\/h5\/m3u8\?url=(.+)&time=.+ - 302 https://16bi.liyongjing.org$1

^https:\/\/16bi.liyongjing.org.+m3u8.+m3u8 url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/caomeiSP.js

[mitm] 
hostname = *liyongjing*

******************************/

var url = $request.url;
var token = "m3u8";
var newUrl = url.replace(/m3u8-preview/, token);

$done({
    url: newUrl
});
