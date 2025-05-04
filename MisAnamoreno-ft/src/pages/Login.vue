<script setup>
    import imgBg from '../assets/imginles.jpg'
    import tecsollogo from '../assets/imginles.jpg'
</script>
<template>
    <div class="flex min-h-screen flex-1">
        <div class="img2 flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-wtppa">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div class="flex justify-center">
                    <img :src="tecsollogo" class="w-3/4">
                </div>
                <div class="mt-10">
                <div class="space-y-6">
                    <div>
                        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
                        <div class="relative mt-2">
                        <input
                            type="text"
                            v-model="email"
                            name="name"
                            id="name"
                            class="peer block w-full border-0 bg-wtppa py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                            placeholder="example@gmail.com" />
                        <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                        </div>
                    </div>
                    <div>
                        <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                        <div class="relative mt-2">
                        <input
                            v-model="password"
                            :type="showPassword ? 'text' : 'password'"
                            name="password"
                            id="password"
                            autocomplete="current-password"
                            class="peer block w-full border-0 bg-wtppa py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6 px-4"
                            placeholder="********" />
                            <button @click="showPassword = !showPassword" type="button" class="absolute inset-y-0 right-0 pr-3 flex items-center">
                                <svg v-if="showPassword" class="h-5 w-7 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" clip-rule="evenodd" />
                                    <path style="color: rgb(255 255 255) !important;" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" clip-rule="evenodd" />
                                </svg>
                                <svg v-else class="h-5 w-7 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M3.53 2.47a.75.75 0 0 0-1.06 1.06l18 18a.75.75 0 1 0 1.06-1.06l-18-18ZM22.676 12.553a11.249 11.249 0 0 1-2.631 4.31l-3.099-3.099a5.25 5.25 0 0 0-6.71-6.71L7.759 4.577a11.217 11.217 0 0 1 4.242-.827c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113Z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M15.75 12c0 .18-.013.357-.037.53l-4.244-4.243A3.75 3.75 0 0 1 15.75 12ZM12.53 15.713l-4.243-4.244a3.75 3.75 0 0 0 4.244 4.243Z" clip-rule="evenodd" />
                                    <path d="M6.75 12c0-.619.107-1.213.304-1.764l-3.1-3.1a11.25 11.25 0 0 0-2.63 4.31c-.12.362-.12.752 0 1.114 1.489 4.467 5.704 7.69 10.675 7.69 1.5 0 2.933-.294 4.242-.827l-2.477-2.477A5.25 5.25 0 0 1 6.75 12Z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div class="grid justify-center">
                        <!-- <RecaptchaV2
                            @widget-id="handleWidgetId"
                            @error-callback="handleErrorCalback"
                            @expired-callback="handleExpiredCallback"
                        @load-callback="handleLoadCallback"
                        /> -->
                        <!-- <RecaptchaV2
                            @widget-id="handleWidgetId"
                            @error-callback="handleErrorCalback"
                            @expired-callback="handleExpiredCallback"
                            @load-callback="handleLoadCallback" size="invisible"/> -->
                    </div>
                    <div>
                        <button
                            @click="ejecutartoken()"
                            type="submit"
                            class="btn-34 flex w-full justify-center rounded-3xl bg-redppa px-3 py-[12px] max-w-[366px] text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">Login In</button>
                        <!-- <p class="p-10 text-center underline text-base cursor-pointer hover:font-bold" @click="abrirModalContra()">Olvidé mi contraseña</p> -->
                    </div>
                </div>
                </div>
            </div>
        </div>

        <div class="relative content-img hidden w-0 flex-1 lg:block">
            <img class="img1 absolute inset-0 h-full w-full object-cover" :src="imgBg" alt="" />
        </div>
    </div>
