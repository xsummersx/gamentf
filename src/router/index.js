/*
 * @Author: your name
 * @Date: 2021-08-02 20:50:22
 * @LastEditTime: 2021-08-02 20:59:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gamentf\src\router\index.js
 */
import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/home/PaperList",
  //   name: "PaperList",
  //   component: () => import("../page/PaperList.vue"),
  //   meta: { title: "试卷讲评报告" },
  // },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
});

export default router;
