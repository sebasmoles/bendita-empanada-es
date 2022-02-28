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
				dapibus dui. Cras sem justo, euismod ut tristique a, accumsan
				vestibulum magna.
			</p>
			<form @submit="onSubmit" class="contacto-formulario">
				<div class="contacto-formulario-grupo">
					<input type="text" placeholder="Nombre completo" required />
				</div>
				<div class="contacto-formulario-grupo">
					<input
						type="email"
						placeholder="Correo electrónico"
						required
					/>
				</div>
				<div class="contacto-formulario-grupo">
					<input
						type="text"
						placeholder="Teléfono de contacto"
						required
					/>
				</div>
				<div class="contacto-formulario-grupo">
					<textarea
						placeholder="¿Cómo podemos ayudarte?"
						rows="2"
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
			onSubmit() {
				alert(
					"Ya tenemos en nuestro sistemas tus datos, un asesor se comunicará contigo cuanto antes."
				);
			},
		},
	};
</script>

<style scoped>
	.contacto {
		padding: 4rem 2rem;
		text-align: center;
	}
	.contacto-titulo {
		margin-bottom: 2rem;
	}
	.contacto-elementos {
		display: flex;
		align-items: flex-start;
		max-width: 100%;
	}
	.contacto-texto {
		margin: 0 2rem 0 0;
		text-align: left;
		flex: 1;
	}
	.contacto-formulario {
		flex: 1;
	}
	.contacto-formulario button {
		width: 100%;
	}
	.contacto-formulario-grupo {
		min-height: 100%;
		margin-bottom: 1rem;
	}
	.contacto-formulario-grupo input {
		width: 100%;
		height: 42px;
		padding: 1rem;
		border: 1px solid #ccc;
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}
	.contacto-formulario-grupo input:focus {
		background-color: lightyellow;
	}
	.contacto-formulario-grupo textarea {
		width: 100%;
		padding: 1rem;
		border: 1px solid #ccc;
		font-family: Avenir, Helvetica, Arial, sans-serif;
		resize: none;
	}
	.contacto-formulario-grupo textarea:focus {
		background-color: lightyellow;
	}
</style>
