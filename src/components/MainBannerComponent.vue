<template>
    <div>
        <article class="main__banner container ">
            
            <div class="main__banner_info ">
                <h1 class="banner__info_title">
                    Let Your Home Be Unique
                </h1>

                <p class="banner__info_text text">
                    There are many variations of the passages of lorem Ipsum fromavailable, majority.
                </p>
                <button class="banner__info_btn">
                    Get Started
                    <img class="info__btn_img" src="../assets/img/Vector.svg">
                </button>
             </div>
        </article>
    </div>
</template>

<script>
export default {
    name: 'BannerComponent',

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
@import '../style/_variables.scss';
.container {
  width: 1200px;
  margin: 0 auto;
}

.main__banner {
  margin-top: 70px;
  background: url("../assets/img/Photo.png") center center/cover no-repeat;
  box-sizing: border-box;
  border-radius: 70px;
  max-width: 1200px;
  align-items: center;
}
.main__banner_info {
  padding: 200px 750px 200px 60px;
}
 .banner__info_title {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 65px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  min-width: 434px;
  max-height: 162px;
}
.banner__info_text {
  min-width: 433px;
}
 .banner__info_btn {
  margin-top: 21px;
  padding: 26px 48px;
  border-radius: 18px;
  background: #292F36;
  box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
  color: #FFF;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%;
  letter-spacing: 0.36px;
}
</style>