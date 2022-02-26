<template>
	<Header />

	<Hero />
	<router-view />

	<Footer />
</template>

<script>
	import Header from "./components/Header.vue";
	import Hero from "./components/Hero.vue";
	import Footer from "./components/Footer.vue";

	export default {
		components: {
			Header,
			Hero,
			Footer,
		},
	};
</script>

<style>
	html {
		font-size: 100%;
		box-sizing: border-box;
	}

	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	body {
		margin: 0;
		padding: 0;
		line-height: 1.3;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		font-size: 1rem;
		color: black;
		background-color: white;
	}

	h1,
	h2,
	h3 {
		margin: 0px;
	}

	h2 {
		font-size: 2rem;
	}

	a,
	a:visited {
		text-decoration: none;
		color: black;
		font-weight: bold;
	}

	a:hover {
		color: gray;
	}

	button {
		color: white;
		background-color: black;
		font-size: 1rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
	}

	button:hover {
		background-color: gray;
	}
</style>
