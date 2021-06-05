import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";

import "./config/bootstrap";
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6ImFkbWluIiwiZW1haWwiOiJhZG1pbkBlbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjIyOTEzMjU4LCJleHAiOjE2MjMxNzI0NTh9.x9WMLK1aqABu2rZ453rulCpzGLR-QUutBn3awwrZ2IE";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
