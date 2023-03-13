<template>
  <div id="app-layout" @click.stop="setDropDown(false)">
    <Header :toggle="dropdown" v-on:toggled="setDropDown"/>
    <Nuxt />
    <Footer />
  </div>
</template>

<style>
/* create a variable called bg-red and give it a value of #00f */
:root {
    /* --bg-red: #00f; */
    --color-black: #211f20;
    --color-gold: #ec8b21;
    --color-orange: #d66425;
    --color-blue: #016d77;
    --color-green: #007577;
}

</style>
<style scoped>
body{
    margin: 0px; padding: 0px; background: white;
    font-size: 100%;
}
#app-layout{
    background: rgba(0, 0, 0, 0.1);
    width: 100%; height: 100vh; position: relative;
    min-width: max-content; min-height: 100%;
    display: flex; flex-direction: column;
}
</style>

<script>
export default {
  data() {
    return {
      dropdown: false,
    };
  },
  methods:{
    setDropDown(val){
      // console.log("setDropDown: ", val);
      this.dropdown = val;
    }
  },
}
</script>
