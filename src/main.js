/*
 * @Author: your name
 * @Date: 2021-08-02 20:50:22
 * @LastEditTime: 2021-08-02 21:10:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gamentf\src\main.js
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Axios from "axios";
import VueAxios from "vue-axios";
import "./plugins/element.js";
import "element-ui/lib/theme-chalk/index.css";
//引入公共样式
import "./assets/css/reset.scss"; //样式初始化
Vue.config.productionTip = false;
Vue.use(VueAxios, Axios);
//开发环境
Vue.axios.defaults.baseURL = "/api/";
Vue.prototype.$openUrl = "/Web/index.html";
router.beforeEach((to, from, next) => {
  /*路由发生改变修改页面的title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
//请求拦截器-增加一个token参数
Axios.interceptors.request.use(
  (config) => {
    Vue.prototype.$messagebox.alert("点击刷新", {
      confirmButtonText: "",
      callback: () => {},
    });
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
//响应拦截器
Axios.interceptors.response.use(
  (response) => {
    //2019年7月15日 token失效，code返回-7
    // if () {
    //   localStorage.removeItem("token"); // 删除已经失效或过期的token
    //   Vue.prototype.$message({
    //     type: "error",
    //     message: "登录失效！",
    //   });

    // }
    return response;
  },
  function(error) {
    return Promise.reject(error);
  }
);
new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
