<template>
    <div class="px-4 sm:px-6 lg:px-8 mt-10">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Gestión de Tareas</h1>
          <p class="mt-2 text-sm text-black">Administra las tareas y asígnalas a diferentes grupos y grados.</p>
        </div>
        <div class="mt-4 sm:flex-none">
          <div class="flex gap-2">
            <div class="relative">
              <input 
                type="text" 
                v-model="filtro_name" 
                @keyup.enter="buscarTareas()"
                placeholder="Buscar tareas..." 
                class="block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-black sm:text-sm sm:leading-6"
              />
            </div>
            <button 
              @click="buscarTareas()" 
              type="button" 
              class="block rounded-md bg-gray-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
            >
              Buscar
            </button>
            <button 
              @click="refrescarTareas()" 
              type="button" 
              class="block rounded-md bg-blue-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Refrescar
            </button>
            <button @click="openCreate()" type="button" class="block rounded-md bg-black px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Crear nueva tarea</button>
          </div>
        </div>
      </div>
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-visible sm:-mx-6 lg:-mx-8">
          <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" style="min-height: 75vh;">
            <table class="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                    <th scope="col" class="py-4 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Título</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Descripción</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Fecha de entrega</th>
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Grupos asignados</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">Acciones</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="tarea in tareas" :key="tarea.id">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-900 font-medium">{{ tarea.titulo }}</td>
                  <td class="px-3 py-4 text-sm text-left text-gray-500">{{ tarea.descripcion }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">{{ formatearFecha(tarea.fecha_entrega) }}</td>
                  <td class="px-3 py-4 text-sm text-left text-gray-500">
                    <span v-for="grupo in tarea.grupos_asignados" :key="grupo.id" class="inline-flex rounded-full bg-blue-100 px-2 text-xs font-semibold leading-5 text-blue-800 mr-1">
                      {{ grupo.nombre }}
                    </span>
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-center text-sm font-medium sm:pr-6">
                    <Menu as="div" class="relative inline-block text-left">
                        <div>
                            <MenuButton class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                Acciones
                                <ChevronDownIcon class="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                            <MenuItems class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <div class="py-1">
                                    <MenuItem v-slot="{ active }">
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="editarTarea(tarea)">Editar</div>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="asignarTarea(tarea)">Asignar a grupos</div>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }">
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="eliminarTarea(tarea.id)">Eliminar</div>
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
                    Página 
                    {{ paginaactual }}
                    <span class="font-medium">de</span>
                    {{ calcularTotalPaginas(contador) }}
                </p>
                </div>
                <div class="flex flex-1 justify-between sm:justify-end">
                <div @click="previousPage()" class="relative inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0" v-if="previous">Anterior</div>
                <div @click="nextPage()" class="relative ml-3 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-offset-0" v-if="next">Siguiente</div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal para crear/editar tarea -->
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-50" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center sm:p-0 max-2xl:items-center">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-10/12 sm:max-w-4xl sm:p-6 max-md:w-11/12 scroll" style="max-height: 90vh; overflow-y: scroll;">
                        <div>
                            <div class="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">{{ modoEdicion ? 'Editar Tarea' : 'Nueva Tarea' }}</DialogTitle>
                                <div class="mt-2">
                                    <div class="space-y-4">
                                        <div class="flex flex-row gap-5 space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="titulo" class="block text-sm font-medium leading-6 text-gray-900 text-left">Título:</label>
                                                <div class="relative mt-2">
                                                    <input type="text" name="titulo" id="titulo" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="tareaForm.titulo"/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="fecha_entrega" class="block text-sm font-medium leading-6 text-gray-900 text-left">Fecha de entrega:</label>
                                                <div class="relative mt-2">
                                                    <input type="date" name="fecha_entrega" id="fecha_entrega" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" v-model="tareaForm.fecha_entrega"/>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <label for="descripcion" class="block text-sm font-medium leading-6 text-gray-900 text-left">Descripción:</label>
                                                <div class="relative mt-2">
                                                    <textarea name="descripcion" id="descripcion" rows="4" class="peer block w-full border-0 bg-gray-50 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6" placeholder="" v-model="tareaForm.descripcion"></textarea>
                                                    <div class="absolute inset-x-0 bottom-0 border-t border-gray-300 peer-focus:border-t-2 peer-focus:border-black" aria-hidden="true" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex flex-row space-x-1.5 relative w-full py-0 px-2.5 justify-between max-md:flex-col md:witdhmedium max-md:w-full items-center">
                                            <div class="flex-1 relative mt-2 max-2xl:w-full max-2xl:mt-6">
                                                <div class="col-span-full">
                                                    <label for="cover-photo" class="block text-sm/6 font-medium text-gray-900">Archivo adjunto (opcional)</label>
                                                    <div class="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                                    <div class="text-center">
                                                        <PhotoIcon class="mx-auto size-12 text-gray-300" aria-hidden="true" />
                                                        <div v-if="!archsub" class="mt-4 flex flex-col text-sm/6 text-gray-600">
                                                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 focus-within:outline-hidden hover:text-indigo-500">
                                                                <span>Subir archivo</span>
                                                                <input @input="handleFileInput" :multiple="false" id="file-upload" name="file-upload" type="file" class="sr-only" />
                                                            </label>
                                                            <p class="text-xs/5 text-gray-600">PDF, DOC, DOCX hasta 10MB</p>
                                                        </div>
                                                        <p v-if="archsub" class="pl-1">Archivo seleccionado: {{ archsub }}</p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="guardarTarea()">{{ modoEdicion ? 'Actualizar' : 'Guardar' }}</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="cerrarModal()" ref="cancelButtonRef">Cancelar</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>

    <!-- Modal para asignar tarea a grupos -->
    <TransitionRoot as="template" :show="openAsignar">
        <Dialog as="div" class="relative z-50" @close="openAsignar = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center sm:p-0 max-2xl:items-center">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-10/12 sm:max-w-2xl sm:p-6 max-md:w-11/12">
                        <div>
                            <div class="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Asignar Tarea a Grupos</DialogTitle>
                                <div class="mt-2">
                                    <p class="text-sm text-gray-500 mb-4">Selecciona los grupos y grados a los que quieres asignar esta tarea:</p>
                                    <div class="space-y-2 max-h-60 overflow-y-auto">
                                        <div v-for="grupo in gruposDisponibles" :key="grupo.id" class="flex items-center">
                                            <input 
                                                :id="'grupo-' + grupo.id" 
                                                type="checkbox" 
                                                :value="grupo.id" 
                                                v-model="gruposSeleccionados"
                                                class="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
                                            >
                                            <label :for="'grupo-' + grupo.id" class="ml-3 text-sm text-gray-900">
                                                {{ grupo.nombre }} - {{ grupo.grado }}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="mt-5 sm:mt-6 sm:grid sm:grid-flow-row-dense sm:grid-cols-2 sm:gap-3">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black sm:col-start-2" @click="confirmarAsignacion()">Asignar</button>
                            <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:col-start-1 sm:mt-0" @click="openAsignar = false">Cancelar</button>
                        </div>
                    </DialogPanel>
                </TransitionChild>
                </div>
            </div>
        </Dialog>
    </TransitionRoot>
