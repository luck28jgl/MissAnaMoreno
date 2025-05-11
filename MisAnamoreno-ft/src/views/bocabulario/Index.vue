<template>
    <div class="px-4 sm:px-6 lg:px-8 mt-10">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900"> Assets</h1>
          <p class="mt-2 text-sm text-gray-700">The list of all assets on the platform. These can be filtered by name. Additionally, it is also possible to add new assets, as well as edit or delete existing ones.</p>
        </div>
        <!-- <div class="mt-4 w-[200px] sm:flex-none">
            <button @click="openCreate()" type="button" class="block rounded-md bg-redppa px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-redppahv focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Add assets</button>
        </div>
      </div>
      <div style="display: flex;  margin-top: 20px;    justify-content: start;">
        <div style="    width: 30%; display: flex; justify-content: center;align-content: center; flex-direction: column;">
            <label for="location" class="block text-sm font-medium leading-6 text-gray-900  text-left">Search by asset name</label>

            <input @keyup.enter="Filtrar_por_tipo()" v-model="filtro_name" id="search-field" style="width: 100%;     height: fit-content;     align-items: flex-end;" class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder="Asset name" type="search" name="search" />
        </div>
        <div  class="w-[25%] mx-3  flex items-end gap-[15px]">
            <div style=" width: 300px;  display: flex; justify-content: center; align-items: flex-end;">
                <div style="    display: flex; align-items: flex-end;  justify-content: center;    width: 100%;  " class=" sm:mt-0 sm:flex-none">
                    <button @click="Filtrar_por_tipo()"  type="button" class=" w-full block rounded-md bg-redppa px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-redppahv focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Search</button>
                </div>
            </div>
        </div> -->
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-visible sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" style="min-height: 75vh;">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                    <th scope="col" class="py-4 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name </th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Category</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Price</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <!-- <tr v-for="cl in UsrStaff" :key="cl.id">
                  <td class=" py-4 pl-4 pr-3 text-left text-sm font-medium text-gray-900  sm:pl-6 ">{{ cl.name }} </td>
                  <td  class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">{{ getCategoriaName(cl.category) }}</td>
                  <td  class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">{{ formatoPrecio(cl.price) }}</td>
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
                                    <MenuItem v-slot="{ active }" v-if="tipoUsuario === 1" >
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="editarAdmin(cl)">Edit</div>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }"  v-if="tipoUsuario === 1" >
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
                </tr> -->
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
      <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-50" @close="open = false">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </TransitionChild>

                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center  sm:p-0 max-2xl:items-center">
                    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                        <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-10/12 sm:max-w-4xl sm:p-6 max-md:w-11/12 scroll" style="max-height: 90vh;">
                            <div v-if="!buscatego">
                                <div class="mt-3 text-center sm:mt-5">
                                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">New assets</DialogTitle>
                                    <div class="mt-2">
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900 text-left">Name(s):</label>
                                                <div class="relative mt-2">
                                                    <input type="text" name="first_name" id="first_name" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder=" Enter your name(s)" v-model="userAdd.first_name"/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">High  (In):</label>
                                                <div class="relative mt-2">
                                                    <input type="number" name="precio" id="precio" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="userAdd.alto"/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">Broad (In):</label>
                                                <div class="relative mt-2">
                                                    <input type="number" name="precio" id="precio" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="userAdd.ancho"/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">Price:</label>
                                                <div class="relative mt-2">
                                                    <input type="number" name="precio" id="precio" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="userAdd.precio"/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div class="relative mt-2 w-1/2 max-2xl:mt-6">
                                                <div v-if="userAdd.categorianame" style="    display: flex;justify-content: space-around;" class=" sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                                                    <h1 style="    font-size: 16px; font-weight: 600;">
                                                        Selected category: {{  userAdd.categorianame }}
                                                    </h1>
                                                </div>
                                                <div class="mt-5 sm:mt-6  m:gap-3">
                                                    <button v-if="!userAdd.categorianame" type="button" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="select_catego()">Select category</button>
                                                    <button v-if="userAdd.categorianame" type="button" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="select_catego()"> change category selecte</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <div class="col-span-full">
                                                    <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Image</label>
                                                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                    <div class="text-center">
                                                        <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                                                        <div v-if="!archsub"  class="mt-4 flex flex-col text-sm/6 text-gray-600">
                                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                                                                <span>Upload file</span>
                                                                <input  @input="handleFileInput" :multiple="false" id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                            </label>
                                                            <p class="text-xs/5 text-gray-600">PNG, JPG under 10MB</p>
                                                        </div>
                                                        <p v-if="archsub"  class="pl-1">File uploaded: {{ archsub }}</p>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="buscatego" >
                                <div v-if="buscatego" class="mt-3 text-center sm:mt-5">
                                    <div style="display: flex; width: 100%;" >
                                        <div @click="buscatego = false" style="    width: 9%; display: flex; justify-content: center;align-content: center; flex-direction: column;">
                                            <svg style="      width: 78px;height: 40px;  color: #225025;" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                            </svg>

                                        </div>
                                        <DialogTitle as="h3" class=" w-full text-base font-semibold leading-6 text-gray-900">Search category</DialogTitle>
                                    </div>

                                    <div class="mt-2">
                                        <div style="display: flex;  margin-top: 20px;  justify-content: center;  ">

                                            <div style="    width: 65%; display: flex; justify-content: center;align-content: center; flex-direction: column;">
                                                <label for="location" class="block text-sm font-medium leading-6 text-gray-900  text-left">Search by category</label>

                                                <input @keyup.enter="Filtrar_por_catego()" v-model="filtro_name_category" id="search-field" style="width: 100%;     height: fit-content;     align-items: flex-end;" class="block w-full rounded-full border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6" placeholder="Category name" type="search" name="search" />
                                            </div>
                                            <div  class="w-[25%] mx-3  flex items-end gap-[15px]">
                                                <div style=" width: 300px;  display: flex; justify-content: center; align-items: flex-end;">
                                                    <div style="    display: flex; align-items: flex-end;  justify-content: center;    width: 100%;  " class=" sm:mt-0 sm:flex-none">
                                                        <button @click="Filtrar_por_catego()"  type="button" class=" w-full block rounded-md bg-redppa px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-redppahv focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Search</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="mt-8 flow-root">
                                            <div class="-mx-4 -my-2 overflow-x-visible sm:-mx-6 lg:-mx-8">
                                            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" style="min-height: 40vh;">
                                                <ul>
                                                    <li 
                                                        v-for="item in categorias" 
                                                        :key="item.id" 
                                                        :class="{ 'bg-[#7ba07d] border-3 border-custom-redppa': selectedItem === item.id }" 
                                                        class="flex justify-between items-center p-4 border-b border-gray-300"
                                                        style="border-radius: 10px;"
                                                    >
                                                        <span>{{ item.name }}</span>
                                                        <button 
                                                            @click="selectItem(item)" 
                                                            class="px-4 py-2 bg-[#225025] text-white rounded hover:bg-black"
                                                        >
                                                        Select
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-if="selectedItem_name && buscatego" style="    display: flex;justify-content: space-around;     margin-bottom: 35px;" class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-1 sm:gap-3">
                                 <h1 style="    font-size: 16px; font-weight: 600;">
                                    Selected category: {{  selectedItem_name }}
                                 </h1>
                            </div>
                            <div v-if="buscatego"  class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button   v-if="!userAdd.categorianame " type="button" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="guardar_catego()">Save</button>
                                <button v-if="userAdd.categorianame"  type="button" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="guardar_catego()">
                                    change category
                                </button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="buscatego = false , selectedItem = 0 , selectedItem_name = ''" ref="cancelButtonRef">Cancel</button>
                            </div>
                            <div v-if="!buscatego" class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                                <button type="button" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="guardarDatos()">Save</button>
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="open = false " ref="cancelButtonRef">Cancel</button>
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
                                    <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900"></DialogTitle>
                                    <div class="mt-2">
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="name" class="block text-sm font-medium leading-6 text-gray-900 text-left">Name(s):</label>
                                                <div class="relative mt-2">
                                                    <input type="text" name="first_name" id="first_name" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Enter you name(s)" v-model="userEdit.first_name" disabled/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">High:  (In)</label>
                                                <div class="relative mt-2">
                                                    <input type="number" name="precio" id="precio" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="userEdit.alto" disabled/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">Broad  (In):</label>
                                                <div class="relative mt-2">
                                                    <input type="number" name="precio" id="precio" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="userEdit.ancho" disabled/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="precio" class="block text-sm font-medium leading-6 text-gray-900 text-left">Price:</label>
                                                <div class="relative mt-2">
                                                    <input type="number" name="precio" id="precio" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="userEdit.precio" disabled/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div class="relative mt-2 w-1/2 max-2xl:mt-6">
                                                <Listbox as="div" v-model.number="userEdit.categoria" disabled>
                                                    <ListboxLabel class="block text-sm font-medium leading-6 text-gray-900">Category:</ListboxLabel>
                                                    <div class="relative mt-2">
                                                        <ListboxButton class="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-redppa sm:text-sm sm:leading-6">
                                                            <!-- Muestra el nombre de la categoría seleccionada -->
                                                            <span class="block truncate">
                                                                {{ getCategoriaName(userEdit.categoria) }}
                                                            </span>
                                                            <span class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                                                                <ChevronUpDownIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                                            </span>
                                                        </ListboxButton>

                                                        <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                            <ListboxOptions class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                                                <ListboxOption as="template" v-for="st in categorias" :key="st.id" :value="st.id" v-slot="{ active, selected }">
                                                                    <li :class="[active ? 'bg-redppa text-white' : 'text-gray-900', 'relative cursor-default select-none py-2 pl-8 pr-4']">
                                                                        <span :class="[active ? 'font-semibold' : 'font-normal', 'block truncate']">{{ st.name }}</span>
                                                                    </li>
                                                                </ListboxOption>
                                                            </ListboxOptions>
                                                        </transition>
                                                    </div>
                                                </Listbox>
                                            </div>
                                        </div>
                                        <div class="py-6 flex justify-center flex-col">
                                            <p class="mt-2 text-lg font-semibold text-gray-900">Current image:</p>
                                            <img
                                            v-if="imagePreview"
                                            :src="imagePreview"
                                            alt="Vista previa"
                                            class="max-h-40 border-4 border-gray-300 mx-auto rounded-full"
                                            />
                                        </div>
                                        <!-- <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center ">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <div class="col-span-full">
                                                    <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Image</label>
                                                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                    <div class="text-center">
                                                        <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                                                        <div v-if="!archsub"  class="mt-4 flex flex-col text-sm/6 text-gray-600">
                                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                                                                <span>Upload file</span>
                                                                <input  @input="handleFileInputEdit" :multiple="false" id="file-upload" name="file-upload" type="file" class="sr-only"  disabled/>
                                                            </label>
                                                            <p class="text-xs/5 text-gray-600">PNG, JPG under 10MB</p>

                                                        </div>
                                                        <p v-if="archsub"  class="pl-1">File uploaded: {{ archsub }}</p>

                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div> -->

                                    </div>
                                </div>
                            </div>
                            <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense  sm:gap-3">
                                <!-- <button type="button" class="inline-flex w-full justify-center rounded-md bg-redppa px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="actualizarDatos()">Save</button> -->
                                <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="openEdit = false; archsub = ''" ref="cancelButtonRef">Cancel</button>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
   </template>
