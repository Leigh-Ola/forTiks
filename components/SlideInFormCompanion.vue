<template>
      <!-- :class="{'right-pos' : self == 'login', 'left-pos -top-full' : self != 'login', 'in': mode == self  }" -->
    <div
      v-if="self == 'register'"
      :class="{'in': mode == self  }"
      class="form-slider-info relative lg:absolute h-36 lg:h-full w-full lg:w-1/2 bg-theme-green flex flex-col items-center justify-center left-pos -top-full"
    >
      <b class="fun-text text-white text-xl max-w-sm text-center">
        ALREADY HAVE AN ACCOUNT?
      </b>
      <button
          @click.stop="clicked"
        class="alt-button text-xs border-2 border-white border-solid rounded-full w-36 h-9 text-theme-green active:text-white bg-white active:bg-transparent mt-4 flex items-center justify-center"
        >
        LOGIN
        </button
      >
    </div>
    <div
      v-else-if="self == 'login'"
      :class="{'in': mode == self  }"
      class="form-slider-info relative lg:absolute h-36 lg:h-full w-full lg:w-1/2 bgx-theme-orange bg-gradient-to-br from-theme-green to-theme-blue flex flex-col items-center justify-center right-pos"
    >
      <b class="fun-text text-white text-xl">
        DON'T HAVE AN ACCOUNT?
      </b>
      <button
          @click.stop="clicked"
        class="alt-button text-xs border-2 border-white border-solid rounded-full w-36 h-9 text-theme-green active:text-white bg-white active:bg-transparent mt-4 flex items-center justify-center"
        >
        REGISTER
        </button
      >
    </div>
    <div
      v-else-if="self == 'forgot'"
      :class="{'in': mode == self  }"
      class="form-slider-info relative lg:absolute h-36 lg:h-full w-full lg:w-1/2 bgx-theme-orange bg-gradient-to-br from-theme-green to-theme-blue flex flex-col items-center justify-center right-pos -top-full"
    >
      <b class="fun-text text-white text-xl max-w-sm text-center">
        ALREADY HAVE AN ACCOUNT?
      </b>
      <button
          @click.stop="clicked"
        class="alt-button text-xs border-2 border-white border-solid rounded-full w-36 h-9 text-theme-green active:text-white bg-white active:bg-transparent mt-4 flex items-center justify-center"
        >
        LOGIN
        </button
      >
    </div>
</template>

<style scoped>
button.alt-button:active {
  color: white;
  background: transparent;
}
.form-slider-info{
    transition: all 0.5s ease-in-out;
}
.form-slider-info.right-pos{
    transform: translateX(100%);
}
.form-slider-info.left-pos{
    transform: translateX(-100%);
}
.form-slider-info.right-pos.in{
    transform: translateX(0%);
}
.form-slider-info.left-pos.in{
  transform: translateX(0%);
}

.form-slider-info.right-pos{
  right: 0px;
  left: auto;
}
.form-slider-info.left-pos{
  left: 0px; right: auto;
}
</style>

<script>
export default {
  props: ['mode','self'],
  data() {
    return {
        position: "in",
    };
  },
  methods: {
    clicked(){
        // this.position = 'out';
        let page = this.self == 'login'? 'register' : 'login';
        this.$store.commit('changeJoinPageMode', page);
    }
  },
  watch:{
    mode(mode){
        // console.log({modeInComp: mode});
        if(mode != this.self){
            this.position = 'out';
        }else{
            this.position = 'in';
        }
    },
  }
}
</script>
