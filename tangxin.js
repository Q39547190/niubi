/******************************
中车专属破解
糖心🔞
*******************************
[rewrite_local]
# > 糖心🔞


^https:\/\/txh016.+m3u8.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/tangxin.js

[mitm] 
hostname = *txh016*

******************************/
var url = $request.url;
var hot = "16bi.liyongjing.org";
var token = "m3u8";
var token2 = "";
var newUrl = url.replace(/txh016.com\/h5\/m3u8\?url=/, hot).replace(/m3u8-preview/, token).replace(/&time=\d+&sign=.+/, token2);
var headers = {
    'Host': '16bi.liyongjing.org',
    'User-Agent': 'StormSniffer-Extension/2254 CFNetwork/1327.0.4 Darwin/21.2.0',
    'Connection': 'keep-alive',
    'Accept-Encoding': 'gzip'
};

if (url.indexOf('media2/m3u8-preview') != -1) {
  $done({
    status: 302,
    headers: {
      Location: NewUrl
    }
  });
}
