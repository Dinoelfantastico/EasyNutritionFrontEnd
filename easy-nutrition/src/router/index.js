import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/about.vue')
    }
    ,
    {
        path: '/roles',
        name: 'roles',
        component: () => import('../components/roles/roles')
    },
    {
        path: '/roles/new',
        name: 'add-role',
        component: () => import('../components/roles/add-role')
    },
    {
        path: '/roles/:id',
        name: 'edit-role',
        component: () => import('../components/roles/edit-role')
    },

    {
        path: '/users',
        name: 'users',
        component: () => import('../components/users/users')
    },
    {
        path: '/users/new',
        name: 'add-user',
        component: () => import('../components/users/add-user')
    },
    {
        path: '/users/:id',
        name: 'edit-user',
        component: () => import('../components/users/edit-user')
    },
    {
        path: '/complaints',
        name: 'complaints',
        component: () => import('../components/complaints/complaints')
    },
    {
        path: '/complaints/new',
        name: 'add-complaint',
        component: () => import('../components/complaints/add-complaint')
    },
    {
        path: '/complaints/:id',
        name: 'edit-complaint',
        component: () => import('../components/complaints/edit-complaint')
    },
    {
        path: '/experiences',
        name: 'experiences',
        component: () => import('../components/experiences/experiences')
    },
    {
        path: '/experiences/new',
        name: 'add-experience',
        component: () => import('../components/experiences/add-experience')
    },
    {
        path: '/experiences/:id',
        name: 'edit-experience',
        component: () => import('../components/experiences/edit-experience')
    }


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
