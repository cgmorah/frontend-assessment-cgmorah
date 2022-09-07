<template>
    <div class="ht-tab-wrap">
        <b-tabs class="ht-tab-menu wow move-up">
            <b-tab no-body v-for="(section,id) in sections" :key="id" :title="section.title" :active="id === 0">
                <!-- tab content -->
                <div class="card-body" v-html="section.content"></div>     
            </b-tab>
        </b-tabs>
    </div>
</template>

<script>
    import sectionsData from "../assets/data/data.json";
    export default {
        data() {
            return {
            sections: sectionsData,
            };
        },
        name: 'TabOne',
    };
</script>