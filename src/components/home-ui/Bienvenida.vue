<template>
	<section class="bienvenida">
		<h2 class="bienvenida-titulo">Texto de bienvenida</h2>
		<div class="bienvenida-elementos">
			<img
				src="../../assets/empanada-bienvenida.jpeg"
				alt="Foto bienvenida"
			/>
			<div>
				<p class="bienvenida-texto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras nisl nisl, commodo at auctor quis, aliquet sed felis.
					Praesent neque nibh, efficitur placerat semper non, feugiat
					porttitor augue. Sed interdum elit nec nulla pulvinar, at
					fermentum dolor tempus. Donec auctor urna ac sem faucibus,
					ac pulvinar elit convallis. Nam egestas convallis metus nec
					maximus. Nulla eget malesuada urna. Phasellus condimentum,
					dolor at dapibus pretium, justo massa sollicitudin leo, in
					dictum ex mauris nec libero. Nam dictum turpis orci, et
					placerat neque interdum porta. Integer egestas, orci
					molestie luctus rhoncus, sem dui ullamcorper ligula, sed
					gravida ex urna a ligula. Nam vel dapibus dui. Cras sem
					justo, euismod ut tristique a, accumsan vestibulum magna.
				</p>
				<div class="bienvenida-boton-container">
					<button @click="this.$router.push('/empresa')">
						Ver más
					</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Bienvenida",
	};
</script>
