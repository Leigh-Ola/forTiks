<template>
  <footer @click.stop="" id="main-footer" class="mt-auto bg-blue-300 w-full flex flex-col">
    <div class="feedback flex items-center justify-center w-full p-3 text-white bg-theme-green">
        <div class="form-wrapper h-auto md:w-5/12 md:max-w-2xl w-full flex-shrink-0 py-3 md:py-8">
            <FormulateForm
                @submit="validateContactUsForm"
                class="form-container"
                v-model="contactFormValues"
                validation="required"
                validation-behavior="live"
                :form-errors="['']"
            >
                <div class="text-2xl mb-3 font-bold w-full text-left md:hidden block">FEEDBACK/ENQUIRIES</div>
                <div class="input-container-box w-full flex justify-center relative">
                    <FormulateInput 
                        name="email"
                        outer-class="email-container"
                        placeholder="Email address"
                        label="Email Address"
                        error-behavior="value"
                        validation-name="Email address"
                        validation="bail|required|email" 
                    />
                </div>
                <div class="input-container-box w-full flex justify-center relative md:mt-5 mt-1">
                    <FormulateInput
                        type="textarea"
                        v-model="contactMessage"
                        label="Message"
                        rows="10"
                        outer-class="message-container"
                        placeholder="Type your message..."
                        validation="required|max:300,length"
                        validation-name="Message"
                        error-behavior="value"
                        :help="(300 - contactMessage.length < 0)? 'Message limit exceeded.' : `${300 - contactMessage.length} characters left.`"
                    />
                </div>
                <FormulateErrors />
                <FormulateInput 
                    type="submit" name="Submit" element-class="submit-element"
                    outer-class="submit-container"
                />
            </FormulateForm>
        </div>
        <div class="h-full flex-grow hidden md:flex">
            <div class="m-auto flex flex-col">
                <div class="text-3xl mb-3 font-bold">Contact us</div>
                <span>Your satisfaction is our top priority. Contact us today.</span>
            </div>
        </div>
    </div>
    <div class="social flex md:hidden items-center justify-center w-full p-5 bg-theme-orange">
        <a href=""><font-awesome-icon icon="fa-regular fa-envelope" class="icon px-4" /></a>
        <a href=""><font-awesome-icon :icon="['fab', 'twitter']" class="icon px-4" /></a>
        <a href=""><font-awesome-icon :icon="['fab', 'instagram']" class="icon font-bold px-4" /></a>
    </div>
  </footer>
</template>
    
<style>
/* contact us */
/* .formulate-input{
} */
#main-footer .form-container{
    width: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    flex-grow: 1; min-width: 100%;
}
#main-footer .email-container, #main-footer .message-container{
    width: 100%; 
}
#main-footer .formulate-input-label{
    font-size: 0.9em;
    display: none;
}
/* #main-footer .message-container .formulate-input-label{
    margin-top: 20px;
} */
#main-footer .email-container input, #main-footer .message-container textarea{
    width: 100% !important; margin-top: 3px;
    background: rgba(250, 250, 250, 0.3) !important;
    padding: 0px 10px !important; color: white !important;
    height: 40px !important; border: 1px solid white;
    display: flex !important; align-items: center !important;
}
#main-footer .message-container textarea{
    height: 200px !important;
    resize: none; padding: 10px !important;
}
#main-footer .formulate-input-errors,
#main-footer .formulate-form-errors{
    font-size: 0.75em; 
    color: var(--color-orange) !important;
}
#main-footer .formulate-input-help{
    font-size: 0.75em;
}
/* style the placeholder */
#main-footer .input-container-box *::placeholder{
    color: rgba(250, 250, 250, 0.45) !important;
}
#main-footer .submit-container{
    background: white;
    color: var(--color-green); 
    width: 100%; border-radius: 0px;
    border: 1px solid white;
    height: 40px; overflow: hidden;
    box-sizing: border-box; 
    /* margin-top: 30px;  */
}
#main-footer .submit-element button{
    display: flex; align-items: center; justify-content: center;
    background: white; height: 40px;
    color: var(--color-green); font-weight: bold;
    width: 100%; cursor: pointer;
    display: flex; margin: auto; 
    border-radius: 0px; width: 100%;
}
#main-footer .submit-container:active{
    background: transparent;
}
#main-footer .submit-container:active .submit-element button:active{
    color: white; background: transparent;
}
@media screen and (min-width: 768px){
    #main-footer .formulate-input-label{
        display: block;
    }
    #main-footer .formulate-input-label:nth-of-type(2){
        margin-top: 10px;
    }
}
</style>
<style scoped>
/* social icons */

</style>
<style scoped>
@media screen and (max-width: 768px){
}
</style>

<script>
export default {
  props: [],
  data() {
    return {
        contactFormValues: {},
        contactMessage: "",
    };
  },
  watch:{
  },
  methods: {
    validateContactUsForm(data){
        console.log("validateContactUsForm: ", data);
    }
  },
}
</script>
