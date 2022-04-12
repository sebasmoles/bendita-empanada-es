<template>
	<section class="not-found">
		<div class="not-found-elements">
			<h1 class="not-found-title">404</h1>
			<h2 class="not-found-msg">
				Ups! Lo sentimos, la página no ha sido encontrada.
			</h2>
			<button @click="this.$router.push('/')">Volver al inicio</button>
		</div>
	</section>
</template>
