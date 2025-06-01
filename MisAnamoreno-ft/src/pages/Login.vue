<script setup>
    import imgBg from '../assets/img2.jpg'
    import tecsollogo from '../assets/iconmis_ana.png'
</script>
<template>
    <div class="flex min-h-screen flex-1">
        <div v-if="!registrar === true" class="img2 flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-wtppa">
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
                    <div class="loginSignUpSeparator "><span class="textInSeparator">or</span></div>
                    <div>
                        <button
                            @click="Create_Acount()"
                            type="submit"
                            class="btn-45 flex w-full text-black justify-center rounded-3xl bg-white px-3 py-[12px] border  border-redppa max-w-[366px] text-sm font-semibold leading-6  shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400">Sign Up</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div v-if="registrar === true" class="img2 flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24 bg-wtppa">
            <div class="mx-auto w-full max-w-sm lg:w-96">
                <div class="flex justify-start">
                    <button class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group" type="button" @click="regresarform()" >
                        <div class="bg-black  rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500" >
                            <svg class="h-8 w-8 text-gray-50"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                            </svg>
                        </div>
                        <p class="translate-x-2">Regresar</p>
                    </button>
                </div>
                <div class="flex justify-center">
                    <img :src="tecsollogo" style="width: 200px; height: 200px;">
                </div>
                <div class="mt-10">
                    <div class="space-y-6" style="overflow-y: scroll; height: 300px;" >
                        <label class="text-center text-lg font-semibold leading-6 text-gray-900">User data</label>
                        <div class="w-full">
                            <label for="nombre"
                                class="block text-sm font-medium text-start text-gray-700">Name(s)</label>
                            <input v-model="form.first_name" type="text" id="nombre"
                                class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2"
                                required />
                        </div>
                        <div class="w-full">
                            <label for="nombre"
                                class="block text-sm font-medium text-start text-gray-700">Last names:</label>
                            <input v-model="form.last_name" type="text" id="apellidos"
                                class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2"
                                required />
                        </div>
                        <div class="w-full">
                            <label for="grado" class="block mb-2 text-sm font-medium text-gray-900 text-black">Grado</label>
                            <select id="grado" class="mt-1 block w-full border border-[#1f5b9b]  text-black rounded-md shadow-sm p-2">
                                <option selected>1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="grado" class="block mb-2 text-sm font-medium text-gray-900 text-black">Grupo</label>
                            <select id="grado" class="mt-1 block w-full border border-[#1f5b9b] text-black rounded-md shadow-sm p-2">
                                <option  value="A" selected>A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                            </select>
                        </div>
                        <div class="w-full">
                            <label for="email"
                            class="block text-sm text-start font-medium text-gray-700">Email</label>
                            <input v-model="form.email" type="email" id="email"
                            class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2"
                            @input="validateEmail"
                            :class="{ 'border-red-500': !validEmail }" required />
                            <p v-if="!validEmail" class="text-red-500 text-sm mt-1">Must be a valid email address</p>
                        </div>
                        <div class="w-full">
                            <form>
                                <div class="flex space-x-4">
                                    <div class="w-full">
                                        <label for="contraseña" class="block text-sm font-medium text-start text-gray-700">Password:</label>
                                        <input v-model="form.password" type="password" id="contraseña"
                                            class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2" required />
                                    </div>
                                </div>
                                <div style="    margin-bottom: 20px;" class="flex space-x-4">
                                    <div class="w-full">
                                        <label for="contraseñaConfirm" class="block text-sm font-medium text-start text-gray-700">
                                            Confirm Password
                                        </label>
                                        <input v-model="form.passwordConfirm" type="password" id="contraseñaConfirm"
                                            class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2" required />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mt-10">
                    <div class="space-y-6">
                        <div class="mt-5 sm:mt-6 w-full">
                            <button type="button"
                                class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-greenppa focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2"
                                @click="guardarDatos()">Crear cuenta</button>
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
    import LoginService from '../services/LoginService';
    // import { defineComponent } from "vue";
    // import { RecaptchaV2, useRecaptcha } from "vue3-recaptcha-v2";
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
                registrar: false,
                validEmail: null,
                openEdit: false,
                datosrecuperar: {
                    email: ''
                },
                contraseñaNueva: {
                    contraseñaNew: '',
                    repeatcontrasena: ''
                },
                form: {
                    email: '',
                    first_name: '',
                    last_name: '',
                    password: '',
                    passwordConfirm: '',
                    grado: 0,
                    grupo: '',
                },
                code: ['', '', '', '', '', ''],
                tokencatpcha: '',
                email: '',
                password: '',
                usuario: 0,
                recuperar: false,
                showPassword: false,
                passwords: false,
                recuperarContra: false
            }
        },
        methods: {
            validateEmail() {
                // Validar formato de correo electrónico
                const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                this.validEmail = regex.test(this.form.email);

            },
            regresarform() {
                this.registrar = false
                this.form = {
                    email: '',
                    first_name: '',
                    last_name: '',
                    password: '',
                    passwordConfirm: '',
                    grado: 0,
                    grupo: '',
                }

            },
            Create_Acount() {
                this.registrar = true
                this.form = {
                    email: '',
                    first_name: '',
                    last_name: '',
                    password: '',
                    passwordConfirm: '',
                    grado: 0,
                    grupo: '',
                }

            },
            guardarDatos(){
                if (!this.form.password || !this.form.passwordConfirm) {
                    this.$swal({
                        icon: 'error',
                        title: 'Please fill in all password details.'
                    });
                    return; // Detener la ejecución si algún campo está vacío
                }
                if (this.form.password !== this.form.passwordConfirm) {
                    this.$swal({
                        icon: 'error',
                        title: 'Passwords do not match'
                    });
                    return; // Detener la ejecución si las contraseñas no coinciden
                }
                LoginService.createAccount({
                    usuario: this.form
                }).then(response => {
                    if (!response.data.status) {
                        this.$swal({
                            icon: 'error',
                            title: 'Error creating account',
                            text: response.data.message,
                            timer: 3000
                        });
                        return;
                    }
                    this.$swal({
                        icon: 'success',
                        title: 'Account created successfully',
                        timer: 3000
                    });
                    this.registrar = false
                }).catch(error => {
                    console.error(error);  // Agrega esta línea para depurar errores
                    this.$swal({
                        icon: 'error',
                        title: 'Error creating account',
                        timer: 3000
                    });
                })
            },

            ejecutartoken() {
                this.loginUser()
            },

            loginUser() {
                let loader = this.$loading.show({
                    canCancel: false,
                    loader: 'bars'
                });
                const loginForm = {
                    username: this.email,
                    password: this.password,
                }
                LoginService.login(loginForm)
                    .then(response => {
                        // console.log('respuesta del server ',response.data);
                        loader.hide()
                        console.log('Antes de llamar a setSession:', response.data);
                        this.$store.dispatch('user/setSession', response.data);
                        console.log('Después de llamar a setSession');

                        
                        if (response.data.auth_token) {
                            this.$swal({
                                icon: 'success',
                                title: 'Bienvenido',
                                timer: 2000
                            });
                            this.getUserType(this.email);
  
                        } else {
                            this.$swal({
                                icon: 'error',
                                title: 'Error al iniciar sesión. Intenta nuevamente.'
                            });
                        }

                    }).catch(e => {
                        loader.hide()
                        this.$swal({
                            icon: 'error',
                            title: 'Contact the administrator.'
                        });
                    })
            },
            getUserType(hash_id) {
                LoginService.getUType({
                    username: this.email,
                }).then(response => {
                    this.$store.dispatch('user/setUserType', response.data.tipo);
                    if (hash_id) {
                        // localStorage.setItem('userPk', hash_id); 
                        // localStorage.setItem('userId', hash_id);
                        this.$store.dispatch('user/setUserType', response.data.tipo);
                        this.$store.dispatch('user/setUserId', response.data.id);
                        console.log('Navigating to home page...');
                        this.$router.push('/');

                        console.log(`El ID del usuario (${this.email}) se guardó correctamente en localStorage.`);
                    } else {
                        console.error('No se pudo guardar el ID del usuario porque "this.email" está vacío o indefinido.');
                    }
                    // this.$router.push('/');
                }).catch(e => {
                    console.log(e.response)
                })
            }
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
.btn-45{
    background: #000000;
    color: aliceblue;
    border: solid 2px black;
    font-weight: 800;
}
.btn-34{
    border: solid 1px #000000;
    margin-top: 30px;
}
.img2{
    display: flex;
    align-items: center;
    width: 47vw;
    height: 100vh;
}
.img1{
    width: 100%;
    height: 100%;
}
.content-img{
    width: 47vw;
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
@media screen and (max-width: 1011px) {
    .content-img{
        display: none;
    }
    
}
</style>