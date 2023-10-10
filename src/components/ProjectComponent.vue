<template>
  <div>
    <div class="button__container center">
      <button
        class="button__checked"
        :class="{ 'tag-clicked': tag === filterItem }"
        @click="clickTag(tag)"
        v-for="tag in getTags"
        :key="tag.id"
      >
        {{ tag }}
      </button>
    </div>
    <CardComponent :cards="filterCards" />
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

export default {
  name: "ProjectComponent",

  data() {
    return {
      cards: [
        {
          id: 1,
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom1.png"),
        },
        {
          id: 2,
          title: "Minimal Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom2.png"),
        },

        {
          id: 3,
          title: "Classic Minimal Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom3.png"),
        },
        {
          id: 4,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom4.png"),
        },
        {
          id: 5,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom5.png"),
        },
        {
          id: 6,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom6.png"),
        },
        {
          id: 7,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom7.png"),
        },
        {
          id: 8,
          title: "Modern Bedroom",
          text: "Decor / Artchitecture",
          tag: "BedRoom",
          img: require("@/assets/img/bedroom8.png"),
        },
        {
          id: 5,
          title: "Classic Minimal Bathroom",
          text: "Decor / Artchitecture",
          tag: "Bathroom",
          img: require("@/assets/img/Bathroom1.jpg"),
        },
        {
          id: 6,
          title: "Modern Bathroom",
          text: "Decor / Artchitecture",
          tag: "Bathroom",
          img: require("@/assets/img/Bathroom2.jpg"),
        },
        {
          id: 7,
          title: "Minimal Bathroom",
          text: "Decor / Artchitecture",
          tag: "Bathroom",
          img: require("@/assets/img/Bathroom3.jpg"),
        },
        {
          id: 8,
          title: "Minimal Bathroom",
          text: "Decor / Artchitecture",
          tag: "Bathroom",
          img: require("@/assets/img/Bathroom4.jpg"),
        },
        {
          id: 9,
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
          tag: "Kitchen",
          img: require("@/assets/img/blog1.png"),
        },
        {
          id: 10,
          title: "Minimal Kitchen",
          text: "Decor / Artchitecture",
          tag: "Kitchen",
          img: require("@/assets/img/blog2.png"),
        },
        {
          id: 11,
          title: "Classic Minimal Kitchen",
          text: "Decor / Artchitecture",
          tag: "Kitchen",
          img: require("@/assets/img/blog3.png"),
        },
        {
          id: 12,
          title: "Classic Minimal Kitchen",
          text: "Decor / Artchitecture",
          tag: "Kitchen",
          img: require("@/assets/img/blog4.png"),
        },
      ],
      filterItem: "BedRoom",
    };
  },
  components: {
    CardComponent,
  },
  computed: {
    getTags() {
      let tags = [];
      this.cards.forEach((el) => {
        tags.push(el.tag);
      });
      return new Set(tags);
    },
    filterCards() {
      return this.cards.filter((card) => {
        return card.tag.includes(this.filterItem);
      });
    },
  },
  methods: {
    clickTag(tag) {
      this.filterItem = tag;
    },
  },
};
</script>

<style lang="scss" scoped>
.button__checked {
  border: none;
  padding: 26px 66px;
  color: #292f36;
  text-align: center;
  font-family: Jost;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 125%; /* 22.5px */
  letter-spacing: 0.36px;
  border-radius: 18px;
  background: #ffffff;
  &:hover {
    color: #fff;
    background: #cda274;
  }
}
</style>