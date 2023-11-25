import { createWebHistory, createRouter } from "vue-router";

import IndexComp from "../components/IndexComp.vue";
import ResumeComp from "../components/ResumeComp.vue";
import SelfIntroComp from "../components/SelfIntroComp.vue";

import ProjectComp1 from "../components/ProjectComp1.vue";
import ProjectComp2 from "../components/ProjectComp2.vue";
import ProjectComp3 from "../components/ProjectComp3.vue";


import ContestComp1 from "../components/ContestComp1.vue";

import CareerComp1 from "C:/Users/박나영/Desktop/3학년 2학기/고급프로그래밍/vue/vue_1/src/components/CareerComp1 .vue";
import CareerComp2 from "../components/CareerComp2.vue";

const routes = [
     {
      path: "/",
      component: IndexComp,
     },
     {
      path: "/resume",
      component: ResumeComp,
     },
     {
      path: "/selfintro",
      component: SelfIntroComp,
     },
     {
      path: "/project1",
      component: ProjectComp1,
     },
     {
      path: "/project2",
      component: ProjectComp2,
     },
     {
     path: "/project3",
     component: ProjectComp3,
     },
     {
     path: "/contest1",
     component: ContestComp1,
     },
     {
    path: "/career1",
    component: CareerComp1,
    },
    {
     path: "/career2",
    component: CareerComp2,
    },
        
    ];
        
    
const router = createRouter({
         // 라우트 생성
         history: createWebHistory(),
         routes,
        });
        export default router;
    