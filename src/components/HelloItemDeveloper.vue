<template>
    <div class="frontend-assessment-grid">
        <a href="#" class="frontend-assessment-assistance__warap wow move-up" v-for="(item, index) in services" :key="index">
            <div class="frontend-assessment-assistance__box">
                <div class="frontend-assessment-assistance__images">
                    <div class="images-midea">
                        <img :src="item.img" class="img-fluid" alt="thumb">
                    </div>
                </div>
                <div class="frontend-assessment-assistance__content mt-30 text-center">
                    <p>{{ item.desc }}</p>
                    <button class="ht-btn ht-btn-md ht-btn--outline ht-btn--circle">READ MORE</button>
                </div>
            </div>
        </a>
    </div>
</template>

<script>
    export default{
        name: 'HelloItemDeveloper',
        data(){
            return {
                services: [
                    {
                        img: "http://via.placeholder.com/400x300",
                        desc: 'Our technical experts have a flair for developing clean-coded websites based on customers’ needs, global guidelines and trends.'
                    },
                    {
                        img: "http://via.placeholder.com/400x300",
                        desc: 'Our presence on a wide range of social platforms leads to better marketing results, larger customer base & bigger opportunities.'
                    },
                    {
                        img: "http://via.placeholder.com/400x300",
                        desc: 'Studies showed that the choice of appropriate keywords for your sites content, portfolios, posts help increase the site ranking'
                    }
                ]
            }
        }
    };
</script>

<style lang="scss">

</style>