import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {

    transform(lista: any[], texto: string): any[] {
    //se pregunta si el texto es vacio que devuelva la lista objeto
    if(!texto) return lista;

    return lista.filter(heroe => heroe.nombre.toLowerCase().includes(texto.toLowerCase()))

    
    }
}
