<template>
	<section class="productos">
		<h2 class="productos-titulo">Productos</h2>
		<div class="productos-contenido">
			<img
				src="../../assets/empanada-hero.jpeg"
				alt="Imagen de producto"
				class="productos-imagen"
			/>
			<img
				src="../../assets/empanada-hero.jpeg"
				alt="Imagen de producto"
				class="productos-imagen"
			/>
			<img
				src="../../assets/empanada-hero.jpeg"
				alt="Imagen de producto"
				class="productos-imagen"
			/>
			<img
				src="../../assets/empanada-hero.jpeg"
				alt="Imagen de producto"
				class="productos-imagen"
			/>
			<img
				src="../../assets/empanada-hero.jpeg"
				alt="Imagen de producto"
				class="productos-imagen"
			/>
			<img
				src="../../assets/empanada-hero.jpeg"
				alt="Imagen de producto"
				class="productos-imagen"
			/>
		</div>
	</section>
</template>

<script>
	export default {
		name: "ProductosDetalle",
	};
</script>

<style scoped>
	.productos {
		padding: 4rem 2rem;
		text-align: center;
	}
	.productos-titulo {
		margin-bottom: 2rem;
	}
	.productos-contenido {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.productos-imagen {
		max-width: 30%;
		margin-bottom: 2rem;
		object-fit: cover;
	}
</style>
