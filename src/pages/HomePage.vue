<template>
    <div>
        <HeaderComponent/>
        <MainBannerComponent/>
        <CarouselComponent/>
        <DataComponent/>
        <ShortArticlesComponent/>
        <footerComponent/>
    </div>
</template>

<script>
import CarouselComponent from '@/components/CarouselComponent.vue';
import ShortArticlesComponent from '@/components/ShortArticlesComponent.vue';
import MainBannerComponent from '@/components/MainBannerComponent.vue';
import DataComponent from '@/components/DataComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { CarouselComponent, ShortArticlesComponent,DataComponent,MainBannerComponent,HeaderComponent,FooterComponent },
    name: 'HomePage',

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