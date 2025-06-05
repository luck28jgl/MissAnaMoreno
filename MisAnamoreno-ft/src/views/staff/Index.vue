<template>
    <div class="px-4 sm:px-6 lg:px-8 mt-10">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Usuarios</h1>
          <p class="mt-2 text-sm text-black">Esta es una lista de todo el staff bocabulario disponible .</p>
        </div>
        <div class="mt-4 w-[200px] sm:flex-none">
            <button @click="openCreate()" type="button" class="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-redppahv focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Agregar usuario</button>
        </div>

      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-visible sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" style="min-height: 75vh;">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                    <th scope="col" class="py-4 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Nombre completo </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Tipo usuario </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">correo</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6  text-sm font-semibold text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <!-- https://mi-api-imagenes.s3.us-east-2.amazonaws.com/missAna/ -->
                <tr v-for="cl in UsrStaff" :key="cl.id">
                  <td  class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">{{ cl.usr.first_name }}</td>
                  <td  class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">{{ cl.usr.last_name }}</td>
                  <td  class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">{{ cl.usr.email }}</td>

                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Actions
                                <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="editarAdmin(cl)">Edit</div>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="deleteAdmin(cl.id)">Delete</div>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="verimagen(cl.img)">Preview</div>
                                    </MenuItem>
                                </div>
                            </MenuItems>
                        </transition>
                    </Menu>
                </td>
                </tr>
              </tbody>
            </table>
            <nav class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6" aria-label="Pagination">
              <div class="hidden sm:block">
                <p class="text-sm text-gray-700">
                    Page 
                    {{ paginaactual }}
                    <span class="font-medium">of</span>
                    {{ calcularTotalPaginas(contador) }}
                </p>
                </div>
                <div class="flex flex-1 justify-between sm:justify-end">
                <div @click="previousPage()" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0" v-if="previous">Previous</div>
                <div @click="nextPage()" class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0" v-if="next">Next</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-50" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center  sm:p-0 max-2xl:items-center">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-10/12 sm:max-w-4xl sm:p-6 max-md:w-11/12 scroll" style="max-height: 90vh; overflow-y: scroll; width: 80vw;height: 80vh; max-width: 80vw;">
                        <div>
                            <div  class="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Datos del usuario</DialogTitle>
                                <div class="mt-2">
                                    <div class="mt-10">
                                        <div class="space-y-6" style="overflow-y: scroll; " >
                                            <!-- <label class="text-center text-lg font-semibold leading-6 text-gray-900">Datos del usuario</label> -->
                                            <div class="w-full flex flex-row">
                                                <div class="w-full">
                                                    <label for="nombre"
                                                        class="block text-sm font-medium text-start text-gray-700">Nombre(s)</label>
                                                    <input v-model="form.first_name" type="text" id="nombre"
                                                        class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2"
                                                        required />
                                                </div>
                                                <div class="w-full">
                                                    <label for="nombre"
                                                        class="block text-sm font-medium text-start text-gray-700">Apellidos:</label>
                                                    <input v-model="form.last_name" type="text" id="apellidos"
                                                        class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2"
                                                        required />
                                                </div>
                                            </div>
                                            <div class="w-full flex flex-row">
                                                <div class="w-full">
                                                    <label for="email" class="block text-sm text-start font-medium text-gray-700">Correo electrónico</label>
                                                    <input v-model="form.email" type="email" id="email"
                                                    class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2"
                                                    @input="validateEmail"
                                                    :class="{ 'border-red-500': !validEmail }" required />
                                                    <p v-if="!validEmail" class="text-red-500 text-sm mt-1">Debe ser una dirección de correo electrónico válida</p>
                                                </div>
                                                <div  class=" w-full ">
                                                    <div class="w-full">
                                                        <label for="grado" class="block mb-2 text-sm font-medium text-gray-900 text-black">Tipo de usuario</label>
                                                        <select v-model.number="tip_user.id" id="grado" class="mt-1 block w-full border border-[#1f5b9b] text-black rounded-md shadow-sm p-2">
                                                            <option value="1" selected>Alumno</option>
                                                            <option value="2">Maestro</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                            <div v-if="tip_user.id === 1" class="w-full flex flex-row" >
                                                <div class="w-full">
                                                    <label for="grado" class="block mb-2 text-sm font-medium text-gray-900 text-black">Grado</label>
                                                    <select id="grado" class="mt-1 block w-full border border-[#1f5b9b] text-black rounded-md shadow-sm p-2">
                                                        <option selected>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                                <div class="w-full">
                                                    <label for="grupo" class="block mb-2 text-sm font-medium text-gray-900 text-black">Grupo</label>
                                                    <select id="grupo" class="mt-1 block w-full border border-[#1f5b9b] text-black rounded-md shadow-sm p-2">
                                                        <option  value="A" selected>A</option>
                                                        <option value="B">B</option>
                                                        <option value="C">C</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div v-else class="w-full flex flex-row" >
                                                <div class="w-full">
                                                    <label for="grado" class="block mb-2 text-sm font-medium text-gray-900 text-black">Grado a impartir </label>
                                                    <select id="grado" class="mt-1 block w-full border border-[#1f5b9b] text-black rounded-md shadow-sm p-2">
                                                        <option selected>1</option>
                                                        <option value="2">2</option>
                                                        <option value="3">3</option>
                                                    </select>
                                                </div>
                                                <div class="w-full">
                                                    <label for="grupo" class="block mb-2 text-sm font-medium text-gray-900 text-black">Grupo a impartir </label>
                                                    <multiselect 
                                                        v-model="selectedGrades" 
                                                        :options="['A', 'B', 'C', 'D', 'E', 'F']" 
                                                        :multiple="true" 
                                                        :close-on-select="false" 
                                                        :clear-on-select="false" 
                                                        :hide-selected="true" 
                                                        placeholder="Selecciona grados"
                                                        class="mt-1 block w-full border border-[#1f5b9b] text-black rounded-md shadow-sm"
                                                    />
                                                </div>
                                            </div>
                                            <div class="w-full">
                                                <form>
                                                    <div class="flex space-x-4">
                                                        <div class="w-full">
                                                            <label for="contraseña" class="block text-sm font-medium text-start text-gray-700">Contraseña:</label>
                                                            <input v-model="form.password" type="password" id="contraseña"
                                                                class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2" required />
                                                        </div>
                                                    </div>
                                                    <div style="margin-bottom: 20px;" class="flex space-x-4">
                                                        <div class="w-full">
                                                            <label for="contraseñaConfirm" class="block text-sm font-medium text-start text-gray-700"> Confirm Password </label>
                                                            <input v-model="form.passwordConfirm" type="password" id="contraseñaConfirm"
                                                                class="mt-1 block w-full text-black border border-[#1f5b9b] rounded-md shadow-sm p-2" required />
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="guardarDatos()">Save</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="open = false" ref="cancelButtonRef">Cancel</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
    <TransitionRoot as="template" :show="openEdit">
        <Dialog as="div" class="relative z-50" @close="openEdit = false; archsub = ''">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center sm:p-0 max-2xl:items-center">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-10/12 sm:max-w-4xl sm:p-6 max-md:w-11/12 scroll" style="max-height: 90vh;">
                        <div>
                            <div class="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900"> Editar bocabulario</DialogTitle>
                                <div class="mt-2">
                                    <div class="flex flex-row gap-5 space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                        <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                            <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">Español:</label>
                                            <div class="relative mt-2">
                                                <input type="text" name="precio" id="precio" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="bocedit.espanol"/>
                                                <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                            </div>
                                        </div>
                                        <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                            <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">Ingles:</label>
                                            <div class="relative mt-2">
                                                <input type="text" name="ingles" id="ingles" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="bocedit.ingles"/>
                                                <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                        <div class="flex-1 relative mt-20 max-2xl:w-full max-2xl:mt-6">
                                            <label for="name" class="block text-sm font-medium leading-6 text-gray-900 text-left">tipo de bocabulario:</label>
                                            <div class="relative w-full max-w-xs">
                                                <select
                                                v-model="bocedit.fileurl"
                                                class="block w-full text-black px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    <option value="" disabled>Selecciona un tipo</option>
                                                    <option class="text-black" v-for="tipo in tipos" :key="tipo" :value="tipo">
                                                        {{ tipo.nombre }}
                                                    </option>
                                                </select>
                                            </div>

                                        </div>

                                    </div>
                                    <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                        <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">


                                            <div v-if="!editimg" class="col-span-full">
                                                <div v-if="!editimg"  class="flex-1 relative mt-20 max-2xl:w-full max-2xl:mt-6">
                                                    <div class="w-full " >
                                                        <button style="margin: auto; margin-top: 20px; margin-bottom: 20px; " class="block m-auto rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-redppahv focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"  @click="editimg = !editimg">editar imagen</button>
                                                    </div>
                                                </div>
                                                <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Imagen actual</label>

                                                <img :src="'https://mi-api-imagenes.s3.us-east-2.amazonaws.com' + bocedit.fileurl" style="width: 50px; height: 50px; margin: auto;" alt="tes">
                                            </div>
                                            <div v-else class="col-span-full">
                                                <div class="flex-1 relative mt-20 max-2xl:w-full max-2xl:mt-6">
                                                    <div class="w-full flex" >
                                                        <!-- <button @click="editimg = !editimg"></button> -->
                                                        <button class="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group" type="button" @click="editimg = !editimg" >
                                                            <div class="bg-black  rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500" >
                                                                <svg class="h-8 w-8 text-gray-50"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"/>
                                                                </svg>
                                                            </div>
                                                            <p class="translate-x-2">No editar</p>
                                                        </button>
                                                    </div>
                                                </div>
                                                <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Image</label>
                                                <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                <div class="text-center">
                                                    <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                                                    <div v-if="!archsub"  class="mt-4 flex flex-col text-sm/6 text-gray-600">
                                                        <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                                                            <span class=" text-black" >Upload file</span>
                                                            <input  @input="handleFileInput" :multiple="false" id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                        </label>
                                                        <p class="text-xs/5  text-black">PNG, JPG de 10MB</p>
                                                    </div>
                                                    <p v-if="archsub"  class="pl-1 text-black">Archivo recibido: {{ archsub }}</p>

                                                </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense  sm:gap-3">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="actualizarDatos()">Actualizar datos</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="openEdit = false; archsub = ''" ref="cancelButtonRef">Cancel</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>
