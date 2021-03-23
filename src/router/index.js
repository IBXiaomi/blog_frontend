import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import brazil from "../views/Brazil";
import hawaii from "../views/Hawaii";
import jamaica from "../views/Jamaica";
import panama from "../views/Panama";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ "../views/About.vue"),
    },
    {
        path: "/brazil",
        name: "brazil",
        component: brazil
    },
    {
        path: "/hawaii",
        name: "hawaii",
        component: hawaii
    },
    {
        path: "/jamaica",
        name: "jamaica",
        component: jamaica
    },
    {
        path: "/panama",
        name: "panama",
        component: panama
    },
    {
        path: "/login",
        name: "login",
        component: () => import(/*webpackChunkName: "login" */ "../views/login")
    },
    {
        path: "/details/:id",
        name: "DestinationDetails",
        component: () => import(/*webpackChunkName: "DestinationsDetails" */ "../views/DestinationsDetails")
    }

];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
