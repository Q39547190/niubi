/*
脚本功能：网易云音乐听vip
中车专属破解

#网易云解锁VIP直接听
^http[s]?:\/\/.+(player/url|playlist|entrance|/eapi/search/).*$ url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/wangyiyunyinyue.js

[mitm]
hostname = *music*

 */
var oZrF1 = $request['headers'];
oZrF1['Cookie'] = "MUSIC_U=003CBFB8F4103C0003A6E658A138E8828087493E1CB254F3FB677390231E0FA06B8FF1FF4F84C0666FC389C8399A6F37462FF0873CBE5D9407B97742099DA9C1215D4BC630990080D8D76B8425644828A50D0D4F0327057699AD99EB05D861061E0D0BE03D4636F1651A75988D7C8C1B268EB59919EBB95D57F3BE790C8B5F4338C2322C980AF6070B2404B0184C1139216C5E054DDD97CB866F2B753B8514D6D97026E922A08D0EEE4C51C95FE69D44E4B8387173BF7EAEB9683D3CCCA635553D48888A5DC985A244959A492BB2A109E03BCE31164B794FEB858E69C9783DF66E2C42D1ABF3DF1382544E98251833DF25F711128D8557C035091EEC930D10DFDABB4D7C34BAFC522D8065DB8240A980198561B25B1D43DB004D51D1CA4269E15D; NMCID=ccuoen.1650709529000.01.3; NMDI=Q1NKTQcBDADcjLRWNWMHS%2FJeWXiXAAAA1v52sqOXGsLnhaqHo4xgno5n5xOkzFP6bSieyN6t%2BMPHb%2FI2V1cBQZbtd5VjV%2BdxHnmvxbQf2YLwyR3TH%2Ftpk69M1e%2FIYjqliYMoOc7zavqUDuR0gVCxHhMRqyFlbgAIADxoItihKF9x6M2CLO96j7hMjS%2F7Ug5Xy4yfyFpmvBuqhjg0emRe0St93Xmj1rasanM6i8stZA%3D%3D; URS_APPID=AB7B7EFA13E7F3E3211635625CD09F45F391C2AB4C586D35DDC07E5F485C3FCBB6293116B121D6872A9FEA6913295501; appkey=IuRPVVmc3WWul9fT; appver=8.8.70; buildver=3260; channel=distribution; deviceId=e552ff2a144af6d5d7b62e456760138c; machineid=iPhone13.2; os=iPhone OS; osver=14.4; packageType=release; JSESSIONID-WYYY=DA87Dm0%2B%5ChsodCNSR5cY4sd%5CHUxqaoSBqjb5Eyn4nhlimglVaS4nbWyJbmemmv3HtT6%5CRdr%2BxGMpSRVUc5yVj%2BW0wW%2FF5RkFVr9XgAaexDxFD%2BnwBt3wG5b2lnrj%2FOjE8%5CCr%5C6GvyHVhcoDmX7plgP47ghPu8QaEiZyGg1Dq%5C8a%2Bfr6W%3A1669259346374; _iuqxldmzr_=33; NMTID=00OWAiE2iWj5N5Vr0Syu5GcaMwS07sAAAGEpgm8XQ; ntes_kaola_ad=1; __csrf=93db39e77cdf8a9be1e3c0a5eafbcfaf; _ntes_nnid=dbdf5c71971e4c87abf998e45d594f47,1657630613151; _ntes_nuid=dbdf5c71971e4c87abf998e45d594f47", oZrF1["User-Agent"] = "NeteaseMusic 8.7.85/2956 (iPhone; iOS 15.3.1; zh_CN)", oZrF1["MConfig-Info"] = '{"IuRPVVmc3WWul9fT":{"version":2848768,"appver":"8.7.85"},"c0Ve6C0uNl2Am0Rl":{"version":591872,"appver":"1.7.50"},"tPJJnts2H31BZXmp":{"version":1075200,"appver":"2.0.30"}}', Z4done({
    headers: oZrF1
}),
