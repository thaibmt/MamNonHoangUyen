import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Login from "../views/Login.vue";

const routes= [
    { path: "/", component: Dashboard, name: "Dashboard" },
    { path: "/login", component: Login, name: "Login" },
];
const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;