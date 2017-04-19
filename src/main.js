// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router'
import store from './store'
import axios from 'axios'

Vue.use(iView);

Vue.prototype.$http = axios
import 'sass/common.sass';
import AMap from 'vue-amap';
Vue.use(AMap);
AMap.initAMapApiLoader({
  key: 'your amap key',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});
Vue.prototype.qs = require('qs');
Vue.prototype.$jsonp = require('jsonp');
Vue.config.productionTip = false

//开启debug模式
Vue.config.debug = true;
Vue.config.devtools = true

//路由过滤器
router.beforeEach(({meta, path}, from, next) => {
  if(meta.title){
    store.commit('increment', meta.title)
  }

  //if(meta.flag) {
  //  if(store.state.userInfo) {
  //    console.log(store.state.userInfo.userid);
  //    axios.get('/zapi/base/sCommunitymanager/checkManager',{
  //      params: {
  //        userid: store.state.userInfo.userid
  //      }
  //    })
  //        .then(function (response) {
  //            console.log(response);
  //            if(response.data == 0) {
  //                //next();
  //                next('/register');
  //            } else if(response.data == 1) {
  //                next('/register')
  //            } else {
  //                next('/')
  //            }
  //        })
  //        .catch(function (error) {
  //          console.log(error);
  //        });
  //  } else {
  //    next("/")
  //  }
  //} else {
  //  next();
  //}
//if(meta.auth){
//  if(store.state.userInfo){
//    next();
//  }else{
//    next("/");
//  }
//}else{
  next();
//}

})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
