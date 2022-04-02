<template>
	<footer class="footer">
		<div class="flex-50 mapa-elementos">
			<GoogleMap
				:center="{ lat: 40.689247, lng: -74.044502 }"
				:zoom="10"
				class="mapa"
			>
				<Marker
					:options="{ position: { lat: 40.689247, lng: -74.044502 } }"
				/>
			</GoogleMap>
			<div class="footer-contacto">
				<span><i class="fa-solid fa-phone"></i>(+57) 319-552-0759</span>
				<span>
					<i class="fa-solid fa-envelope"></i>
					info@empanadas.com
				</span>
			</div>
		</div>
		<div class="flex-50">
			<h3 class="newsletter">Newsletter</h3>
			<form @submit="onSubmit" class="newsletter-form">
				<input
					type="email"
					class="newsletter-input"
					placeholder="Correo electrónico"
					required
				/>
				<button type="submit" class="newsletter-button">
					Registrarse
				</button>
			</form>
			<div class="social-media">
				<a href="https://www.facebook.com/sebasmolesg/" target="_blank">
					<i class="fa-brands fa-facebook-square"></i>
				</a>
				<a href="https://twitter.com/sebasmoles" target="_blank">
					<i class="fa-brands fa-twitter-square"></i>
				</a>
				<a href="https://www.instagram.com/sebasmoles/" target="_blank">
					<i class="fa-brands fa-instagram" id="sm-last-child"></i>
				</a>
			</div>
		</div>
	</footer>
</template>

<script>
	import { GoogleMap, Marker } from "vue3-google-map";
	export default {
		name: "Footer",
		components: {
			GoogleMap,
			Marker,
		},
		methods: {
			onSubmit() {
				alert(
					"Te has registrado en nuestro newsletter, por favor revisa tu correo electrónico."
				);
			},
		},
	};
</script>
