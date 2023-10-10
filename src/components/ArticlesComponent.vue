<template>
  <main class="news">
    <article id="news" class="news__news center">
      <div class="news__info news_title">
        <h2 class="news__info_title big_title">Articles & News</h2>
      </div>
      <div class="news__info_content">
        <section
          class="info__content_item"
          v-for="card in cards"
          :key="card.id"
        >
          <img class="info__content_picture" :src="card.src" />

          <button class="info_picture_btn date_text">
            {{ card.buttonText }}
          </button>
          <h3 class="info__content_title little_title">{{ card.title }}</h3>
          <div class="info__content_date">
            <p class="date_text">
              {{ card.date }}
            </p>
            <button class="date_btn">
              <img class="date_btn_img" src="../assets/img/arrow.svg" />
            </button>
          </div>
        </section>
      </div>
    </article>
  </main>
</template>
   
   <script>
export default {
  name: "ArticlesComponent",
  data() {
    return {
      cards: [
        {
          id: 1,
          src: require("@/assets/img/blog1.png"),
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022 ",
          buttonText: "Kitchan Design",
        },
        {
          id: 2,
          src: require("@/assets/img/blog2.png"),
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          buttonText: "Living Design",
        },
        {
          id: 3,
          src: require("@/assets/img/blog3.png"),
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
          buttonText: "Interior Design",
        },
        {
          id: 4,
          src: require("@/assets/img/blog4.png"),
          title: "Let’s Get Solution For Building Construction Work",
          date: "26 December,2022 ",
          buttonText: "Kitchan Design",
        },
        {
          id: 5,
          src: require("@/assets/img/blog5.png"),
          title: "Low Cost Latest Invented Interior Designing Ideas.",
          date: "22 December,2022 ",
          buttonText: "Living Design",
        },
        {
          id: 6,
          src: require("@/assets/img/blog6.png"),
          title: "Best For Any Office & Business Interior Solution",
          date: "25 December,2022 ",
          buttonText: "Interior Design",
        },
      ],
    };
  },
};
</script>
   
   
   <style scoped >
@import "../style/_variables.scss";
.news__info {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.news__info_text {
  max-width: 737px;
  margin-top: 12px;
}
.news__info_content {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 30px;
  gap: 30px;
}

.info__content_picture {
  min-height: 300px;
  max-width: 340px;
  border-radius: 62px 62px 0 0;
  position: relative;
}
.info__content_item {
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 21px;
  display: block;
  justify-content: center;
  align-items: flex-start;
  max-width: 382px;
}
.info__content_title {
  display: flex;
  justify-content: center;
  max-width: 340px;
  margin-top: 21px;
}
.info__content_date {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
}

.info_picture_btn {
  position: absolute;
  margin-top: 250px;
  margin-left: -330px;
  border-radius: 8px 8px 8px 0px;
  background: #fff;
  padding: 4px 5px 8px 11px;
  border: 0;
}

.info__content_date {
  max-width: 340px;
}

.news {
  margin-top: 50px;
}

.news__news {
  margin-top: 150px;
}
.news .news_title {
  align-items: start;
}
</style>