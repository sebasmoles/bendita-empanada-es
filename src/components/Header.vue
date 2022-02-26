<template>
	<header>
		<h1 class="logo" @click="this.$router.push('/')">Logo</h1>
		<div class="header-50">
			<div class="header-info">
				<span>Calle 21 # 17-50 Bucaramanga, Colombia</span>
				<span>Tel: (+57) 319-552-0759</span>
			</div>
			<nav>
				<i
					class="fa-solid fa-bars"
					v-show="!isHidden"
					@click="toggleBurgerMenu"
				></i>
				<i
					class="fa-solid fa-x"
					v-show="isHidden"
					@click="toggleBurgerMenu"
				></i>
				<div class="dropdown-links" v-show="isHidden">
					<router-link to="/">Home</router-link>
					<router-link to="/empresa">Bendita Empresa</router-link>
					<router-link to="/productos">Bendita Empanada</router-link>
					<router-link :to="{ path: '/', hash: '#contacto' }">
						Contacto
					</router-link>
				</div>
			</nav>
		</div>
	</header>
</template>

<script>
	export default {
		name: "Header",
		data() {
			return {
				isHidden: false,
			};
		},
		methods: {
			toggleBurgerMenu() {
				this.isHidden = !this.isHidden;
			},
		},
	};
</script>

<style scoped>
	header {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		color: white;
		background-color: black;
		padding: 1rem;
		position: sticky;
		top: 0;
	}
	.header-50 {
		display: flex;
	}
	.header-info {
		display: flex;
		flex-direction: column;
		margin-right: 2rem;
		font-weight: bold;
	}
	.logo:hover {
		color: gray;
		cursor: pointer;
	}
	.fa-solid {
		color: white;
		font-size: 2.5rem;
		transition: 0.3s;
	}
	.fa-solid:hover {
		color: gray;
		cursor: pointer;
	}
	.dropdown-links {
		margin-top: 1rem;
		padding: 1rem;
		position: absolute;
		right: 0%;
		background-color: white;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
		z-index: 1;
	}
	.dropdown-links a:not(:last-child) {
		margin-right: 2rem;
	}
</style>
