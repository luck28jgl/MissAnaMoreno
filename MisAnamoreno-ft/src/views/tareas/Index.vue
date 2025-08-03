<template>
    <div class="px-4 sm:px-6 lg:px-8 mt-10">
      <div class="sm:flex sm:items-center">
        <div class="sm:flex-auto">
          <h1 class="text-base font-semibold leading-6 text-gray-900">Mis Tareas</h1>
          <p class="mt-2 text-sm text-black">Estas son las tareas que te han sido asignadas.</p>
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
                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Estado</th>
                    <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">Acciones</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200">
                <tr v-for="tarea in tareasAsignadas" :key="tarea.id">
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-900 font-medium">{{ tarea.titulo }}</td>
                  <td class="px-3 py-4 text-sm text-left text-gray-500">{{ tarea.descripcion }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-left text-gray-500">{{ formatearFecha(tarea.fecha_entrega) }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-left">
                    <span :class="[tarea.completada ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800', 'inline-flex rounded-full px-2 text-xs font-semibold leading-5']">
                      {{ tarea.completada ? 'Completada' : 'Pendiente' }}
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
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="verDetalleTarea(tarea)">Ver detalles</div>
                                    </MenuItem>
                                    <MenuItem v-slot="{ active }" v-if="!tarea.completada">
                                        <div :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm cursor-pointer']" @click="marcarCompletada(tarea)">Marcar como completada</div>
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
    
    <!-- Modal para ver detalles de la tarea -->
    <TransitionRoot as="template" :show="openDetalle">
        <Dialog as="div" class="relative z-50" @close="openDetalle = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center max-sm:items-center sm:p-0 max-2xl:items-center">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-10/12 sm:max-w-4xl sm:p-6 max-md:w-11/12 scroll" style="max-height: 90vh; overflow-y: scroll;">
                        <div>
                            <div class="mt-3 text-center sm:mt-5">
                                <DialogTitle as="h3" class="text-base font-semibold leading-6 text-gray-900">Detalles de la Tarea</DialogTitle>
                                <div class="mt-2">
                                    <div class="space-y-4">
                                        <div class="text-left">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Título:</label>
                                            <p class="mt-1 text-sm text-gray-900">{{ tareaDetalle.titulo }}</p>
                                        </div>
                                        <div class="text-left">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Descripción:</label>
                                            <p class="mt-1 text-sm text-gray-900">{{ tareaDetalle.descripcion }}</p>
                                        </div>
                                        <div class="text-left">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Fecha de entrega:</label>
                                            <p class="mt-1 text-sm text-gray-900">{{ formatearFecha(tareaDetalle.fecha_entrega) }}</p>
                                        </div>
                                        <div class="text-left">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Estado:</label>
                                            <span :class="[tareaDetalle.completada ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800', 'inline-flex rounded-full px-2 text-xs font-semibold leading-5 mt-1']">
                                              {{ tareaDetalle.completada ? 'Completada' : 'Pendiente' }}
                                            </span>
                                        </div>
                                        <div v-if="tareaDetalle.archivo_adjunto" class="text-left">
                                            <label class="block text-sm font-medium leading-6 text-gray-900">Archivo adjunto:</label>
                                            <a :href="tareaDetalle.archivo_adjunto" target="_blank" class="mt-1 text-sm text-blue-600 hover:text-blue-800">Ver archivo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black" @click="openDetalle = false">Cerrar</button>
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
    import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from '@headlessui/vue'
</script>
<script>

export default {
    name: 'misTareasIndex',
    data () {
        return {
			tipoUsuario: null,
			paginaactual: 1,
			filtro_name: '',
            contador: 0,
            next: null,
            previous: null,
            tareasAsignadas: [],
            openDetalle: false,
            tareaDetalle: {
                id: 0,
                titulo: '',
                descripcion: '',
                fecha_entrega: '',
                completada: false,
                archivo_adjunto: null
            }
        }
    },
    mounted() {
        this.tipoUsuario = this.$store.state.user.type
        console.log('tipoUsuario',this.tipoUsuario);
        this.getTareasAsignadas()
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
        verDetalleTarea(tarea) {
            this.tareaDetalle = { ...tarea };
            this.openDetalle = true;
        },
        marcarCompletada(tarea) {
            this.$swal({
                title: '¿Estás seguro?',
                text: "¿Quieres marcar esta tarea como completada?",
                icon: 'question',
                showCancelButton: true,
                confirmButtonText: 'Sí, completar',
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
                    TareasServices.completarTarea({id: tarea.id}).then(response => {
                        loader.hide()
                        this.$swal({
                            icon: 'success',
                            title: 'Tarea marcada como completada',
                            timer: 2000
                        });
                        this.getTareasAsignadas();
                    }).catch(error => {
                        loader.hide()
                        this.$swal({
                            icon: 'error',
                            title: 'Error al completar la tarea'
                        });
                    });
                }
            })
        },
        getTareasAsignadas(page) {
            // Mock data for demonstration
            this.contador = 5;
            this.tareasAsignadas = [
                {
                    id: 1,
                    titulo: "Práctica de vocabulario: La familia",
                    descripcion: "Completar los ejercicios del libro páginas 15-18 sobre vocabulario de la familia",
                    fecha_entrega: "2024-01-15",
                    completada: false,
                    archivo_adjunto: null
                },
                {
                    id: 2,
                    titulo: "Ejercicios de pronunciación",
                    descripcion: "Grabar un audio de 2 minutos practicando la pronunciación de las palabras nuevas",
                    fecha_entrega: "2024-01-10",
                    completada: true,
                    archivo_adjunto: "/files/audio_guide.mp3"
                },
                {
                    id: 3,
                    titulo: "Escribir una composición",
                    descripcion: "Escribir una composición de 200 palabras sobre tu rutina diaria usando el presente simple",
                    fecha_entrega: "2024-01-20",
                    completada: false,
                    archivo_adjunto: null
                }
            ];
            this.next = null;
            this.previous = null;
            
            /* Original API call - uncomment when backend is ready
            let loader = this.$loading.show({
                canCancel: false,
                loader: 'bars'
            });
            TareasServices.getTareasAsignadas(
                {
                    page: page,
                    titulo: this.filtro_name
                }
            ).then(response => {
                loader.hide()
                this.contador = response.data.count;
                this.tareasAsignadas = response.data.results
                console.log(this.tareasAsignadas)
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
            */
        },
        calcularTotalPaginas(total) {
			return Math.ceil(total / 10);
		},
		nextPage() {
			this.paginaactual = this.paginaactual + 1;
			this.getTareasAsignadas(this.next);
		},
		previousPage() {
			this.paginaactual = this.paginaactual - 1;
			this.getTareasAsignadas(this.previous);
		},
    }
}
</script>