<template>
	<section class="principales">
		<h2 class="principales-titulo">Productos principales</h2>
		<div class="principales-elementos">
			<div>
				<img
					src="../../assets/empanada-principales.jpeg"
					alt="Imagen producto"
					class="principales-imagen"
				/>
				<p class="principales-texto">
					Vivamus porta, quam semper euismod molestie, enim eros
					posuere dui, ac aliquet lectus elit ut sapien. Pellentesque
					ligula leo, convallis quis pulvinar vel, lacinia a turpis.
				</p>
			</div>
			<div>
				<img
					src="../../assets/empanada-principales.jpeg"
					alt="Imagen producto"
					class="principales-imagen"
				/>
				<p class="principales-texto">
					Vivamus porta, quam semper euismod molestie, enim eros
					posuere dui, ac aliquet lectus elit ut sapien. Pellentesque
					ligula leo, convallis quis pulvinar vel, lacinia a turpis.
				</p>
			</div>
			<div>
				<img
					src="../../assets/empanada-principales.jpeg"
					alt="Imagen producto"
					class="principales-imagen"
				/>
				<p class="principales-texto">
					Vivamus porta, quam semper euismod molestie, enim eros
					posuere dui, ac aliquet lectus elit ut sapien. Pellentesque
					ligula leo, convallis quis pulvinar vel, lacinia a turpis.
				</p>
			</div>
		</div>
		<button
			class="principales-boton"
			@click="this.$router.push('/productos')"
		>
			Ver más
		</button>
	</section>
</template>

<script>
	export default {
		name: "Principales",
	};
</script>

<style scoped>
	.principales {
		text-align: center;
		padding: 4rem 2rem;
		background-color: #282828;
		color: white;
	}
	.principales-titulo {
		margin-bottom: 2rem;
	}
	.principales-elementos {
		display: flex;
		margin-bottom: 2rem;
	}
	.principales-elementos div:not(:last-child) {
		margin-right: 6rem;
	}
	.principales-imagen {
		max-width: 100%;
	}
	.principales-texto {
		text-align: left;
	}
	.principales-boton {
		background: white;
		color: black;
	}
	.principales-boton:hover {
		background: gray;
		color: white;
	}
	/* Media queries and responsive design */
	@media only screen and (max-width: 1024px) {
		.principales-elementos div:not(:last-child) {
			margin-right: 4rem;
		}
	} ;
</style>
