<template>
	<div id="app">
		<h1>Page Title</h1>
		<router-view></router-view>
	</div>
</template>

<script>
export default {
	name: "App",
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	max-width: 600px;
	max-height: 800px;
	margin: auto;
	padding: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
}
</style>
