<template>
    <div>
        <article class="news__post center">
            <h1 class="news__post_title big_title">
                Latest Post
            </h1>
            <div class="news__post_content">
                <img class="post__content_img" src="../assets/img/post.png">
                <div class="post__content_info">
                    <h2 class="post__content_title little_title">
                        Low Cost Latest Invented Interior Designing Ideas
                    </h2>
                    <p class="post__content_text text">
                        Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.</p>
                        <p class="post__content_text text" > Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                    </p>
                    <div class="post__content_date">
                        <p class="date_text">26 December,2022 </p>
                        <button class="date_btn">
                            <img class="date_btn_img" src="../assets/img/arrow.svg">
                        </button> </div>
                </div>
                </div></article>
    </div>
</template>

<script>
export default {
    name: 'PostComponent',

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
.news__post {
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 27px;
}
.news__post_content {
  display: flex;
  border-radius: 62px;
  border: 1px solid #E7E7E7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 22px;
}
.post__content_img {
  border-radius: 37px;
}
 .post__content_info {
  padding: 50px;
  display: flex;
  flex-direction: column;
  gap: 25px;
}
 .post__content_date {
  display: flex;
  gap: 215px;
  margin-top: 40px;
}
 .post__content_text {
  text-align: start;
}
</style>