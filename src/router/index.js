import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthService from '../api/AuthService';





Vue.use(VueRouter)


const Error404 = () => import('../views/Error404.vue')
const PrivacyPolicy = () => import('../views/PrivacyPolicy.vue')


const Auth = () => import('../modules/auth/Index.vue')
const SignIn = () => import('../modules/auth/components/SignIn.vue')
const SignUp = () => import('../modules/auth/components/SignUp.vue')

const Projects = () => import('../modules/main/Index.vue')
const ProjectsTab = () => import('../modules/main/components/tabs/ProjectsTab.vue')
const AnalyticsTab = () => import('../modules/main/components/tabs/AnalyticsTab.vue')



const Project = () => import('../modules/project/Index.vue')







export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/signin",
      component: Auth,
      children: [ 
        {
          path: "/",
          component: SignIn
        },
        {
          path: "/signup",
          component: SignUp
        },
      ]
    },
    {
      path: "/",
      component: Projects,
      beforeEnter: AuthService.requireAuth,
      children: [
        {
          path: "/",
          component: ProjectsTab
        },
        {
          path: "/project/:guid",
          component: Project,

        },
        {
          path: "/analytics",
          component: AnalyticsTab
        },
      ]
    },
    {
      path: '/privacypolicy',
      component: PrivacyPolicy
    },
    { 
      path: "*", 
      component: Error404
    }
  ]
})