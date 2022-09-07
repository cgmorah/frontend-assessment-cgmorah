<template>

    <div class="accordion-faq wow move-up">

        <b-card no-body v-for="(section,id) in sections" :key="id">
            <b-card-header header-tag="header">
                <b-button block v-b-toggle="'accordion-' + id" class="faq-title">{{section.title}}</b-button>
            </b-card-header>
            <b-collapse :id="'accordion-'+id" :visible="id === 0" accordion="my-accordion">
                <b-card-body>
                    <b-card-text v-html="section.content"> </b-card-text>
                </b-card-body>
            </b-collapse>
        </b-card>

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
        name: 'Accordion',
    };
</script>