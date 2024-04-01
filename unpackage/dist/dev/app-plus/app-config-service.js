
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#F8F8F8","navigationBar":{"backgroundColor":"#F8F8F8","titleText":"uni-app","type":"default","titleColor":"#000000"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"sleepMedical","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.99","entryPagePath":"pages/index/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#000000","selectedColor":"#b7d1fa","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","list":[{"text":"首页","iconPath":"/static/tarBarIcon/home.png","selectedIconPath":"/static/tarBarIcon/home-.png","pagePath":"pages/index/index"},{"text":"设备","iconPath":"/static/tarBarIcon/lanya.png","selectedIconPath":"/static/tarBarIcon/lanya-.png","pagePath":"pages/device/device"},{"text":"我的","iconPath":"/static/tarBarIcon/user.png","selectedIconPath":"/static/tarBarIcon/user-.png","pagePath":"pages/my/my"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/index/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":0,"navigationBar":{"titleText":"首页","type":"default"},"isNVue":false}},{"path":"pages/device/device","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"navigationBar":{"titleText":"设备","type":"default"},"isNVue":false}},{"path":"pages/my/my","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"navigationBar":{"titleText":"我的","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/sleep_state_index/sleep_state_index","meta":{"enablePullDownRefresh":true,"navigationBar":{"titleText":"睡眠状态","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/sleep_state/sleep_state","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/heart_rate_index/heart_rate_index","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/sleep_position_index/sleep_position_index","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"体位体动","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/sleep_position/sleep_position","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"体位体动统计结果","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/my_report_index/my_report_index","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"历史报告","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/my_report/my_report","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"我的报告","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/snore_detail_index/snore_detail_index","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"鼾声","type":"default"},"isNVue":false}},{"path":"pages/sleep-page/snore_detail/snore_detail","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"鼾声统计","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  