<script setup>
    import BocabularioServices from '@/services/BocabularioServices'
    // import CatalogsServices from '@/services/CatalogsServices';
    // import { ref } from 'vue'
    // import { Switch } from '@headlessui/vue'
    // import { ChevronDownIcon } from '@heroicons/vue/20/solid'
    // import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    // import { PhotoIcon } from '@heroicons/vue/24/solid'
    // import { ChevronUpDownIcon, CheckIcon} from '@heroicons/vue/20/solid'
    // import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
    // import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
    // import { URL_API } from '@/boot/axios';

</script>
<script>

export default {
    name: 'bocabularioIndex',
    data () {
        return {
			tipoUsuario: null,
			paginaactual: 1,
			archsub: '',
			filtro_name: '',
			arch_tipo_usr: 1,
			crear_time: null,
            imagePreview: null,
            contador: 0,
            next: null,
            previous: null,
            switchesState: {},
            UsrStaff: [],
            enabled: false,
            buscatego: false,
            aparesin_filt: false,
            open: false,
            openEdit: false,
            openPass: false,
            intervaloCl: null,
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
        }
    },
    mounted() {
        this.tipoUsuario = this.$store.state.user.type
        console.log('tipoUsuario',this.tipoUsuario);
        
        this.getstaff()
        // this.getcategorias()
    },
    methods: {
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
                this.userAdd.file = file; // Guarda el archivo en la variable v-model
                this.archsub = file.name; // Guarda el nombre del archivo en la variable archsub
            } else {
                this.userAdd.file = null;
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
            this.userAdd = {
                first_name: '',
                fileurl: '',
                precio: 0,
                file: null,
            },
            this.archsub = ''
        },
        editarAdmin(cl) {
            console.log(cl)
            this.openEdit = true
            this.imagePreview = cl.img
            this.archsub = ''
            this.userEdit = {
                id: cl.id,
                categoria: cl.category,
                first_name: cl.name,
                ancho: cl.ancho,
                alto: cl.alto,
                file: cl.img,
                precio: cl.price,
                irl: cl.img,
            }
        },
        actualizarDatos() {
            if (this.userEdit.file == null) {
                this.$swal({
                    icon: 'error',
                    title: 'Upload a file'
                });
                return;
            }
            if (this.userEdit.first_name == null) {
                this.$swal({
                    icon: 'error',
                    title: 'Enter a name'
                });
                return;
            }
            if (this.userEdit.precio == null) {
                this.$swal({
                    icon: 'error',
                    title: 'Enter a price'
                });
                return;
            }

            // Crear un FormData para enviar el archivo
            if (this.archsub === '') {
                let loader = this.$loading.show({
                    canCancel: false,
                    loader: 'bars'
                });

                // Llamar a la API para crear el asset
                CatalogsServices.updateAssets(this.userEdit).then(response => {
                    loader.hide()
                    this.$swal({
                        icon: 'success',
                        title: 'Asset updated successfully',
                        timer: 2000
                    });
                    this.openEdit = false
                    this.getstaff();
                }).catch(error => {
                    loader.hide()
                    this.$swal({
                        icon: 'error',
                        title: 'Verify your information'
                    });
                });
            }
            else{
                const formData = new FormData();
                formData.append('file', this.userEdit.file);
                CatalogsServices.verificarfile(formData)
                    .then(response => {
                        if (!response.data.url) {
                            throw new Error('The API did not return a valid URL');
                        }

                        this.userEdit.fileurl = response.data.url;
                        this.userEdit.base64 = response.data.base64;

                        let loader = this.$loading.show({
                            canCancel: false,
                            loader: 'bars'
                        });

                        // Llamar a la API para crear el asset
                        CatalogsServices.updateAssets(this.userEdit).then(response => {
                            loader.hide()
                            this.$swal({
                                icon: 'success',
                                title: 'Asset updated successfully',
                                timer: 2000
                            });
                            this.openEdit = false
                            this.getstaff();
                        }).catch(error => {
                            loader.hide()
                            this.$swal({
                                icon: 'error',
                                title: 'Verify your information'
                            });
                        });
                    })
                    .catch(error => {
                        this.$swal({
                            icon: 'error',
                            title: 'Uploaded files are corrupted'
                        });
                    });
            }
        },
        guardarDatos() {
            if (this.userAdd.file == null) {
                this.$swal({
                    icon: 'error',
                    title: 'Upload a file'
                });
                return;
            }
            if (this.userAdd.first_name == null) {
                this.$swal({
                    icon: 'error',
                    title: 'Enter a name'
                });
                return;
            }
            if (this.userAdd.precio == null) {
                this.$swal({
                    icon: 'error',
                    title: 'Enter a price'
                });
                return;
            }

            // Crear un FormData para enviar el archivo
            const formData = new FormData();
            formData.append('file', this.userAdd.file);

            // Llamar a la API para verificar el archivo
            CatalogsServices.verificarfile(formData)
                .then(response => {
                    if (!response.data.url) {
                        throw new Error('The API did not return a valid URL');
                    }

                    this.userAdd.fileurl = response.data.url;
                    this.userAdd.base64 = response.data.base64;

                    let loader = this.$loading.show({
                        canCancel: false,
                        loader: 'bars'
                    });

                    // Llamar a la API para crear el asset
                    assetsServices.crearasset(this.userAdd)
                        .then(response => {
                            loader.hide();
                            this.$swal({
                                icon: 'success',
                                title: 'Asset created successfully',
                                timer: 2000
                            });
                            this.open = false;
                            this.archsub = ''
                            this.getstaff();
                        })
                        .catch(error => {
                            loader.hide();
                            this.$swal({
                                icon: 'error',
                                title: 'Verify your information'
                            });
                        });
                })
                .catch(error => {
                    this.$swal({
                        icon: 'error',
                        title: 'Uploaded files are corrupted'
                    });
                });
        },
        getstaff(page) {
            let loader = this.$loading.show({
                canCancel: false,
                loader: 'bars'
            });
            BocabularioServices.getabecedario(
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