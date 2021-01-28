import Vue from "vue";
import VueRouter from "vue-router";
import VueResource from "vue-resource";
import Routes from "./routes";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
	routes: Routes,
	mode: "history",
});

new Vue({
	render: (h) => h(App),
	router,
	store,
}).$mount("#app");
