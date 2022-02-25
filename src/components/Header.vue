<template>
	<header>
		<h1>Logo</h1>
		<div>
			<span>Calle 21 # 17-50 Bucaramanga, Colombia</span>
			<span>(+57) 319-552-0759</span>
		</div>
		<nav>
			<router-link to="/">Home</router-link>
			<router-link to="/empresa">Bendita Empresa</router-link>
			<router-link to="/productos">Bendita Empanada</router-link>
		</nav>
	</header>
</template>

<script>
	export default {
		name: "Header",
	};
</script>

<style scoped></style>
