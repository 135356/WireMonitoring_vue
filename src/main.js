import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import bb from '@/libs/js_vue/src'
Vue.use(bb);

Vue.config.productionTip = false
import Api from "./axios/Api";
Vue.prototype.$bb_api=new Api();

router.beforeEach((to,from,next)=>{
  /*当该路由meta.aaa这个变量为真则验证登录*/
  if(to.meta.is_lonin){
      /*vuex里的is_log_in*/
      if(store.state.is_log_in){
          return next();//验证通过展示
      }else{
        //token登陆
        Vue.prototype.$bb_api.logInToken().then(res=>{
          if(res["data"]["state"] === 0){
            store.dispatch('isLogInA',true);
            return next();
          }else{
            return next({path:'/LogIn'}); //否则跳到登录页
          }
        });
      }
  }else{
      return next();
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
