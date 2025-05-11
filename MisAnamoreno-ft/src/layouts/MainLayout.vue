<script setup>
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
    import tecsollogo from '../assets/iconmis_ana.png'
</script>
<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-50 " @close="sidebarOpen = false"> <!--class= lg:hidden-->
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <!--Sidebar component, swap this element with another sidebar if you like -->
              <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
                <div class="flex h-16 shrink-0 items-center mt-6">
                  <div class="w-11/12 flex justify-center">
                    <img :src="tecsollogo" class="w-3/4">
                  </div>
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <div @click="pageIr(item)" :class="[item.url.includes(currentUrl) ? 'bg-gray-50 text-black' : 'text-gray-700 hover:text-black hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer']">
                            {{ item.name }}
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                        <div class="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-50 cursor-pointer" @click="logout()">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                                </svg>

                            </div>
                            Log Out
                        </div>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
    <div>
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <div class="flex flex-row space-x-4">
          <button type="button" class="-m-2.5 p-2.5 text-black " @click="sidebarOpen = true">
            <span class="sr-only">Open sidebar</span>
            <Bars3Icon class="h-6 w-6" aria-hidden="true" />
          </button> <p class="text-black ml-px block text-sm font-medium leading-6">Menu</p>
        </div>
        <div class="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
        <div class="flex flex-row space-x-4">
          <div class="flex items-center justify-center gap-2 rounded-full border px-3 py-1.5 text-sm">
            <CreditCardIcon class="h-5 w-5 text-muted-foreground" />
            <span class="font-medium">{{ creditosAdquiridos }} Credits</span>
          </div>
          <button  @click="buyM()" type="button" class="mt-3 sm:mt-0 block rounded-full bg-redppa px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-redppa">Buy Credits</button>
        </div>
      </div>

      <main class="py-2">
        <div class="px-2 sm:px-4 lg:px-6">
            <router-view/>
        </div>
      </main>
    </div>
        <TransitionRoot as="template" :show="openBuy">
            <Dialog as="div" class="relative z-50" @close="openBuy = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center sm:p-0 max-2xl:items-center">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-3/4 sm:max-w-4xl sm:p-6 max-md:w-2/3 scroll" style="max-height: 90vh;">
                            <div>
                                <div class="my-3 text-center sm:my-5">
                                    <DialogTitle as="h3" class="text-xl font-semibold leading-6 text-gray-900">Buy credits</DialogTitle>
                                </div>
                                <div class="mt-2" v-if="pagando === false">
                                  <div class="mt-6 border-t border-gray-100">
                                    <dl class="divide-y divide-gray-100">
                                      <div class="px-4 py-6 sm:px-0">
                                        <dt class="text-lg font-bold text-center text-gray-900">A credit = <span class="text-redppa"> {{ formatPrice(datosCretiso.Precio_credito) }}</span></dt>
                                      </div>
                                    </dl>
                                  </div>
                                  <div class="mt-3 text-left sm:mt-5 flex flex-row space-x-4">
                                    <div class="w-2/3">
                                      <label for="credits" class="block text-sm/6 font-medium text-gray-900">
                                        Amount of credits <span class="text-gray-500">(1-100)</span>:
                                      </label>
                                      <div class="mt-2">
                                        <input
                                          id="credits"
                                          type="text"
                                          maxlength="3"
                                          :value="creditsBuy"
                                          @input="handleCreditInput"
                                          class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-redppa sm:text-sm/6"
                                          placeholder="Enter credits between 1 and 100"
                                        />
                                      </div>
                                    </div>
                                    <div class="w-1/2 flex items-end">
                                      <span class="font-semibold text-lg">Total: {{ formatPrice(valorTotal) }}</span>
                                    </div>
                                  </div>
                                </div>
                                <div class="mt-2" v-if="pagando === true">
                                  <div class="w-full flex flex-row justify-around space-x-2 py-2 bg-green-100">
                                    <span class="font-semibold text-redppa">Total credits: {{ creditsBuy }}</span>
                                    <span class="font-semibold text-redppa">Total to pay: {{ formatPrice(valorTotal) }}</span>
                                  </div>
                                  <MetodosPago ref="formularioRef"/>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense  sm:gap-3" v-if="pagando === false">
                                <button type="button" @click="procederPago" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2">Following</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="openBuy = false" ref="cancelButtonRef">Cancel</button>
                            </div>
                            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense  sm:gap-3" v-if="pagando === true">
                                <button type="button" @click="pagarCreditos" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2">Buy</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="pagando = false" ref="cancelButtonRef">Go back</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
  </div>
</template>
<script>
    import LoginServices from '../services/LoginService';
    // import EssentialLink from "@/components/EssentialLink.vue";
    // import MetodosPago from '@/components/MetodosPago.vue';
    // import PagosServices from '@/services/PagosServices';
    import {
      Dialog,
      DialogPanel,
      DialogTitle,
      Menu,
      MenuButton,
      MenuItem,
      MenuItems,
      TransitionChild,
      TransitionRoot,
    } from '@headlessui/vue'
    import { Bars3Icon, XMarkIcon, EllipsisVerticalIcon, BellIcon, CalendarIcon } from '@heroicons/vue/24/outline'
    import { CreditCardIcon } from '@heroicons/vue/20/solid'
    import LoginService from '@/services/LoginService';
    // import Login from '@/pages/Login.vue';
    export default {
      name: 'MainLayout',
      components: {
        Bars3Icon,
        Dialog,
        DialogPanel,
        DialogTitle,
        Menu,
        MenuButton,
        MenuItem,
        MenuItems,
        TransitionChild,
        TransitionRoot,
        XMarkIcon,
        EllipsisVerticalIcon,
        BellIcon,
        CalendarIcon
      },
      mounted() {
        this.tipoUsuario = this.$store.state.user.type
        this.id_user = sessionStorage.getItem('pk')
        this.filtrarNavigation();
      },
      computed: {
          currentUrl() {
              return this.$router.currentRoute.value.fullPath;
          }
      },

      data() {
          return {
              id_user: '',
              valorTotal: 0,
              estatus: true,
              intervaloCreditos: null,
              openBuy: false,
              creditosAdquiridos: 0,
              creditsBuy: 0,
              sidebarOpen: false,
              nowYear: new Date().getFullYear(),
              navigation: [
                { name: 'Bocabulario', link: 'bocabularioIndex', icon: '',  url: '/bocabulario', tipo:[2]},
              ],
              pagando: false,
              open: false,
              tipoUsuario: '',
              datosCretiso: {}
          }
      },
      methods: {

        pageIr(item){
          this.sidebarOpen = false
          if ('ResumenIndex' == item.link) {
            this.$router.push({ name: item.link, params: { id: 'reciente' } })
          } else {
            this.$router.push(item.url)
          }
        },
        logout() {
          window.sessionStorage.removeItem("auth_token")
          let loader = this.$loading.show({
              canCancel: false,
              loader: 'bars'
          });
          LoginServices.logut().then((response) => {
              loader.hide()
              this.$store.dispatch("user/logout", response.data);
              this.$router.push("/ingresar");
          }).catch((e) => {
              loader.hide()
          });
        },
        filtrarNavigation() {
          LoginService.getUserSubType({
            id: this.$store.state.user.id
          }).then((response) => {
            this.tipoUsuario = response.data.tipo
            this.navigation = this.navigation.filter(item => {
              if (item.tipo.includes(this.tipoUsuario)) {
                return item;
              }
            });
          }).catch(error => {
            console.log(error)
            this.$swal({
              icon: 'error',
              title: 'Error al obtener el tipo de usuario'
            });
          });
        },
      }
    }
</script>