<script setup>
    import UsuariosServices from '@/services/UsuariosServices'
    import Multiselect from 'vue-multiselect';

    // import CatalogsServices from '@/services/CatalogsServices';
    // import { ref } from 'vue'
    // import { Switch } from '@headlessui/vue'
    import { ChevronDownIcon } from '@heroicons/vue/20/solid'
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { PhotoIcon } from '@heroicons/vue/24/solid'
    // import { ChevronUpDownIcon, CheckIcon} from '@heroicons/vue/20/solid'
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
    import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
    // import { URL_API } from '@/boot/axios';

</script>
<script>

export default {
    name: 'bocabularioIndex',
    data () {
        return {
            selectedGrades: [], // Array to store selected grades

			someCondition: false,
			tipoUsuario: null,
			paginaactual: 1,
			archsub: '',
			filtro_name: '',
			arch_tipo_usr: 1,
			crear_time: null,
            imagePreview: null,
            contador: 0,
            next: null,
            tip_user: {
                id: 1,
                name: 'Alumno'
            },
            previous: null,
            form: {
                email: '',
                first_name: '',
                last_name: '',
                password: '',
                passwordConfirm: '',
                grado: 0,
                grupo: '',
            },
            switchesState: {},
            UsrStaff: [],
            editimg: false,
            enabled: false,
            buscatego: false,
            aparesin_filt: false,
            open: false,
            openEdit: false,
            openPass: false,
            intervaloCl: null,
            bocedit: {
                id: 0,
                first_name: '',
                espanol: '',
                ingles: '',
                descripcion: '',
                fileurl: '',
                file: null,
                tipo: {
                    id: 1,
                    name: 'Descripción de una persona'
                },
            },
            boc: {
                first_name: '',
                espanol: '',
                ingles: '',
                descripcion: '',
                fileurl: '',
                file: null,
                tipo: {
                    id: 1,
                    name: 'Descripción de una persona'
                },
            },
            userEdit: {
                first_name: '',
                alto: 0,
                ancho: 0,
                fileurl: '',
                precio: 0,
                file: null,
                categoria:1,
                id: 0,
            },
            userAdd: {
                first_name: '',
                fileurl: '',
                categorianame: '',
                alto: 0,
                ancho: 0,
                precio: 0,
                file: null,
                categoria:1,
            },
            categorias: [
                // { id: 1, name: 'sin categoria' },

            ],
            userPass: {
                password: '',
                id: '',
                password_confirmation: ''
            },
            ventanillas: [],
            selectedItem: null,
            selectedItem_name: '',
            tipos: [
                {"id": 1, "nombre": "Descripción de una persona"},
                {"id": 2, "nombre": "La ropa y la moda"},
                {"id": 3, "nombre": "Peinado y maquillaje"},
                {"id": 4, "nombre": "El cuerpo humano"},
                {"id": 5, "nombre": "¿Cómo se encuentra?"},
                {"id": 6, "nombre": "Salud, enfermedad y discapacidades"},
                {"id": 7, "nombre": "Movimientos y gestos"},
                {"id": 8, "nombre": "La identidad"},
                {"id": 9, "nombre": "La edad"},
                {"id": 10, "nombre": "Trabajo y profesiones"},
                {"id": 11, "nombre": "Carácter y comportamiento"},
                {"id": 12, "nombre": "Las emociones"},
                {"id": 13, "nombre": "Los sentidos"},
                {"id": 14, "nombre": "Gustos y preferencias"},
                {"id": 15, "nombre": "La vida diaria y el sueño"},
                {"id": 16, "nombre": "Fumar"},
                {"id": 17, "nombre": "La alimentación"},
                {"id": 18, "nombre": "Tareas domésticas"},
                {"id": 19, "nombre": "Ir de compras"},
                {"id": 20, "nombre": "El deporte"},
                {"id": 21, "nombre": "Ocio y aficiones"},
                {"id": 22, "nombre": "Los medios de comunicación"},
                {"id": 23, "nombre": "Salir de noche"},
                {"id": 24, "nombre": "Mi habitación"},
                {"id": 25, "nombre": "La casa"},
                {"id": 26, "nombre": "La ciudad"},
                {"id": 27, "nombre": "En la carretera"},
                {"id": 28, "nombre": "Naturaleza"},
                {"id": 29, "nombre": "Los animales"},
                {"id": 30, "nombre": "¿Qué tiempo hace?"},
            ]
        }
    },
    mounted() {
        this.tipoUsuario = this.$store.state.user.type
        console.log('tipoUsuario',this.tipoUsuario);
        
        this.getstaff()
        // this.getcategorias()
    },
    methods: {
        pronounce(text, lang) {
            const utterance = new SpeechSynthesisUtterance(text);
            utterance.lang = lang; // 'es-ES' para español, 'en-US' para inglés
            window.speechSynthesis.speak(utterance);
        },
        guardar_catego() {
            this.userAdd.categoria = this.selectedItem               
            this.userAdd.categorianame = this.selectedItem_name               
            this.buscatego = false
            // this.selectedItem_name = item.name; // Actualiza el elemento seleccionado
        },
        selectItem(item) {
            this.selectedItem = item.id; // Actualiza el elemento seleccionado
            this.selectedItem_name = item.name; // Actualiza el elemento seleccionado
        },
        select_catego() {
            this.buscatego = true
        },
        formatoPrecio(precio) {
            return precio.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' });
        },
        verimagen(img) {
            window.open(img, '_blank');
        },
        getCategoriaName(id) {
            console.log('categorias', this.categorias);
            
            const categoria = this.categorias.find(cat => cat.id === id);
            return categoria ? categoria.name : '';
        },
        getcategorias() {
            CatalogsServices.getCategos(
                {
                    nombre:this.fil_name,
                }
            ).then(response => {
                console.log(response.data)
                response.data.forEach(item => {
                    this.categorias.push(item); // Agrega cada elemento al array `categorias`
                });

            }).catch(response => {
                console.log(response)
            })
        },
        handleFileInputEdit(event) {
            const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
            if (file) {
                this.userEdit.file = file; // Guarda el archivo en la variable v-model
                this.archsub = file.name; // Guarda el nombre del archivo en la variable archsub
                
                const reader = new FileReader(); // Crea un lector de archivos
                reader.onload = (e) => {
                    this.imagePreview = e.target.result; // Guarda la vista previa
                };
                reader.readAsDataURL(file); // Lee el archivo como base64 para vista previa
            } else {
                this.userEdit.file = null;
                this.archsub = '';
                this.imagePreview = null; // Limpia la vista previa si no hay archivo
            }
        },
        handleFileInput(event) {
            const file = event.target.files[0]; // Obtiene el primer archivo seleccionado
            if (file) {
                this.boc.file = file; // Guarda el archivo en la variable v-model
                this.archsub = file.name; // Guarda el nombre del archivo en la variable archsub
            } else {
                this.boc.file = null;
                this.archsub = '';
            }
        },
        Filtrar_por_tipo(){
            clearTimeout(this.crear_time)
            this.crear_time = setTimeout(() => {
                this.getstaff()
            }, 500)
        },
        deleteAdmin(cl) {
            this.$swal({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes, delete!',
                cancelButtonText: 'Cancel',
                customClass: {
                    confirmButton: 'my-confirm-button',
                    cancelButton: 'my-cancel-button'
                }
            }).then((result) => {
                if (result.isConfirmed) {
                    let loader = this.$loading.show({
                        canCancel: false,
                        loader: 'bars'
                    });
                    assetsServices.deletecatego({id: cl}).then(response => {
                        loader.hide()
                        this.$swal({
                            icon: 'success',
                            title: 'Asset deleted successfully',
                            timer: 2000
                        });
                        this.getstaff();
                    }).catch(error => {
                        loader.hide()
                        this.$swal({
                            icon: 'error',
                            title: 'Verify your information'
                        });
                    });
                }
            })
        },
        openCreate() {
            this.open = true


            this.archsub = ''
        },
        editarAdmin(cl) {
            this.openEdit = true
            this.imagePreview = cl.img
            this.archsub = ''
            this.bocedit = {
                id: cl.id,
                espanol: cl.texestanol,
                ingles: cl.texingles,
                descripcion: cl.descripcion,
                fileurl: cl.texturl,
                file: null,
                tipo: {
                    id: cl.tipo,
                    name: cl.nombre
                },
            };
            console.log(cl)
            console.log('bocedit',this.bocedit);
        },
        actualizarDatos() {

        },
        guardarDatos() {
            if (!this.boc.file) {
                this.$swal({
                    icon: 'error',
                    title: 'Por favor, selecciona un archivo'
                });
                return;
            }

            // Crear un FormData para enviar el archivo y otros datos
            const formData = new FormData();
            formData.append('id', this.bocedit.file); // Asegúrate de que el campo coincida con el backend
            formData.append('archivo', this.bocedit.file); // Asegúrate de que el campo coincida con el backend
            formData.append('nombre', this.bocedit.tipo.nombre);
            formData.append('texestanol', this.bocedit.espanol );
            formData.append('texingles', this.bocedit.ingles );
            formData.append('descripcion', this.bocedit.descripcion || '');
            formData.append('publico', this.bocedit.publico ? 'true' : 'false');
            formData.append('tipo', this.bocedit.tipo.id);

            let loader = this.$loading.show({
                canCancel: false,
                loader: 'bars'
            });

            console.log('formData', formData);

            // Llamar a la API para actualizar el asset
            BocabularioServices.UpdateBoc(formData)
                .then(response => {
                    loader.hide();
                    this.$swal({
                        icon: 'success',
                        title: 'Bocabulario actualizado exitosamente',
                        timer: 2000
                    });
                    this.open = false;
                    this.archsub = '';
                    this.getstaff();
                })
                .catch(error => {
                    loader.hide();
                    console.error(error);
                    this.$swal({
                        icon: 'error',
                        title: 'Verifica tu información'
                    });
                });
        },
        getstaff(page) {
            let loader = this.$loading.show({
                canCancel: false,
                loader: 'bars'
            });
            UsuariosServices.getusuarios(
                {
                    page: page,
                    nombre: this.filtro_name
                }
            ).then(response => {
                loader.hide()
                this.contador = response.data.count;
                this.UsrStaff = response.data.results
                console.log(this.UsrStaff)
                if (response.data.next) {
                let url = response.data.next
                let urlObj = new URL(url)
                let searchParams = new URLSearchParams(urlObj.search);
                this.next = searchParams.get('page');
                } else {
                this.next = null;
                }
                if (response.data.previous) {
                let url = response.data.previous
                let urlObj = new URL(url)
                let searchParams = new URLSearchParams(urlObj.search);
                this.previous = searchParams.get('page');
                if (!this.previous) {
                    this.previous = 1;
                }
                } else {
                this.previous = null;
                }
            }).catch(response => {
                console.log(response)
                loader.hide()
            })
        },
        calcularTotalPaginas(total) {
			return Math.ceil(total / 10);
		},
		nextPage() {
			this.paginaactual = this.paginaactual + 1;
			this.getstaff(this.next);
		},
		previousPage() {
			this.paginaactual = this.paginaactual - 1;
			this.getstaff(this.previous);
		},
}
}
</script>
<style>
@import "vue-multiselect/dist/vue-multiselect.min.css";
</style>