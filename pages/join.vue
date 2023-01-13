<template>
  <div class="join-page-wrapper relative overflow-x-hidden overflow-y-hidden w-full h-full bg-white flex max-w-5xl max-h-[700px]">
    <div class="z-10 w-full h-full flex flex-col lg:flex-row absolute left-0 top-0 justify-center">
      <SlideInForm :mode="mode" self="login"/>
      <SlideInFormCompanion :mode="mode" self="login"/> 
    </div>
    <div class="z-20 w-full h-full flex flex-col lg:flex-row absolute left-0 top-full justify-center">
      <SlideInForm :mode="mode" self="register"/>
      <SlideInFormCompanion :mode="mode" self="register"/> 
    </div>
  </div>
</template>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-active{
    transition-delay: 1.4s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  /* transform: translateX(20px); */
  opacity: 0;
}

</style>

<script>
export default {
  name: 'IndexPage',
  layout: 'auth',
  middleware({ store, route }) {
      let mode = route.query.mode;
      if(mode){
        store.commit('changeJoinPageMode', mode);
      }
    },
  data() {
    return {};
  },
  computed: {
    mode() {
      let mode = this.$store.state.joinPageMode;
      mode = ['login', 'register', 'forgotpassword', 'verify'].includes(mode)
        ? mode
        : 'login';
      return mode
    },
  },
  mounted(){
    setTimeout(() => {
      this.$nextTick(()=>{
      })
    }, 1000);
  },
  methods: {
    tempModeChange(){
      let mode = this.$store.state.joinPageMode;
      this.$store.commit('changeJoinPageMode', mode == 'login'? 'register' : 'login');
    },
  },

//   import a component

}
</script>
