<template>
  <div class="join-page-wrapper relative overflow-x-hidden overflow-y-hidden w-full h-full bg-white flex max-w-5xl max-h-[700px]">
    <div class="z-10 w-full h-full flex flex-col lg:flex-row absolute left-0 top-0 justify-center" @click.stop="">
      <SlideInForm :mode="mode" self="login"/>
      <SlideInFormCompanion :mode="mode" self="login"/> 
    </div>
    <div class="z-20 w-full h-full flex flex-col lg:flex-row absolute left-0 top-full justify-center" @click.stop="">
      <SlideInForm :mode="mode" self="register"/>
      <SlideInFormCompanion :mode="mode" self="register"/> 
    </div>
    <div class="z-20 w-full h-full flex flex-col lg:flex-row absolute left-0 top-full justify-center" @click.stop="">
      <SlideInForm :mode="mode" self="forgot"/>
      <SlideInFormCompanion :mode="mode" self="forgot"/> 
    </div>
  </div>
</template>

<style scoped>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
/* .slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.6s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-active{
    transition-delay: 1.4s;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
} */

</style>

<script>
export default {
  name: 'joinPage',
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
      mode = ['login', 'register', 'forgot'].includes(mode)
        ? mode
        : 'login';
      console.log({modeInPage: mode});
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
    tempModeChange(newMode){
      let mode = this.$store.state.joinPageMode;
      mode == 'login'? 'register' : 'login';
      let finalMode = newMode? newMode : mode;
      console.log(`[FROM PAGE] Temporarily going to page '${finalMode}'`);
      this.$store.commit('changeJoinPageMode', finalMode);
    },
  },

//   import a component

}
</script>
