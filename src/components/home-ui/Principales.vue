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
