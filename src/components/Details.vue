<template>
	<article className="mainContainer" v-if="item">
		<router-link :to="'/'" className="arrowIcon">
			<p>Back</p>
		</router-link>
		<section className="itemInfo">
			<h2>{{ item.title }}</h2>
			<p>{{ item.details }}</p>
		</section>
	</article>
</template>

<script>
import pageMixin from "../mixins/pageMixin";
export default {
	name: "Details",
	mixins: [pageMixin],
	data() {
		return {
			items: this.$store.state.items,
			item: this.$store.state.item,
			id: this.$route.params.id,
		};
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContainer {
	text-align: start;
	width: 500px;
}
.itemInfo {
	text-align: start;
}
</style>
