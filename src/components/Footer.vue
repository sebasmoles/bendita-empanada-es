<template>
	<footer class="footer">
		<div class="flex-50 mapa-elementos">
			<GoogleMap
				:center="{ lat: 40.689247, lng: -74.044502 }"
				:zoom="10"
				style="width: 50%; height: 100%"
			>
				<Marker
					:options="{ position: { lat: 40.689247, lng: -74.044502 } }"
				/>
			</GoogleMap>
			<div class="mapa-contacto">
				<span><i class="fa-solid fa-phone"></i>(+57) 319-552-0759</span>
				<span>
					<i class="fa-solid fa-envelope"></i>
					info@empanadas.com
				</span>
			</div>
		</div>
		<div class="flex-50">
			<h3 class="newsletter">Newsletter</h3>
			<form class="newsletter-form">
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
					<i class="fa-brands fa-instagram"></i>
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
	};
</script>

<style scoped>
	.footer {
		padding: 4rem 2rem;
		color: white;
		background-color: black;
		display: flex;
		align-content: flex-start;
		justify-content: space-between;
	}
	.flex-50 {
		flex: 1;
	}
	.mapa-elementos {
		display: flex;
	}
	.mapa-contacto {
		margin-left: 2rem;
	}
	.mapa-contacto span {
		display: block;
		margin-bottom: 1rem;
	}
	.mapa-contacto span i {
		font-size: 2rem;
		margin-right: 1rem;
		vertical-align: bottom;
	}
	.newsletter {
		margin-bottom: 1rem;
	}
	.newsletter-form {
		display: flex;
		align-items: center;
		margin-bottom: 1rem;
	}
	.newsletter-input {
		margin-right: 1rem;
		width: 100%;
		height: 42px;
		padding: 1rem;
		border: 1px solid #ccc;
		font-family: Avenir, Helvetica, Arial, sans-serif;
	}
	.newsletter-input:focus {
		background-color: lightyellow;
	}
	.newsletter-button {
		background-color: gray;
		color: white;
	}
	.social-media a {
		color: white;
	}
	.social-media .fa-brands {
		font-size: 3rem;
		margin-right: 1rem;
		cursor: pointer;
	}
	.social-media .fa-brands:hover {
		color: gray;
	}
</style>
