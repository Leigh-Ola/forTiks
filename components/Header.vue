<template>
  <header @click.stop="" class="bg-black text-white overflow-visible relative z-50 flex items-center w-full h-12 flex-shrink-0">
    <a href="/" class="logo h-9 w-9 my-auto ml-3 mr-auto flex-shrink-0 bg-red-900"></a>
    <a href="" class="flex relative z-20 md:hidden h-10 my-auto mx-3 items-center justify-center text-white bg-theme-orange w-36 text-center font-bold">Create a Ticket</a>
    <div :class="{'show': dropdown}" class="dropdown overflow-hidden flex flex-col md:flex-row justify-evenly md:justify-center items-center md:h-9 h-80 md:static absolute z-10 w-40 md:w-max right-0 top-full bg-black md:px-0">
      <!-- <font-awesome-icon @click.stop="dropdown=false" icon="fa-close" class="md:hidden text-lg text-theme-orange mx-3 ml-auto"></font-awesome-icon> -->
      <a href="" class="flex px-3 h-10 w-full md:w-auto items-center justify-center font-bold bg-black hover:text-theme-orange flex-shrink-0">About</a>
      <a href="" class="flex px-3 h-10 w-full md:w-auto items-center justify-center font-bold bg-black hover:text-theme-orange flex-shrink-0">Blog</a>
      <a href="" class="flex px-3 h-10 w-full md:w-auto items-center justify-center font-bold bg-black hover:text-theme-orange flex-shrink-0">Contact</a>
      <a href="" class="flex px-3 h-10 w-full md:w-auto items-center justify-center font-bold bg-black hover:text-theme-orange flex-shrink-0">FAQ</a>
      <div class="space md:block hidden w-12 h-full flex-shrink-0"></div>
      <a href="" class="flex flex-shrink-0 md:h-9 h-10 md:mx-3 items-center justify-center text-white bg-theme-orange hover:text-black w-36 text-center font-bold">Create a Ticket</a>
      <a href="/register" class="flex flex-shrink-0 md:h-9 h-10 box-border md:mx-3 items-center justify-center border border-solid border-theme-orange hover:text-theme-orange md:w-28 w-36 font-bold">Register</a>
    </div>
    <font-awesome-icon @click.stop="dropdown=!dropdown" :icon="dropdown? 'fa-close' : 'fa-bars'" class="md:hidden mx-3 w-4 flex items-center justify-center text-theme-orange relative z-20"></font-awesome-icon>
    <!-- about, blog, contact, faq,,, create a ticket, login -->
  </header>
</template>
    
<style scoped>
.logo{
   background: url('~/assets/img/fortiks.png') no-repeat center center;
   background-size: contain;
}
.dropdown{
  transition: all 0.3s ease;
}

@media screen and (max-width: 768px){
  .dropdown:not(.show){
    height: 0px; 
  }
}
</style>

<script>
export default {
  props: ['toggle'],
  data() {
    return {
      dropdown: false,
    };
  },
  watch:{
    dropdown(val){
      // console.log("dropdown: ", val);
      this.$emit('toggled', val);
    },
    toggle(val){
      // console.log("toggle: ", val);
      this.dropdown = val;
    }
  }
}
</script>
