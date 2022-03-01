<template>
	<header>
		<h1 class="logo" @click="this.$router.push('/')">Bendita Empanada</h1>
		<div class="header-50">
			<div class="header-info">
				<span>Calle 21 # 17-50, Bucaramanga, Colombia</span>
				<span>Teléfono: (+57) 319-552-0759</span>
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
					<router-link to="/" @click="() => (isHidden = false)">
						Home
					</router-link>
					<router-link
						to="/empresa"
						@click="() => (isHidden = false)"
					>
						Bendita Empresa
					</router-link>
					<router-link
						to="/productos"
						@click="() => (isHidden = false)"
					>
						Bendita Empanada
					</router-link>
					<router-link
						:to="{ path: '/', hash: '#contacto' }"
						@click="() => (isHidden = false)"
					>
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
		align-items: center;
		color: white;
		background-color: black;
		padding: 1rem 2rem;
		position: sticky;
		top: 0;
		z-index: 2;
	}
	.header-50 {
		display: flex;
		align-items: center;
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
	}
	.fa-solid:hover {
		color: gray;
		cursor: pointer;
	}
	.dropdown-links {
		margin-top: 1.4rem;
		padding: 1rem 2rem;
		position: absolute;
		right: 0%;
		background-color: white;
		box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.6);
		z-index: 1;
	}
	.dropdown-links a:not(:last-child) {
		margin-right: 2rem;
	}

	/* Media queries and responsive design */
	@media only screen and (max-width: 1024px) {
		.dropdown-links {
			margin-top: 1.2rem;
		}
		.header-info span {
			font-size: 0.8rem;
		}
	}

	@media only screen and (max-width: 768px) {
		.dropdown-links {
			margin-top: 1.2rem;
		}
	}

	@media only screen and (max-width: 767px) {
		.logo {
			font-size: 1.5rem;
		}
		.header-info span {
			font-size: 0.7rem;
		}
		.dropdown-links {
			margin-top: 1rem;
		}
		.fa-solid {
			font-size: 2rem;
		}
	} ;
</style>
