<template>
    <div>
        <div class="news__pagination">
                <button class="date_btn pagination_padding" v-for="number in numbering" :key="number.id" >
                    <p class="date_btn_img date_text pagination_center ">{{number.number }}</p>
                </button>                
                <button class="date_btn">
                    <img class="date_btn_img" src="../assets/img/arrow.svg">
                    
                </button>  
            </div>
    </div>
</template>

<script>
 
export default {
   
    name: 'PaginationComponent',

    data() {
        return {
            numbering:[{
                id:1,
                number:'01'},
                {
                id:2,
                number:'02'},
                {
                id:3,
                number:'03'},
                
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
.news__pagination {
  margin-top: 51px;
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 200px;
}
 .pagination_center {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>