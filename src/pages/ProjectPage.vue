<template>
    <div>
        <HeaderComponent/>
        <BannerComponent
        title="Our Project"
        text="Home / Project"/>
        <ProjectComponent/>
        <FooterComponent/>
    </div>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';
import BannerComponent from '@/components/BannerComponent.vue';

export default {
    name: 'ProjectPage',
    props: {
    title: String,
    text: String,
    src:String
  },
components:{HeaderComponent,ProjectComponent, FooterComponent,BannerComponent},
    data() {
        return {

            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>

</style>