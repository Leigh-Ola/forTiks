<template>
    <!-- register -->
    <div
      v-if="self == 'register'"
      :class="{'in': mode == self  }"
      class="form-slider-main overflow-hidden relative lg:absolute h-full w-full lg:w-1/2 bg-black text-theme-green flex items-center justify-center right-pos px-0 -top-full"
    >
        <!-- stage 1 -->
        <div :class="[registerData.stage==1? '' : 'to-out']" class="sub-slidable bg-black relative from-right w-full z-10 h-full min-w-full top-0 flex flex-col">
            <div class="font-bold mx-auto mt-8">
                REGISTER
            </div>
            <FormulateForm
                @submit="register"
                class="form-container"
                v-model="registerFormValues"
                validation="required|email"
                validation-behavior="live"
                :form-errors="['']"
            >
            <div class="navbar w-full flex justify-center items-center p-3 mb-8 text-white">
                <div class="line w-4/6 mx-auto rounded-md bg-theme-green bg-opacity-25 h-1 p-0 flex relative justify-between">
                    <div :class="[registerData.stage>=1? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']" class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">1</div>
                    <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                    <div  :class="[registerData.stage>=2? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">2</div>
                    <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                    <div :class="[registerData.stage>=3? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">3</div>
                </div>
            </div>
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
                <div class="flex absolute h-10 right-8 top-0 justify-center items-center">
                    <font-awesome-icon @click="registerData.showingPassword = !registerData.showingPassword" :icon="['fa-solid', registerData.showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
                </div>
                <FormulateInput
                    :type="registerData.showingPassword? 'text' : 'password'"
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
                <div class="flex absolute h-10 right-8 top-0 justify-center items-center">
                    <font-awesome-icon @click="registerData.showingPassword = !registerData.showingPassword" :icon="['fa-solid', registerData.showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
                </div>
                <FormulateInput
                    :type="registerData.showingPassword? 'text' : 'password'"
                    name="password_confirm"
                    outer-class="confirm-container" 
                    validation="bail|required|confirm"
                    placeholder="Confirm Password"
                    validation-name="Password confirmation"
                />
            </div>
            <FormulateErrors />
            <FormulateInput 
                type="submit" name="Proceed" element-class="submit-element"
                outer-class="submit-container"
            />
            </FormulateForm>
        </div>
        <!-- stage 2 -->
        <div :class="[registerData.stage==2? '' : 'to-out']" class="sub-slidable bg-black relative from-right w-full z-10 transition-shadow-x h-full min-w-full top-0 flex flex-col">
            <div class="font-bold mx-auto mt-8">
                Identity Verification
            </div>
            <FormulateForm
                @submit="validateIdentityForReg"
                class="form-container"
                v-model="bankFormValues"
                validation="required"
                validation-behavior="live"
                :form-errors="['']"
            >
            <div class="navbar w-full flex justify-center items-center p-3 mb-8 text-white">
                <div class="line w-4/6 mx-auto rounded-md bg-theme-green bg-opacity-25 h-1 p-0 flex relative justify-between">
                    <div @click.stop="registerData.stage=1"  :class="[registerData.stage>=1? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']" class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">1</div>
                    <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                    <div  :class="[registerData.stage>=2? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">2</div>
                    <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                    <div :class="[registerData.stage>=3? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">3</div>
                </div>
            </div>
            <div class="input-container-box w-full flex justify-center relative">
                <FormulateInput 
                    name="bank"
                    outer-class="bank-container"
                    placeholder="Bank Name"
                    error-behavior="value"
                    validation-name="Bank Name"
                    validation="bail|required|matches:/[A-Za-z\s-]+/" 
                    :validation-messages="{
                        matches: 'Invalid Bank Name'
                    }"
                />
            </div>
            <div class="input-container-box w-full flex justify-center relative">
                <FormulateInput
                    name="fullname"
                    outer-class="fullname-container" 
                    placeholder="Full Name"
                    error-behavior="value"
                    validation="bail|required|min:8,length|matches:/[A-Za-z\s-]+/"
                    validation-name="Full Name"
                />
            </div>
            <div class="input-container-box w-full flex justify-center relative">
                <FormulateInput
                    type="text"
                    name="account_number"
                    outer-class="account-container" 
                    placeholder="Account Number"
                    error-behavior="value"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    validation-name="Account Number"
                    validation="bail|required|min:8,length"
                />
            </div>
            <div class="input-container-box w-full flex justify-center relative">
                <div class="flex absolute h-10 right-6 top-0  justify-center items-center">
                    <font-awesome-icon @click="registerData.showingBVN = !registerData.showingBVN" :icon="['fa-solid', registerData.showingBVN? 'fa-eye-slash' : 'fa-eye']" class="icon" />
                </div>
                <FormulateInput
                    :type="registerData.showingBVN? 'text' : 'password'"
                    name="bvn_number"
                    outer-class="bvn-container" 
                    placeholder="Bank Verification Number"
                    error-behavior="value"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    validation-name="BVN"
                    validation="bail|required|min:8,length"
                />
            </div>
            <FormulateErrors />
            <FormulateInput 
                type="submit" name="Proceed" element-class="submit-element"
                outer-class="submit-container"
            />
            <!-- <a href="" class="text-theme-green w-full text-sm justify-center h-10 flex items-center">Forgot Password?</a> -->
            </FormulateForm>
        </div>
        <!-- stage 3 -->
        <div :class="[registerData.stage==3? '' : 'to-out']" class="sub-slidable bg-black relative from-right w-full z-10 transition-shadow-x h-full min-w-full top-0 flex flex-col">
            <div class="font-bold mx-auto mt-8">
                Email Verification
                <br>
                <center><small>{{registerFormValues.email}}</small></center>
            </div>
            <FormulateForm
                @submit="validateIdentityForReg"
                class="form-container"
                v-model="emailVerificationValues"
                validation="required"
                validation-behavior="live"
                :form-errors="['']"
            >
                <div class="navbar w-full flex justify-center items-center p-3 mb-8 text-white">
                    <div class="line w-4/6 mx-auto rounded-md bg-theme-green bg-opacity-25 h-1 p-0 flex relative justify-between">
                        <div @click.stop="registerData.stage=1" :class="[registerData.stage>=1? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']" class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">1</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div @click.stop="registerData.stage=2"  :class="[registerData.stage>=2? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">2</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div :class="[registerData.stage>=3? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">3</div>
                    </div>
                </div>
                <div class="input-container-box w-full flex justify-center relative">
                    <FormulateInput 
                        name="otp"
                        help="Please check your email address for a one-time verification code"
                        outer-class="otp-container"
                        placeholder="OTP"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        error-behavior="value"
                        validation="bail|required|min:6,length|max:6,length" 
                        :validation-messages="{
                            min: 'OTP must be a 6-digit number',
                            max: 'OTP must be a 6-digit number',
                            required: 'OTP is required'
                        }"
                    />
                </div>
                <FormulateErrors />
                <FormulateInput 
                    type="submit" name="Submit" element-class="submit-element"
                    outer-class="submit-container"
                />
            </FormulateForm>
        </div>
    </div>
    <!-- login -->
    <div
      v-else-if="self == 'login'"
      :class="{'left-pos' : self == 'login', 'right-pos -top-full' : self != 'login', 'in': mode == self  }"
      class="form-slider-main overflow-hidden relative lg:absolute bg-black text-theme-green h-full w-full lg:w-1/2 flex flex-col items-center justify-center left-pos px-0 m-0"
    >
        <div class="font-bold mx-auto mt-8">
            LOGIN
        </div>
        <FormulateForm
            @submit="login"
            class="form-container"
            v-model="loginFormValues"
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
            <div class="flex absolute h-10 right-8 top-0 justify-center items-center">
                <font-awesome-icon @click="forgotData.showingPassword = !forgotData.showingPassword" :icon="['fa-solid', forgotData.showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
            </div>
            <FormulateInput
                :type="forgotData.showingPassword? 'text' : 'password'"
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
        <span @click.prevent.stop="changeMode('forgot')" class="text-theme-green cursor-pointer w-full text-sm justify-center h-10 flex items-center">Forgot Password?</span>
        </FormulateForm>
    </div>
    <!-- forgot -->
    <div
      v-else-if="self == 'forgot'"
      :class="{'left-pos -top-full' : self == 'forgot', 'righ-pos' : self != 'forgot', 'in': mode == self  }"
      class="form-slider-main overflow-hidden relative lg:absolute bg-black text-theme-green h-full w-full lg:w-1/2 flex flex-col items-center justify-center px-0 m-0 left-pos"
    >
        <!-- stage 1 -->
        <div :class="[forgotData.stage==1? '' : 'to-out']" class="sub-slidable bg-black relative from-right w-full z-10 h-full min-w-full top-0 flex flex-col">
            <div class="font-bold mx-auto mt-8">
                FORGOT PASSWORD
            </div>
            <FormulateForm
                @submit="sendOTP"
                class="form-container"
                v-model="forgotFormEmailValues"
                validation="required"
                validation-behavior="live"
                :form-errors="['']"
            >
                <div class="navbar w-full flex justify-center items-center p-3 mb-8 text-white">
                    <div class="line w-4/6 mx-auto rounded-md bg-theme-green bg-opacity-25 h-1 p-0 flex relative justify-between">
                        <div :class="[forgotData.stage>=1? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']" class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">1</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div :class="[forgotData.stage>=2? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">2</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div :class="[forgotData.stage>=3? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">3</div>
                    </div>
                </div>
               <div class="input-container-box w-full flex justify-center relative">
                    <FormulateInput 
                        type="email" 
                        name="email"
                        outer-class="email-container"
                        placeholder="Email"
                        error-behavior="value"
                        label="Enter your email to receive a one-time password"
                        validation="bail|required|email" 
                    />
                </div>
                <FormulateInput 
                    type="submit" name="Proceed" element-class="submit-element"
                    outer-class="submit-container"
                />
            </FormulateForm>
        </div>
        <!-- stage 2 -->
        <div :class="[forgotData.stage==2? '' : 'to-out']" class="sub-slidable bg-black relative from-right w-full z-10 h-full min-w-full top-0 flex flex-col">
            <div class="font-bold mx-auto mt-8">
                FORGOT PASSWORD
                <br>
                <center><small>An OTP has been sent to <code>{{forgotFormEmailValues.email}}</code></small>
                </center>
            </div>
            <FormulateForm
                @submit="validateIdentityForForgot"
                class="form-container"
                v-model="forgotFormOtpValues"
                validation="required"
                validation-behavior="live"
                :form-errors="['']"
            >
                <div class="navbar w-full flex justify-center items-center p-3 mb-8 text-white">
                    <div class="line w-4/6 mx-auto rounded-md bg-theme-green bg-opacity-25 h-1 p-0 flex relative justify-between">
                        <div :class="[forgotData.stage>=1? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']" class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">1</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div :class="[forgotData.stage>=2? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">2</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div :class="[forgotData.stage>=3? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">3</div>
                    </div>
                </div>
                <div class="input-container-box w-full flex justify-center relative">
                    <FormulateInput 
                        name="otp"
                        help="Please check your email address for a one-time verification code"
                        outer-class="otp-container"
                        placeholder="OTP"
                        label="Check your email for a One-Time Password"
                        inputmode="numeric"
                        pattern="[0-9]*"
                        error-behavior="value"
                        validation="bail|required|min:6,length|max:6,length" 
                        :validation-messages="{
                            min: 'OTP must be a 6-digit number',
                            max: 'OTP must be a 6-digit number',
                            required: 'OTP is required'
                        }"
                    />
                </div>
                <FormulateErrors />
                <FormulateInput 
                    type="submit" name="Submit" element-class="submit-element"
                    outer-class="submit-container"
                />
            </FormulateForm>
        </div>
        <!-- stage 3 -->
        <div :class="[forgotData.stage==3? '' : 'to-out']" class="sub-slidable bg-black relative from-right w-full z-10 h-full min-w-full top-0 flex flex-col">
            <div class="font-bold mx-auto mt-8">
                FORGOT PASSWORD
                <br>
                <center><small>{{forgotFormEmailValues.email}}</small>
                </center>
            </div>
            <FormulateForm
                @submit="reset"
                class="form-container"
                v-model="forgotFormPwdValues"
                validation="required"
                validation-behavior="live"
                :form-errors="['']"
            >
                <div class="navbar w-full flex justify-center items-center p-3 mb-8 text-white">
                    <div class="line w-4/6 mx-auto rounded-md bg-theme-green bg-opacity-25 h-1 p-0 flex relative justify-between">
                        <div :class="[forgotData.stage>=1? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']" class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">1</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div :class="[forgotData.stage>=2? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point box-border h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">2</div>
                        <font-awesome-icon icon="fa-angles-right" class="bg-black rounded-full p-1 icon -top-2 relative text-xs" />
                        <div :class="[forgotData.stage>=3? 'bg-theme-green' : 'bg-black border-2 border-solid border-opacity-25 border-theme-green']"  class="cursor-pointer line-point h-5 w-5 rounded-full z-20 relative -top-2 flex justify-center items-center text-xs">3</div>
                    </div>
                </div>
                <div class="input-container-box w-full flex justify-center relative">
                    <div class="flex absolute h-10 right-8 top-0 justify-center items-center">
                        <font-awesome-icon @click="forgotData.showingPassword = !forgotData.showingPassword" :icon="['fa-solid', forgotData.showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
                    </div>
                    <FormulateInput
                        :type="forgotData.showingPassword? 'text' : 'password'"
                        name="old_password"
                        outer-class="password-container" 
                        placeholder="Old Password"
                        error-behavior="value"
                        validation="bail|required|min:8,length|matches:/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/"
                        :validation-messages="{
                            matches: 'Invalid Password',
                            required: 'Old password is required'
                        }"
                    />
                </div>
                <div class="input-container-box w-full flex justify-center relative">
                    <div class="flex absolute h-10 right-8 top-0 justify-center items-center">
                        <font-awesome-icon @click="forgotData.showingPassword = !forgotData.showingPassword" :icon="['fa-solid', forgotData.showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
                    </div>
                    <FormulateInput
                        :type="forgotData.showingPassword? 'text' : 'password'"
                        name="new_password"
                        outer-class="password-container" 
                        placeholder="New Password"
                        error-behavior="value"
                        validation="bail|required|min:8,length|matches:/(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+/"
                        :validation-messages="{
                            matches: 'Your password must contain at least 1 number and 1 letter',
                            required: 'New password is required'
                        }"
                    />
                </div>
                <div class="input-container-box w-full flex justify-center relative">
                    <div class="flex absolute h-10 right-8 top-0 justify-center items-center">
                        <font-awesome-icon @click="forgotData.showingPassword = !forgotData.showingPassword" :icon="['fa-solid', forgotData.showingPassword? 'fa-eye-slash' : 'fa-eye']" class="icon" />
                    </div>
                    <FormulateInput
                        :type="forgotData.showingPassword? 'text' : 'password'"
                        name="new_password_confirm"
                        outer-class="confirm-container" 
                        validation="bail|required|confirm"
                        placeholder="Confirm New Password"
                        validation-name="Password confirmation"
                    />
                </div>
            <FormulateErrors />
            <FormulateInput 
                type="submit" name="Submit" element-class="submit-element"
                outer-class="submit-container"
            />
            </FormulateForm>
        </div>
    </div>
</template>

<style>
/* login */
/* .formulate-input{
} */
.form-slider-main .form-container{
    width: 100%; display: flex; flex-direction: column;
    align-items: center; justify-content: center;
    flex-grow: 1; min-width: 100%;
    /* background: purple; */
    background: transparent;
}
.form-slider-main .email-container, .form-slider-main .password-container, 
.form-slider-main .confirm-container, .form-slider-main .form-container,
.form-slider-main .bank-container, .form-slider-main .fullname-container, 
.form-slider-main .account-container, .form-slider-main .bvn-container,
.form-slider-main .otp-container{
    width: 90%; 
}
.form-slider-main .input-container-box:not(:first-of-type){
    margin-top: 10px;
}
.form-slider-main .password-container input,
.form-slider-main  .email-container input,
.form-slider-main .confirm-container input,
.form-slider-main  .bank-container input, 
.form-slider-main .fullname-container input,
.form-slider-main  .account-container input,
.form-slider-main .bvn-container input,
.form-slider-main  .otp-container input{
    /* background: rgba(250, 250, 250, 0.8); */
    width: 100% !important; background: white !important;
    padding: 0px 10px !important;
    height: 40px !important; color: #000 !important;
    display: flex !important; align-items: center !important;
    border-radius: 5px !important;
}
.form-slider-main .form-container .nin-container .formulate-input-element--image{
    min-width: 100%;
}
.form-slider-main .formulate-input-errors{
    font-size: 0.75em;
    padding-left: 5px;
    color: var(--color-orange);
}
.form-slider-main .otp-container .formulate-input-help{
    font-size: 0.85em;
    padding: 15px 0px 15px 15px;
}
.form-slider-main .submit-container{
    background: var(--color-green); 
    width: 250px; border-radius: 50px;
    height: 40px; overflow: hidden;
    box-sizing: border-box; 
    margin-top: 30px; 
}
.form-slider-main .form-slider-main .submit-container *{
    background: var(--color-green);
}
.form-slider-main .submit-element button{
    display: flex; align-items: center; justify-content: center;
    background: var(--color-green); color: white;
    width: 100%; height: 40px; cursor: pointer;
    display: flex; margin: auto;
}
.form-slider-main .form-slider-main .submit-container:active .submit-element button,
.form-slider-main .form-slider-main .submit-container:active *{
    color: var(--color-green); background: black;
}
.form-slider-main .form-slider-main .submit-container:active .submit-element button{
    border: 1px solid var(--color-green);
}
/* *, * > *, * > button, * > input{
    border-radius: 0px !important;
} */
.form-slider-main .nin-container{
    max-width: 90%;
    min-width: 90%;
    width: 90%;
}
</style>

<style scoped>
/* sliding css */
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
/* sub-slidables */
.sub-slidable{
    position: absolute;
    left: 0px; 
    transition: all 0.4s ease-in-out;
}
.sub-slidable.from-left.to-out{
    left: -100%;
}
.sub-slidable.from-right.to-out{
    left: 100%;
}
</style>

<script>
// import '~/static/vf-snow/snow.scss'
// import Vue from "vue";
// import VueFormulate from '@braid/vue-formulate';
// import '~braid/vue-formulate/themes/snow/snow.scss'
// import '../node_modules/@braid/vue-formulate/themes/snow/snow.scss';
// Vue.use(VueFormulate);


export default {
  props: ['mode','self'],
  data() {
    return {
        position: "in", 
        loginFormValues: {}, 
        forgotFormEmailValues: {
            email: 'emjay@gmail.com'
        }, 
        forgotFormOtpValues: {
            otp: 123456
        },
        forgotFormPwdValues: {},
        registerFormValues: {
            email: "",
            password: "",
            password_confirm: ""
            // email: "emjay@gmail.com",
            // password: "abcd1234",
            // password_confirm: "abcd1234"
        }, 
        bankFormValues: {
            bank: '',
            fullname: '',
            account_number: ''
            // bank: 'Sterling Bank',
            // fullname: 'Demola Adepoju',
            // account_number: '0064196418'
        },
        emailVerificationValues: {},
        registerData: {
            stage: 3,
            showingPassword: false,
            showingBVN: false
        },
        forgotData: {
            stage: 1,
            showingPassword: false
        },
        hasErrors: true,
    };
  },
  beforeMount(){
      this.forgotData.stage = 1;
      this.registerData.stage = 1;
  },
  mounted(){
        console.log("Props in comp on mount: %o", {...this.$props});
  },
  methods: {
    changeMode(page){
        console.log(`[FROM COMPONENT] Temporarily going to page '${page}'`);
        this.$store.commit('changeJoinPageMode', page);
    },
    login(data){
        console.log("Submitting Login... %o", data);
    },
    register(data){
        console.log("Submitting Registration... %o", data);
        this.registerData.stage = 2;
    },
    // async uploadNIN (file, progress, error, option) {
        //     console.log("Submitting NIN... %o", file);
    //     console.log({progress, error, option});
    //   // ... perform upload
    // },
    validateIdentityForReg(data){
        console.log("Submitting Identity for reg... %o", data);
        this.registerData.stage = 3;
    },
    sendOTP(data){
        console.log("Sending OTP... %o", data);
        this.forgotData.stage = 2;
    },
    validateIdentityForForgot(data){
        console.log("Submitting Identity for forgot... %o", data);
        this.forgotData.stage = 3;
    },
    reset(data){
        console.log("Resetting Password... %o", data);
    },
  },
  watch:{
    mode(mode){
        this.registerData.stage = 1;
        this.forgotData.stage = 1;
        console.log("Mode in comp %o", {mode});
    }
  }
}
</script>
