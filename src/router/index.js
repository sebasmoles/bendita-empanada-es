import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/empresa",
		name: "Empresa",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "empresa" */ "../views/Empresa.vue"),
	},
	{
		path: "/productos",
		name: "Productos",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(
				/* webpackChunkName: "productos" */ "../views/Productos.vue"
			),
	},
	{
		path: "/:pathMatch(.*)*",
		name: "not-found",
		component: () =>
			import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { el: to.hash, behavior: "smooth", top: 100 };
		}
		return { top: 0 };
	},
});

export default router;
