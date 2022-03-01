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
		line-height: 1.6;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		font-size: 1.125rem;
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
		height: 42px;
		background-color: black;
		font-size: 1.125rem;
		border: none;
		padding: 0.5rem 2rem;
		cursor: pointer;
	}

	button:hover {
		background-color: gray;
	}

	/* Media queries and responsive design */
	@media only screen and (max-width: 1024px) {
		body {
			font-size: 1rem;
		}
		button {
			font-size: 1rem;
		}
	}

	@media only screen and (max-width: 768px) {
		h2 {
			font-size: 1.8rem;
		}
	} ;
</style>
