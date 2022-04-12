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
