/******************************
中车专属破解
*******************************
[rewrite_local]
# > 消防请求头提取
^https:\/\/qmxfxx.119.gov.cn\/alipay\/mini\/api\/users\/activeScore url script-request-header https://raw.githubusercontent.com/Q39547190/niubi/main/xiaofangTQ.js

[mitm] 
hostname =  *119*

*******************************/

// 获取请求头中的 Cookie
const cookie = $request.headers['Cookie'];

// 弹出提示框，显示 Cookie 的内容
$ui.alert({
  title: 'Cookie',
  message: cookie,
  actions: [{
    title: '复制',
    handler: function() {
      $clipboard.text = cookie;
      $ui.toast('Cookie 已复制');
    }
  }, {
    title: '储存到备忘录',
    handler: function() {
      $app.openURL(`mobilenotes://new?text=${encodeURIComponent(cookie)}`);
      $ui.toast('Cookie 已储存到备忘录');
    }
  }, {
    title: '取消',
    style: 'Cancel',
    handler: function() {}
  }]
});

// 调用 $done() 函数表示请求处理完成
$done();
