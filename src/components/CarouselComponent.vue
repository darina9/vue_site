<template>
    <div>
        <article class="main__carousel center">
            <div class="carousel__info">
                <h2 class="carousel__info_title big_title">
                    Follow Our Projects
                </h2>
                <p class="carousel__info_text text">It is a long established fact that a reader will be distracted by the of readable content of page lookings at its layouts points.</p>
            </div>
            <div class="carousel__content">
                <section class="content__item" v-for="item in items" :key="item.id">
                    <img class="content__item_img "  :src="item.src" >
                    <div class="content__item_info">
                        <div class="item__info_text">
                            <h4 class="info__text_title little_title">{{item.title}}</h4>
                            <p class="info__text_subtitle text">{{item.text}}>
                                
                            </p>
                        </div>
                        <button class="item__info_btn"> <img class="info_btn_img" src="../assets/img/arrow.svg"></button> </div>
                </section>
               
            </div>
        </article>

    </div>
</template>

<script>

export default {
    name: 'CarouselComponent',

    data() {
        return {
            items: [
        {
          id: 1,
          src: require('@/assets/img/kitchan1.png'),
          title: "Modern Kitchan",          
          text: "Decor / Artchitecture",
        },
        {
          id: 2,
          src: require('@/assets/img/kitchan2.png'),
          title: "Modern Kitchan",          
          text: "Decor / Artchitecture",
        },
        {
          id: 3,
          src: require('@/assets/img/kitchan3.png'),
          title: "Modern Kitchan",          
          text: "Decor / Artchitecture",
        },
        {
          id: 4,
          src: require('@/assets/img/kitchan4.png'),
          title: "Modern Kitchan",          
          text: "Decor / Artchitecture",
        }, 
    ]}
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
@import '../style/_variables.scss';
.main__carousel {
  margin-top: 70px;
}
 .carousel__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
 .carousel__info_text {
  max-width: 737px;
  margin-top: 8px;
}
 .carousel__content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 104px;
  margin-top: 93px;
}
 .content__item_info {
  margin-top: 24px;
  display: flex;
  gap: 260px;
}
 .item__info_btn {
  border-radius: 180px;
  border: 0;
  width: 70px;
  height: 70px;
  flex-shrink: 0;
}

</style>