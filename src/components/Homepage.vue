<template>
	<article className="mainContainer">
		<section className="itemCard" v-for="item in items" :key="item.id">
			<div className="infoContainer">
				<router-link :to="'/details/' + item.id" className="infoContainerItem">
					<p @click="vuexItem(item)">
						{{ item.title }}
					</p>
				</router-link>
				<p className="infoContainerItem">{{ item.details }}</p>
			</div>
		</section>
	</article>
</template>

<script>
import pageMixin from "../mixins/pageMixin";
export default {
	name: "Homepage",
	mixins: [pageMixin],
	created() {
		if (this.$store.state.items.length == 0)
			this.$http
				.get("https://api.thecatapi.com/v1/images/search")
				.then((res) => {
					// const receivedData = res.data;

					// console.log just to to avoid terminal complaining
					console.log(res);

					const mockReceivedData = [
						{
							id: 1,
							title: "Title1",
							details: "Details1",
						},
						{
							id: 2,
							title: "Title2",
							details: "Details2",
						},
					];

					this.items = mockReceivedData;
					this.vuexItems(this.items);
				});
	},
	data() {
		return {
			items: this.$store.state.items,
		};
	},
	methods: {
		vuexItems: function(items) {
			this.$store.dispatch("setItems", items);
		},
		vuexItem: function(item) {
			this.$store.dispatch("setItem", item);
		},
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.mainContainer {
	overflow-y: scroll;
}
.infoContainer {
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: center;
}
.itemCard {
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	padding: 2px;
	border-style: outset;
	padding: 10px;
	width: 500px;
}
.infoContainerItem {
	margin: 10px 0;
}
</style>
