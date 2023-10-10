<template>
  <div>
    <article class="news__banner">
      <div class="news__banner_info">
        <h1 class="news__banner_title big_title">
          {{ title }}
        </h1>
        <p class="news__banner_text text">
          <a href="#" class="news__banner_link"> {{ text }}</a>
        </p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
  props: {
    title: String,
    text: String,
  },
  data() {
    return {};
  },

  mounted() {},

  methods: {},
};
</script>

<style lang="scss" scoped>
@import "../style/_variables.scss";
.news__banner {
  background: url("../assets/img/banner.jpg") no-repeat;
  background-position: center center;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  min-height: 350px;
  margin-bottom: 200px;
}
.news__banner_info {
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 37px 37px 0px 0px;
  background: #fff;
}
.news__banner_title {
  padding: 41px 78px 0;
}
.news__banner_text {
  padding: 0 78px 41px;
}
</style>