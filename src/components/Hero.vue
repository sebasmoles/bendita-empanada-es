<template>
	<section class="hero">
		<swiper :pagination="{ clickable: true }" :slides-per-view="1">
			<swiper-slide>
				<img
					src="../assets/empanada-hero.jpeg"
					alt="Empanadas"
					class="imagen-hero"
				/>
			</swiper-slide>
			<swiper-slide>
				<img
					src="../assets/empanada-hero-dos.jpeg"
					alt="Empanadas"
					class="imagen-hero"
				/>
			</swiper-slide>
			<swiper-slide>
				<img
					src="../assets/empanada-hero-tres.jpeg"
					alt="Empanadas"
					class="imagen-hero"
				/>
			</swiper-slide>
		</swiper>
	</section>
</template>

<script>
	// import Swiper core and required modules
	import SwiperCore, { Pagination } from "swiper";

	// Import Swiper Vue.js components
	import { Swiper } from "swiper/vue/swiper";
	import { SwiperSlide } from "swiper/vue/swiper-slide";

	// Import Swiper styles
	import "swiper/swiper.min.css";
	import "swiper/modules/pagination/pagination.min.css";
	SwiperCore.use([Pagination]);

	export default {
		name: "Hero",
		components: {
			Swiper,
			SwiperSlide,
		},
	};
</script>

<style>
	.imagen-hero {
		width: 100%;
		height: 50vh;
		object-fit: cover;
		-webkit-filter: brightness(20%);
		filter: brightness(60%);
	}
	.swiper-pagination-bullet {
		width: 20px;
		height: 20px;
		display: inline-block;
		border-radius: 50%;
		background: white;
		opacity: 0.5;
	}
	.swiper-pagination-bullet-active {
		opacity: 1;
		background: white;
	}

	@media only screen and (max-width: 640px) {
		.swiper-pagination-bullet {
			width: 16px;
			height: 16px;
		}
	} ;
</style>
