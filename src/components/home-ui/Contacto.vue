<template>
	<section id="contacto" class="contacto">
		<h2 class="contacto-titulo">Contacto</h2>
		<div class="contacto-elementos">
			<p class="contacto-texto">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
				nisl nisl, commodo at auctor quis, aliquet sed felis. Praesent
				neque nibh, efficitur placerat semper non, feugiat porttitor
				augue. Sed interdum elit nec nulla pulvinar, at fermentum dolor
				tempus. Donec auctor urna ac sem faucibus, ac pulvinar elit
				convallis. Nam egestas convallis metus nec maximus. Nulla eget
				malesuada urna. Phasellus condimentum, dolor at dapibus pretium,
				justo massa sollicitudin leo, in dictum ex mauris nec libero.
				Nam dictum turpis orci, et placerat neque interdum porta.
				Integer egestas, orci molestie luctus rhoncus, sem dui
				ullamcorper ligula, sed gravida ex urna a ligula. Nam vel
				dapibus dui.
			</p>
			<form @submit="onSubmit" class="contacto-formulario">
				<div class="contacto-formulario-grupo">
					<input
						type="text"
						placeholder="Nombre completo"
						data-testid="input-name"
						required
					/>
				</div>
				<div class="contacto-formulario-grupo">
					<input
						type="email"
						placeholder="Correo electrónico"
						data-testid="input-email"
						required
					/>
				</div>
				<div class="contacto-formulario-grupo">
					<input
						type="text"
						placeholder="Teléfono de contacto"
						data-testid="input-phone"
						required
					/>
				</div>
				<div class="contacto-formulario-grupo">
					<textarea
						placeholder="¿Cómo podemos ayudarte?"
						rows="2"
						data-testid="input-textarea"
						required
					/>
				</div>
				<button type="submit">Enviar</button>
			</form>
		</div>
	</section>
</template>

<script>
	export default {
		name: "Contacto",
		methods: {
			onSubmit(e) {
				e.preventDefault();
				alert(
					"Ya tenemos en nuestro sistemas tus datos, un asesor se comunicará contigo cuanto antes."
				);
			},
		},
	};
</script>
