import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { Router } from '@angular/router';


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {

    //creamos un arreglo
    heroes:any[] = [];

    //aca estamos llamando al constructor de la clase
    constructor(public _heroesService:HeroesService, private router:Router) {}
  
    //se utiliza cuando la pagina esta renderizada 
    ngOnInit(){
        this.heroes = this._heroesService.getHeroes();
    }

    verHeroe(valor:number){
        console.log(valor);
        this.router.navigate(['/heroe', valor]);
    }

}
