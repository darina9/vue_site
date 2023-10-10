<template>
   <header class="header center">
        <div class="header__left">
            <img class="logo" src="../assets/img/Logo.svg">       
        <h3 class="logo_brend">Interno</h3>
        </div>
        <nav class="header__right">          
            <router-link class="header__right_item" to="/">Home</router-link>
            <router-link class="header__right_item" to="/Project">Project</router-link>
            <router-link class="header__right_item" to="/Blog">Blog</router-link>
        </nav>
    </header>   


  </template>
  
  <script>
  export default {
    name: 'HeaderComponent',
    props: {
      
    }
  }
  </script>
  
  
  <style scoped >
  @import '../style/_variables.scss';
 .header {
  margin-top: 51px;
  display: flex;
  align-items: center;
}
.header__left {
  display: flex;
  align-items: center;
}
.header__right {
  display: flex;
  gap: 50px;
  padding-left: 780px;
}
.header__right_list {
  display: flex;
  gap: 50px;
}
.header__right_item {
  color: #292F36;
  text-align: center;
  font-family: Jost;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}

.logo {
  width: 33.998px;
  height: 34px;
  margin-right: 5px;
}
.logo_brend {
  color: #292F36;
  font-family: DM Serif Display;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
}
  </style>