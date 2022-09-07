<template>
    <div class="main-container">

        <router-view></router-view>

        <!-- Navbar section -->
		<HeaderDeveloper />

        <!-- hero section -->
		<HeroHelloDeveloper />

        <!-- accordion/tab section start -->
        <div class="accordion-wrapper section-space--pb_90">
            <div class="container">
                <div class="row ">
                    <div class="col-lg-12">
                        <div class="faq-wrapper section-space--pt_90">

                            <!-- Mobile -->
                            <div v-if="this.isMobile()" class="section-elements-title mb-30">
                                <h4 class="section-space--mb_50">📲 Mobile</h4>
                                <!-- accordion component -->
                                <Accordion />
                            </div>

                            <!-- Desktop -->
                            <div v-else class="section-elements-title mb-30">
                                <h4 class="section-space--mb_50">🖥️ Desktop</h4>
                                <!-- accordion component -->
                                <TabOne />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- accordion/tab section end -->

        <!-- footer section -->
        <FooterMain class="border-top" />

    </div>
</template>

<script>
    import HeaderDeveloper from '@/components/HeaderDeveloper'
	import HeroHelloDeveloper from "@/components/sections/HeroHelloDeveloper";
    import Accordion from '@/components/Accordion'
    import TabOne from '@/components/TabOne'
    import FooterMain from '@/components/FooterMain'

    export default {
        name: 'ElementAccordion',
        components: {
            HeaderDeveloper,
            HeroHelloDeveloper,
            Accordion,
            TabOne,
            FooterMain
        },
         methods: {
            isMobile() {
                if( screen.width <= 760 ) {
                    return true;
                }
                else {
                    return false;
                }
            },
         },
        metaInfo: {
            title: 'Aeroland - Element Accordion',
            htmlAttrs: {
                lang: 'en',
                amp: true
            }
        }
    }
</script>

