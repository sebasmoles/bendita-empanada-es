<template>
	<section class="empresa">
		<h2 class="empresa-titulo">Empresa</h2>
		<div class="empresa-atributos">
			<div>
				<img
					src="../../assets/empresa.jpeg"
					alt="Atributo de la empresa"
					class="empresa-imagen"
				/>
				<p class="empresa-texto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras nisl nisl, commodo at auctor quis, aliquet sed felis.
					Praesent neque nibh, efficitur placerat semper non, feugiat
					porttitor augue. Sed interdum elit nec nulla pulvinar, at
					fermentum dolor tempus. Donec auctor urna ac sem faucibus,
					ac pulvinar elit convallis. Nam egestas convallis metus nec
					maximus. Nulla eget malesuada urna. Phasellus condimentum,
					dolor at dapibus pretium, justo massa sollicitudin leo, in
					dictum ex mauris nec libero.
				</p>
			</div>
			<div>
				<img
					src="../../assets/empresa.jpeg"
					alt="Atributo de la empresa"
					class="empresa-imagen"
				/>
				<p class="empresa-texto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras nisl nisl, commodo at auctor quis, aliquet sed felis.
					Praesent neque nibh, efficitur placerat semper non, feugiat
					porttitor augue. Sed interdum elit nec nulla pulvinar, at
					fermentum dolor tempus. Donec auctor urna ac sem faucibus,
					ac pulvinar elit convallis. Nam egestas convallis metus nec
					maximus. Nulla eget malesuada urna. Phasellus condimentum,
					dolor at dapibus pretium, justo massa sollicitudin leo, in
					dictum ex mauris nec libero.
				</p>
			</div>
			<div>
				<img
					src="../../assets/empresa.jpeg"
					alt="Atributo de la empresa"
					class="empresa-imagen"
				/>
				<p class="empresa-texto">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras nisl nisl, commodo at auctor quis, aliquet sed felis.
					Praesent neque nibh, efficitur placerat semper non, feugiat
					porttitor augue. Sed interdum elit nec nulla pulvinar, at
					fermentum dolor tempus. Donec auctor urna ac sem faucibus,
					ac pulvinar elit convallis. Nam egestas convallis metus nec
					maximus. Nulla eget malesuada urna. Phasellus condimentum,
					dolor at dapibus pretium, justo massa sollicitudin leo, in
					dictum ex mauris nec libero.
				</p>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
		name: "EmpresaDetalle",
	};
</script>

<style scoped>
	.empresa {
		padding: 4rem 2rem;
		text-align: center;
	}
	.empresa-titulo {
		margin-bottom: 2rem;
	}
	.empresa-atributos {
		display: flex;
	}
	.empresa-atributos div:not(:last-child) {
		margin-right: 4rem;
	}
	.empresa-imagen {
		max-width: 100%;
	}
	.empresa-texto {
		text-align: left;
	}
</style>
