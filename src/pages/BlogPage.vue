<template>
  <div>
    <HeaderComponent />
    <BannerComponent title="Our Blog" text="Home / Blog" />
    <PostComponent />
    <ArticlesComponent />
    <PaginationComponent />
    <FooterComponent />
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import BannerComponent from "@/components/BannerComponent.vue";
import PostComponent from "@/components/PostComponent.vue";
import ArticlesComponent from "@/components/ArticlesComponent.vue";
import PaginationComponent from "@/components/PaginationComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
export default {
  name: "BlogPage",
  props: {
    title: String,
    text: String,
    src:String
  },
  components: {
    HeaderComponent,
    FooterComponent,
    BannerComponent,
    PostComponent,
    ArticlesComponent,
    PaginationComponent,
  },
  data() {
    return {
     
    };
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
</style>