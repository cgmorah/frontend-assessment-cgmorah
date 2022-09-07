<template>
    <div class="hero-software hero-swiper-btn" id="home">
        <div class="container_f1">
            <div class="swiper-wrapper">
                <swiper :options="swiperOption">
                    <div class="swiper-slide bg-cover slider-1">
                        <div class="hero-item">
                            <div class="hero-content text-center">
                                <h1 class="h1 hero-content-title section-space--ptb_30">Hello Developer!</h1>
                                <h4 class="hero-content-subtitle">Lorent input dolor sit amet, consectetur adipiscing elit</h4>                                
                            </div>
                        </div>
                    </div>
                    <div class="swiper-slide bg-cover slider-2">
                        <div class="hero-item">
                            <div class="hero-content text-center">
                                <h1 class="h1 hero-content-title section-space--ptb_30">Nice Work!</h1>
                                <h4 class="hero-content-subtitle">Lorem Ipsum passages, and more recently with desktop</h4>  
                            </div>
                        </div>
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                swiperOption: {
                    speed: 1500,
                    loop: true,
                    effect: 'fade',
                    autoplay: false,
                    spaceBetween : 30,
                    navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev'
                    },
                }
            };
        }
    };
</script>

<style lang="scss" scoped> 
    @import '../../assets/scss/variabls.scss';
    .bg-cover{
        &::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: .4;
                background-color: #000000;
            }
    }
    .hero-item {
        height: 650px;
        display: flex;
        align-items: center;
        justify-content: center;
        // responsive
        @media #{$desktop-device, $tablet-device}{
            height: 600px;
        }
        @media #{$large-mobile}{
            height: 450px;
        }
        @media #{$extra-small-mobile}{
            height: 380px;
        }
    }
    .hero-content {
        width: 1200px;
        z-index: 1;
        &-subtitle {
            color: $white;
            font-weight: 400;
            letter-spacing: 4px;
            padding-bottom: 20px;  
            // responsive
            @media #{$large-mobile}{
                font-size: 30px;
            }
            @media #{$small-mobile}{
                font-size: 20px;
            }          
        }
        &-title {
            color: $white;
            font-size: 80px;
            margin-bottom: 0;
            // responsive
            @media #{$large-mobile}{
                font-size: 72px;
            }
            @media #{$small-mobile}{
                font-size: 68px;
            }
        }
        .sub-heading {
            color: $white;
            font-size: 16px;
            padding-top: 40px;
        }
    }
    .slider-1 {
        background-image: url('http://via.placeholder.com/1920x650');
        // responsive
        @media #{$large-mobile}{
            background-image: url('http://via.placeholder.com/600x600');
        }
    }
    .slider-2 {
        background-image: url('http://via.placeholder.com/1920x650');
        // responsive
        @media #{$large-mobile}{
            background-image: url('http://via.placeholder.com/600x600');
        }
    }
</style>

