import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		items: [],
		item: {},
	},
	actions: {
		setItems({ commit }, payload) {
			commit("setItems", payload);
		},
		setItem({ commit }, payload) {
			commit("setItem", payload);
		},
	},
	mutations: {
		setItems(state, payload) {
			state.items = payload;
		},
		setItem(state, payload) {
			state.item = payload;
		},
	},
});
