/******************************
中车专属破解

QQ传媒 2022.12.6
下载地址：https://qq.app002.life/?code=dTD4

-------分割线------

50度灰 2022.12.6
下载地址：https://50.aff007.cool/chan/h50352/dJEah

-------分割线------

七度空间 2022.12.6
下载地址：https://sn.app002.life/af/ZGD

-------分割线------

91AV 2022.12.6
下载地址: https://mv.aff007.cool/aff-cuEur

-------分割线------

PiliPili (动漫类)2022.12.7
下载地址 ：https://pili.app002.life/

-------分割线------

菠萝视频(只支持视频类)2022.12.7

下载地址：https://bo.aff007.cool/af/Qeap

-------分割线------

91视频极速版(只支持视频类)2022.12.7

下载地址：https://yy.app002.life/index/pwa?aff_code=

-------分割线------

果冻App 2022.12.7
下载地址: https://gd.app002.life/?code=avKt

-------分割线------

91短视频(部分破解) 2022.12.7
下载地址: https://dsp.aff007.cool/aff-htJZc

-------分割线------

暧昧(破解全部视频) 2022.12.7
下载地址: https://am.dpaaz.com/af/aPSn

-------分割线------

妻友(破解全部视频) 2022.12.7
下载地址: https://7u.aff007.cool/?code=byDz

-------分割线------

汤头条(破解全部视频) 2022.12.7
下载地址: https://ttt.aff007.cool/af/bzpUc

-------分割线------

柚子视频(破解全部视频) 2022.12.7
下载地址: https://app.yhymv.com/index/pwa?aff_code=

-------分割线------

撸先生(破解vip视频付费无法破解) 2022.12.7
下载地址: https://sir.estyle.wang/c-1/a-btwBW/

-------分割线------

糖人视频(破解全部视频) 2022.12.7
下载地址: https://tren.app002.life/chan/tren0001/j

-------分割线------

51吃瓜(看明星黑料，应该是破解了) 2022.12.7
下载地址: https://aff.cggo.life/?code=ahy8&c=300

-------分割线------

抖阴(抖音模式破解) 2022.12.7
下载地址: https://sir.estyle.wang/c-1/a-btwBW/

-------分割线------

*******************************
[rewrite_local]
# > 通用破解全部视频
^http[s]?:\/\/.+ludeng.+watch.+m3u8.+ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/tongyongpojie.js

[mitm] 
hostname = 120play*,h5play*,*ludeng*

*******************************/

var vip = $request.headers;
vip['Host'] = 'long.ludeng.co';
$done({
    headers : vip
});
