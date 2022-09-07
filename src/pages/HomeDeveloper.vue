<template>
	<div class="main-container">

		<!-- Navbar section -->
		<HeaderDeveloper />

		<!-- hero section -->
		<HeroHelloDeveloper />

		<!-- service section -->
		<HelloDeveloper />

		<!-- footer section -->
        <FooterMain />

	</div>
</template>

<script>
	import HeaderDeveloper from "@/components/HeaderDeveloper";
	import HeroHelloDeveloper from "@/components/sections/HeroHelloDeveloper";
	import HelloDeveloper from "@/components/sections/HelloDeveloper";
	import FooterMain from "@/components/FooterMain";

	export default {
		name: "app",
		components: {
			HeaderDeveloper,
			HeroHelloDeveloper,
			HelloDeveloper,
            FooterMain,
		},

		metaInfo: {
            title: 'Frontend Assessment - Home',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
	};
</script>

<style lang="scss">
	@import '../assets/scss/_variabls.scss';
    @import '../assets/scss/page-section/_front-ass.scss';
</style>

