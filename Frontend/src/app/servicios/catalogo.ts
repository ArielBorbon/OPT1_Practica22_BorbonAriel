import { computed, Service, signal } from '@angular/core';
import { Categoria, Clase, Sobre } from '../modelos/clase';
import { CLASES_LOCALES } from '../datos/clases-locales';
import { httpResource } from '@angular/common/http';
import { API_URL } from '../config';

@Service()
export class Catalogo {

    private readonly recurso = httpResource<Sobre<Clase[]>>(() => `${API_URL}/clases`);

    private readonly clases = computed(() => this.recurso.value()?.data ?? []);

    readonly cargando = computed(() => this.recurso.isLoading());

    readonly error = computed(() => this.recurso.error() ?? null);

    readonly categoria = signal<Categoria | "todas">("todas");

    readonly seleccionada = signal<Clase | null>(null);

    readonly visibles = computed(() => {
        const categoria = this.categoria();
        const todas = this.clases();
        return categoria === "todas" ? todas : todas.filter(clase => clase.categoria === categoria);
    });

    readonly minutosTotales = computed(() => this.visibles().reduce((total, clase) => total + clase.duracionMin, 0));

    filtrar(categoria: Categoria | "todas"): void {
        this.categoria.set(categoria);
        const elegida = this.seleccionada();

        if (elegida && categoria !== "todas" && elegida.categoria !== categoria) {
            this.seleccionada.set(null);
        }
    }


    seleccionar(clase: Clase): void {
        //Set reemplaza el valor de la variable, el update hace lo mismo pero tiene acceso a la variable actual
        this.seleccionada.update((actual) => actual === clase ? null : clase);
    }


    recargar(): void {
        this.seleccionada.set(null);
        this.recurso.reload();
    }




}
