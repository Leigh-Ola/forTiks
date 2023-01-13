<template>
    <div
      v-if="self == 'register'"
      :class="{'in': mode == self  }"
      class="form-slider-main relative lg:absolute h-full w-full lg:w-1/2 bg-black text-theme-green flex flex-col items-center justify-center right-pos -top-full"
    >
        <div class="font-bold mx-auto">
            REGISTER
        </div>
        <FormulateForm
            @submit="register"
            class="form-container"
            v-model="formValues"
            validation="required|email"
            validation-behavior="live"
            :form-errors="['']"
        >
        <div class="input-container-box w-full flex justify-center relative">
            <!-- <font-awesome-icon icon="fa-solid fa-envelope" class="icon" /> -->
            <FormulateInput type="email" 
                name="email" 
                outer-class="email-container"
                placeholder="Email"
                validation="bail|required|email" 
            />
        </div>
        <div class="input-container-box w-full flex justify-center relative">
            <div class="flex absolute h-10 right-5 top-0 justify-center items-center">
                <font-awesome-icon @click="showingPassword = !showingPassword" :icon="['fa-solid', showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
            </div>
            <FormulateInput
                :type="showingPassword? 'text' : 'password'"
                name="password"
                outer-class="password-container" 
                placeholder="Password"
                error-behavior="value"
                validation="bail|required|min:8,length|matches:/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/"
                :validation-messages="{
                    matches: 'Your password must contain at least 1 number and 1 letter'
                }"
            />
        </div>
        <div class="input-container-box w-full flex justify-center relative">
            <div class="flex absolute h-10 right-5 top-0 justify-center items-center">
                <font-awesome-icon @click="showingPassword = !showingPassword" :icon="['fa-solid', showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
            </div>
            <FormulateInput
                :type="showingPassword? 'text' : 'password'"
                name="password_confirm"
                outer-class="confirm-container" 
                validation="required|confirm"
                placeholder="Confirm Password"
                validation-name="Password confirmation"
            />
        </div>
        <FormulateErrors />
        <FormulateInput 
            type="submit" name="Login" element-class="submit-element"
            outer-class="submit-container"
        />
        <a href="" class="text-theme-green w-full text-sm justify-center h-10 flex items-center">Forgot Password?</a>
        </FormulateForm>
    </div>
    <div
      v-else-if="self == 'login'"
      :class="{'left-pos' : self == 'login', 'right-pos -top-full' : self != 'login', 'in': mode == self  }"
      class="form-slider-main relative lg:absolute bg-black text-theme-green h-full w-full lg:w-1/2 flex flex-col items-center left-pos py-10 px-0 m-0"
    >
        <div class="font-bold mx-auto">
            LOGIN
        </div>
        <FormulateForm
            @submit="login"
            class="form-container"
            v-model="formValues"
            validation="required|email"
            validation-behavior="live"
            :form-errors="['']"
        >
        <div class="input-container-box w-full flex justify-center relative">
            <!-- <font-awesome-icon icon="fa-solid fa-envelope" class="icon" /> -->
            <FormulateInput type="email" 
                name="email"
                outer-class="email-container"
                placeholder="Email"
                validation="bail|required|email" 
            />
        </div>
        <div class="input-container-box w-full flex justify-center relative">
            <div class="flex absolute h-10 right-5 top-0 justify-center items-center">
                <font-awesome-icon @click="showingPassword = !showingPassword" :icon="['fa-solid', showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
            </div>
            <FormulateInput
                :type="showingPassword? 'text' : 'password'"
                name="pwd"
                outer-class="password-container" 
                placeholder="Password"
                error-behavior="value"
                validation="bail|required|min:8,length|matches:/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/"
                :validation-messages="{
                    matches: 'Your password must contain at least 1 number and 1 letter'
                }"
            />
        </div>
        <FormulateErrors />
        <FormulateInput 
            type="submit" name="Login" element-class="submit-element"
            outer-class="submit-container"
        />
        <a href="" class="text-theme-green w-full text-sm justify-center h-10 flex items-center">Forgot Password?</a>
        </FormulateForm>
    </div>
</template>

<style>
/* login */
/* .formulate-input{
} */
.form-container{
    width: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    flex-grow: 1;
}
.email-container, .password-container, .confirm-container,.form-container{
    width: 90%; 
}
.input-container-box:not(:first-of-type){
    margin-top: 10px;
}
.password-container input, .email-container input,
.confirm-container input{
    /* background: rgba(250, 250, 250, 0.8); */
    width: 100%; 
    padding: 0px 10px;
    height: 40px; color: #000;
    display: flex; align-items: center;
    border-radius: 5px;
}
.formulate-input-errors{
    font-size: 0.75em;
    padding-left: 5px;
    color: var(--color-orange);
}
.submit-container{
    background: var(--color-green); 
    width: 250px; border-radius: 50px;
    height: 40px; overflow: hidden;
    box-sizing: border-box; 
    margin-top: 30px; 
}
.submit-container *{
    background: var(--color-green);
}
.submit-element button{
    display: flex; align-items: center; justify-content: center;
    background: var(--color-green); color: white;
    width: 100%; height: 40px; cursor: pointer;
    display: flex; margin: auto;
    /* background: red; */
}
.submit-container:active .submit-element button,
.submit-container:active *{
    color: var(--color-green); background: black;
}
.submit-container:active .submit-element button{
    border: 1px solid var(--color-green);
}

/* *, * > *, * > button, * > input{
    border-radius: 0px !important;
} */
</style>

<style scoped>
.form-slider-main{
    transition: all 0.4s ease-in-out;
}
.form-slider-main.right-pos{
    transform: translateX(100%);
}
.form-slider-main.left-pos{
    transform: translateX(-100%);
}
.form-slider-main.right-pos.in{
    transform: translateX(0%);
}
.form-slider-main.left-pos.in{
  transform: translateX(0%);
}
.form-slider-main.right-pos{
  right: 0px;
  left: auto;
}
.form-slider-main.left-pos{
  left: 0px; right: auto;
}
/*  */
.input-container-box .icon{
    margin: auto;
    font-size: 0.8em;
    color: var(--color-green);
    color: #666;
}
</style>

<script>
export default {
  props: ['mode','self'],
  data() {
    return {
        position: "in", formValues: {}, hasErrors: true,
        showingPassword: false
    };
  },
  methods: {
    login(data){
        console.log("Submitting Login... %o", data);
    },
    register(data){
        console.log("Submitting Registration... %o", data);
    }
  },
  watch:{
    mode(mode){
    }
  }
}
</script>
