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
					data-testid="burger-menu"
				></i>
				<i
					class="fa-solid fa-x"
					v-show="isHidden"
					@click="toggleBurgerMenu"
					data-testid="burger-menu-close"
				></i>
				<div
					class="dropdown-links"
					v-show="isHidden"
					data-testid="burger-menu-options"
				>
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