</template>
<script>
    // import LoginService from '../services/LoginService';
    // import { defineComponent } from "vue";
    // import { RecaptchaV2, useRecaptcha } from "vue3-recaptcha-v2";
    // const { handleGetResponse, handleExecute } = useRecaptcha();
    // import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

    export default {
        name: 'Login',
        // components: {
        //     RecaptchaV2,
        //     Dialog,
        //     DialogPanel,
        //     DialogTitle,
        //     TransitionChild,
        //     TransitionRoot
        // },
        data() {
            return {
                openEdit: false,
                datosrecuperar: {
                    email: ''
                },
                contraseñaNueva: {
                    contraseñaNew: '',
                    repeatcontrasena: ''
                },
                code: ['', '', '', '', '', ''],
                tokencatpcha: '',
                email: '',
                password: '',
                recuperar: false,
                showPassword: false,
                passwords: false,
                recuperarContra: false
            }
        },
        methods: {
            // onInput(event, index) {
            //     const input = event.target;
            //     const value = input.value;

            //     if (value.length === 1 && index < 5) {
            //         const nextInput = document.getElementById(`code${index + 1}`);
            //         if (nextInput) {
            //         nextInput.focus();
            //         }
            //     }
            // },
            // onKeyDown(event, index) {
            //     const input = event.target;

            //     if (event.key === 'Backspace' && input.value.length === 0 && index > 0) {
            //         const prevInput = document.getElementById(`code${index - 1}`);
            //         if (prevInput) {
            //         prevInput.focus();
            //         }
            //     }
            // },
            // abrirModalContra() {
            //     this.openEdit = true;
            //     if(this.passwords || this.recuperarContra === true) {
            //         this.recuperar = true
            //     } else {
            //         this.recuperar = false
            //     }
            //     this.datosrecuperar.email = '';
            // },
            // ActualizarCOntrasena() {
            //     if (this.contraseñaNueva.contraseñaNew !== this.contraseñaNueva.repeatcontrasena) {
            //         this.$swal({
            //             icon: 'warning',
            //             title: 'Las contraseñas no coinciden'
            //         })
            //         return
            //     }
            //     let loader = this.$loading.show({
            //         canCancel: false,
            //         loader: 'bars'
            //     });
            //     const datos = {
            //         email: this.datosrecuperar.email,
            //         code: this.code.join(''),
            //         new_password: this.contraseñaNueva.contraseñaNew,
            //     }
            //     LoginService.updatePasswor(datos).then(response => {
            //         loader.hide()
            //         this.$swal({
            //             icon: 'success',
            //             title: 'Contraseña Actualizada Correctamente',
            //             timer: 3000
            //         });
            //         this.openEdit = false
            //     }).catch(error => {
            //         loader.hide()
            //         this.$swal({
            //             icon: 'error',
            //             title: 'Comunicate con el Administrador',
            //             timer: 3000
            //         });
            //     })
            // },
            // handleWidgetId(widgetId) {
            //     console.log("Widget ID: ", widgetId);
            //     handleGetResponse(widgetId);
            // },
            // handleErrorCalback() {
            //     console.log("Error callback");
            // },
            // handleExpiredCallback() {
            //     this.tokencatpcha = '';
            //     console.log("Expired callback");
            // },
            // ejecutartoken() {
            //     if (this.tokencatpcha !== '') {
            //         this.twogetUserType(true)
            //         return
            //     }
            //     handleExecute(this.widgetId);
            // },
            // handleLoadCallback(response) {
            //     console.log("Load callback", response);
            //     // this.tokencatpcha = response;
            //     this.tokencatpcha = response;
            //     this.twogetUserType()
            // },
            // twogetUserType() {
            //     LoginService.getUType({
            //         username: this.email,
            //     }).then(response => {
            //         // console.log(response.data);
            //         this.usuario = response.data.tipo
            //         console.log(this.usuario);
            //         this.loginUser()
            //     }).catch(e => {
            //         console.log(e.response)
            //     })
            // },
            // validarEmail() {
            //     if (this.datosrecuperar.email === '') {
            //         this.$swal({
            //             icon: 'warning',
            //             title: 'Favor de ingresar el correo electronico'
            //         })
            //         return
            //     }
            //     let loader = this.$loading.show({
            //         canCancel: false,
            //         loader: 'bars'
            //     });
            //     const datos = {
            //         email: this.datosrecuperar.email,
            //     }
            //     LoginService.verifyEmail(datos).then(response => {
            //         loader.hide()
            //         this.$swal({
            //             icon: 'success',
            //             title: 'Se ha enviado un correo electronico a tu correo ingresado',
            //             timer: 3000
            //         });
            //         this.recuperar = true
            //         this.recuperarContra = true
            //     }).catch(error => {
            //         loader.hide()
            //         this.$swal({
            //             icon: 'error',
            //             title: 'Comunicate con el Administrador',
            //             timer: 3000
            //         });
            //     })
            // },
            // ValidacionCodigo() {
            //     if (!this.code.every(c => c !== '')) {
            //         this.$swal({
            //             icon: 'warning',
            //             title: 'Verifica tu código'
            //         })
            //         return
            //     }
            //     // funcion
            //     let loader = this.$loading.show({
            //         canCancel: false,
            //         loader: 'bars'
            //     });
            //     const datos = {
            //         email: this.datosrecuperar.email,
            //         code: this.code.join('')
            //     }
            //     LoginService.verifyCode(datos).then(response => {
            //         loader.hide()
            //         this.$swal({
            //             icon: 'success',
            //             title: 'Codigo de verificación a correcto',
            //             timer: 3000
            //         });
            //         this.recuperarContra = false
            //         this.passwords = true
            //     }).catch(error => {
            //         loader.hide()
            //         this.$swal({
            //             icon: 'error',
            //             title: 'Codigo invalido o ya Expirado',
            //             timer: 3000
            //         });
            //     })



            // },
            // loginUser() {
            //     if (!this.tokencatpcha) {
            //         this.$swal({
            //             icon: 'error',
            //             title: 'Verifica el captcha'
            //         });
            //         return;
            //     }
            //     let loader = this.$loading.show({
            //         canCancel: false,
            //         loader: 'bars'
            //     });
            //     const loginForm = {
            //         username: this.email,
            //         password: this.password,
            //     }
            //     LoginService.login(loginForm).then(response => {
            //         loader.hide()
            //         this.$swal({
            //             icon: 'success',
            //             title: 'Welcome',
            //             timer: 2000
            //         });
            //         this.$store.dispatch('user/setSession', response.data);

            //         this.getUserType(this.email)
            //         // setTimeout(() => {
            //         //     this.$router.push('/');
            //         // }, 2000)
            //     }).catch(e => {
            //         loader.hide()
            //         if (e.response.data.error === 'Invalid credentials') {
            //             this.$swal({
            //                 icon: 'error',
            //                 title: 'If the passwords are correct, the account could be deactivated.'
            //             });
            //         } else {
            //             this.$swal({
            //                 icon: 'error',
            //                 title: 'Contact the administrator.'
            //             });
            //         }
            //     })
            // },
            // getUserType(hash_id) {
            //     LoginService.getUType({
            //         username: this.email,
            //     }).then(response => {
            //         this.$store.dispatch('user/setUserType', response.data.tipo);
            //         if (hash_id) {
            //             localStorage.setItem('userPk', hash_id); 
            //             localStorage.setItem('userId', this.email);
            //             this.$router.push('/');

            //             console.log(`El ID del usuario (${this.email}) se guardó correctamente en localStorage.`);
            //         } else {
            //             console.error('No se pudo guardar el ID del usuario porque "this.email" está vacío o indefinido.');
            //         }
            //         // this.$router.push('/');
            //     }).catch(e => {
            //         console.log(e.response)
            //     })
            // }
        }
    }
</script>
<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
.btn-34{
    border: solid 1px #d6d6d6;
    margin-top: 30px;
}
.img2{
    display: flex;
    align-items: center;
    width: 47vw;
    height: 100vh;
}
.img1{
    width: 70%;
    height: 70%;
    margin: auto;
}
.content-img{
    width: 47vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>