<template>
	<Bienvenida />
	<Principales />
	<Contacto />
</template>

<script>
	import Bienvenida from "../components/home-ui/Bienvenida.vue";
	import Principales from "../components/home-ui/Principales.vue";
	import Contacto from "../components/home-ui/Contacto.vue";

	export default {
		name: "Home",
		components: {
			Bienvenida,
			Principales,
			Contacto,
		},
	};
</script>
