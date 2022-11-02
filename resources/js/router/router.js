





import { createRouter , createWebHistory } from "vue-router";


import LoginPage from '../views/auth/LoginPage.vue';
import SignupPage from '../views/auth/SignupPage.vue';
import HomePage from '../views/HomePage.vue';
import ScreenLoadingComponent from '../components/ScreenLoadingComponent.vue';

const router = createRouter({
    history:  createWebHistory(),
    routes: [


        {path: '/login' , component: LoginPage, meta: {guest: true}  },
        {path: '/signup' , component: SignupPage, meta: {guest: true} },
        {path: '/home' , component: HomePage , meta: {auth:true } },
        {path: '/loading' , component: ScreenLoadingComponent ,  },
    ],
});





function authenticated(){
    return localStorage.getItem('token');
}


router.beforeEach((to,from,next)=>{

    if(to.meta.guest && authenticated()){
        next('/home');
    }else if(to.meta.auth && !authenticated()){
        next('/login');
    }else{
        next();
    }

});

export default router;