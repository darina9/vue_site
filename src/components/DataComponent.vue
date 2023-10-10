<template>
    <div>
        <article class="main__data  ">
            <ul class="main__data_list">            
            <li class="main__data_item" v-for="data in database" :key="data.id">
                <h1 class="data__item_title">
                    {{data.title}}
                </h1>
                <p class="data__item_text text">
                    {{data.text}}
                </p>
            </li>
        
        </ul>
        </article>

    </div>
</template>

<script>
export default {
    name: 'DataComponent',

    data() {
        return {
            database:[{
            id:1,
            title:12,
            text:'Years Of Experiance'
                        },
                        {
            id:2,
            title:85,
            text:'Success Project'
                        },
                        {
            id:3,
            title:15,
            text:'Active Project'
                        },
                        {
            id:4,
            title:95,
            text:'Happy Customers'
                        },

            ]
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
.main__data {
  margin-top: 100px;
  background-color: #F4F0EC;
  padding: 150px 420px;
}
.main__data_list {
  display: flex;
  gap: 130px;
  justify-content: space-around;
}
.main__data_item {
  text-align: center;
}
 .data__item_title {
  color: #CDA274;
  font-family: DM Serif Display;
  font-size: 85px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  letter-spacing: 1.7px;
}
</style>