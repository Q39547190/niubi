var url = $request.url;
var hot = "16bi.liyongjing.org";
var token = "m3u8";
var token2 = "";
var newUrl = url.replace(/txh016.com\/h5\/m3u8\?url=/, hot).replace(/m3u8-preview/, token).replace(/&time=\d+&sign=.+/, token2);

var vip = $request.headers;
let newHost = '16bi.liyongjing.org';

$done({
    url: newUrl,
    headers: {
        'Host': newHost
'User-Agent': `StormSniffer-Extension/2254 CFNetwork/1327.0.4 Darwin/21.2.0`
'Connection': `keep-alive`
'Accept-Encoding': `gzip`
    }
});