</template>

<script setup>
    import TareasServices from '@/services/TareasServices'
    import { ChevronDownIcon } from '@heroicons/vue/20/solid'
    import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import { PhotoIcon } from '@heroicons/vue/24/solid'
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
</script>

<script>
export default {
    name: 'tareasMaestroIndex',
    data () {
        return {
			tipoUsuario: null,
			paginaactual: 1,
			archsub: '',
			filtro_name: '',
            contador: 0,
            next: null,
            previous: null,
            tareas: [],
            open: false,
            openAsignar: false,
            modoEdicion: false,
            tareaSeleccionada: null,
            gruposDisponibles: [],
            gruposSeleccionados: [],
            tareaForm: {
                id: null,
                titulo: '',
                descripcion: '',
                fecha_entrega: '',
                archivo_adjunto: null
            }
        }
    },
    mounted() {
        this.tipoUsuario = this.$store.state.user.type
        console.log('tipoUsuario',this.tipoUsuario);
        this.getTareas()
        this.getGruposDisponibles()
    },
    methods: {
        formatearFecha(fecha) {
            if (!fecha) return '';
            return new Date(fecha).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
        },
        openCreate() {
            this.modoEdicion = false;
            this.tareaForm = {
                id: null,
                titulo: '',
                descripcion: '',
                fecha_entrega: '',
                archivo_adjunto: null
            };
            this.archsub = '';
            this.open = true;
        },
        editarTarea(tarea) {
            this.modoEdicion = true;
            this.tareaForm = { ...tarea };
            this.archsub = '';
            this.open = true;
        },
        asignarTarea(tarea) {
            this.tareaSeleccionada = tarea;
            this.gruposSeleccionados = tarea.grupos_asignados ? tarea.grupos_asignados.map(g => g.id) : [];
            this.openAsignar = true;
        },
        cerrarModal() {
            this.open = false;
            this.archsub = '';
            this.tareaForm = {
                id: null,
                titulo: '',
                descripcion: '',
                fecha_entrega: '',
                archivo_adjunto: null
            };
        },
        handleFileInput(event) {
            const file = event.target.files[0];
            if (file) {
                this.tareaForm.archivo_adjunto = file;
                this.archsub = file.name;
            } else {
                this.tareaForm.archivo_adjunto = null;
                this.archsub = '';
            }
        },
        guardarTarea() {
            if (!this.tareaForm.titulo.trim()) {
                this.$swal({
                    icon: 'error',
                    title: 'Por favor, ingresa un título para la tarea'
                });
                return;
            }

            const formData = new FormData();
            if (this.modoEdicion) {
                formData.append('id', this.tareaForm.id);
            }
            formData.append('titulo', this.tareaForm.titulo);
            formData.append('descripcion', this.tareaForm.descripcion);
            formData.append('fecha_entrega', this.tareaForm.fecha_entrega);
            
            if (this.tareaForm.archivo_adjunto) {
                formData.append('archivo_adjunto', this.tareaForm.archivo_adjunto);
            }

            let loader = this.$loading.show({
                canCancel: false,
                loader: 'bars'
            });

            const apiCall = this.modoEdicion 
                ? TareasServices.updateTarea(formData)
                : TareasServices.crearTarea(formData);

            apiCall.then(response => {
                loader.hide();
                this.$swal({
                    icon: 'success',
                    title: this.modoEdicion ? 'Tarea actualizada exitosamente' : 'Tarea creada exitosamente',
                    timer: 2000
                });
                this.cerrarModal();
                this.getTareas();
            }).catch(error => {
                loader.hide();
                console.error('Error al guardar tarea:', error);
                this.$swal({
                    icon: 'error',
                    title: 'Error al guardar la tarea',
                    text: 'No se pudo conectar con el servidor. Inténtalo de nuevo.'
                });
            });
        },
        eliminarTarea(id) {
            this.$swal({
                title: '¿Estás seguro?',
                text: "¡No podrás revertir esta acción!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
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
                    TareasServices.deleteTarea({id: id}).then(response => {
                        loader.hide()
                        this.$swal({
                            icon: 'success',
                            title: 'Tarea eliminada exitosamente',
                            timer: 2000
                        });
                        this.getTareas();
                    }).catch(error => {
                        loader.hide()
                        console.log('Error al eliminar tarea:', error);
                        this.$swal({
                            icon: 'error',
                            title: 'Error al eliminar la tarea',
                            text: 'No se pudo conectar con el servidor. Inténtalo de nuevo.'
                        });
                    });
                }
            })
        },
        confirmarAsignacion() {
            if (this.gruposSeleccionados.length === 0) {
                this.$swal({
                    icon: 'error',
                    title: 'Por favor, selecciona al menos un grupo'
                });
                return;
            }

            let loader = this.$loading.show({
                canCancel: false,
                loader: 'bars'
            });

            TareasServices.asignarTarea({
                tarea_id: this.tareaSeleccionada.id,
                grupos_ids: this.gruposSeleccionados
            }).then(response => {
                loader.hide();
                this.$swal({
                    icon: 'success',
                    title: 'Tarea asignada exitosamente',
                    timer: 2000
                });
                this.openAsignar = false;
                this.getTareas();
            }).catch(error => {
                loader.hide();
                console.log('Error al asignar tarea:', error);
                this.$swal({
                    icon: 'error',
                    title: 'Error al asignar la tarea',
                    text: 'No se pudo conectar con el servidor. Inténtalo de nuevo.'
                });
            });
        },
        getGruposDisponibles() {
            TareasServices.getGruposGrados().then(response => {
                this.gruposDisponibles = response.data;
            }).catch(error => {
                console.log('Error al obtener grupos:', error);
                // Fallback to mock data if API fails
                this.gruposDisponibles = [
                    { id: 1, nombre: "Grupo A", grado: "5to grado" },
                    { id: 2, nombre: "Grupo B", grado: "5to grado" },
                    { id: 3, nombre: "Grupo C", grado: "6to grado" },
                    { id: 4, nombre: "Grupo D", grado: "6to grado" },
                    { id: 5, nombre: "Grupo E", grado: "7mo grado" }
                ];
                this.$swal({
                    icon: 'warning',
                    title: 'Usando datos de ejemplo',
                    text: 'No se pudo cargar los grupos desde el servidor. Mostrando datos de ejemplo.',
                    timer: 3000
                });
            });
        },
        refrescarTareas() {
            this.filtro_name = '';
            this.paginaactual = 1;
            this.getTareas();
            this.getGruposDisponibles();
        },
        buscarTareas() {
            this.paginaactual = 1;
            this.getTareas();
        },
        getTareas(page) {
            let loader = this.$loading.show({
                canCancel: false,
                loader: 'bars'
            });
            TareasServices.getTareas(
                {
                    page: page,
                    titulo: this.filtro_name
                }
            ).then(response => {
                loader.hide()
                this.contador = response.data.count;
                this.tareas = response.data.results
                console.log(this.tareas)
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
            }).catch(error => {
                console.log('Error al cargar tareas:', error)
                loader.hide()
                // Fallback to mock data if API fails
                this.contador = 3;
                this.tareas = [
                    {
                        id: 1,
                        titulo: "Práctica de vocabulario: La familia",
                        descripcion: "Completar los ejercicios del libro páginas 15-18 sobre vocabulario de la familia",
                        fecha_entrega: "2024-01-15",
                        grupos_asignados: [
                            { id: 1, nombre: "Grupo A", grado: "5to grado" },
                            { id: 2, nombre: "Grupo B", grado: "5to grado" }
                        ]
                    },
                    {
                        id: 2,
                        titulo: "Ejercicios de pronunciación",
                        descripcion: "Grabar un audio de 2 minutos practicando la pronunciación de las palabras nuevas",
                        fecha_entrega: "2024-01-10",
                        grupos_asignados: [
                            { id: 3, nombre: "Grupo C", grado: "6to grado" }
                        ]
                    },
                    {
                        id: 3,
                        titulo: "Escribir una composición",
                        descripcion: "Escribir una composición de 200 palabras sobre tu rutina diaria usando el presente simple",
                        fecha_entrega: "2024-01-20",
                        grupos_asignados: [
                            { id: 1, nombre: "Grupo A", grado: "5to grado" },
                            { id: 3, nombre: "Grupo C", grado: "6to grado" }
                        ]
                    }
                ];
                this.next = null;
                this.previous = null;
                this.$swal({
                    icon: 'warning',
                    title: 'Usando datos de ejemplo',
                    text: 'No se pudo conectar con el servidor. Mostrando datos de ejemplo.',
                    timer: 3000
                });
            })
        },
        calcularTotalPaginas(total) {
			return Math.ceil(total / 10);
		},
		nextPage() {
			this.paginaactual = this.paginaactual + 1;
			this.getTareas(this.next);
		},
		previousPage() {
			this.paginaactual = this.paginaactual - 1;
			this.getTareas(this.previous);
		},
    }
}
</script>