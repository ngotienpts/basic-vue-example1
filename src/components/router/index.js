import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../Home.vue";
import Product from "../Product.vue";
import About from "../About.vue";
import Error from "../Error.vue";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/product",
        component: Product,
    },
    {
        path: "/about",
        component: About,
    },
    { path: "/:pathMatch(.*)*", name: "NotFound", component: Error },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
