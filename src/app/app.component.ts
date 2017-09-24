import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'app-root',
    templateUrl: './atividades.html',
    styleUrls: ['./atividades.css'],
    providers: [HeroService]
})
export class AppComponent implements OnInit {
    title = 'Tour of Heroes';
    heroes: Hero[];
    primeiro: Hero[];
    segundo: Hero[];
    terceiro: Hero[];
    selectedHero: Hero;

    constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => {
            this.heroes = heroes;
            this.primeiro = [];
            this.segundo = [];
            this.terceiro = [];
            for (let hero of heroes) {
                if (hero.date === '1') {
                    this.primeiro.push(this.traduzir(hero));
                } else if (hero.date === '2') {
                    this.segundo.push(this.traduzir(hero));
                } else {
                    this.terceiro.push(this.traduzir(hero));
                }
            }
            this.primeiro.sort(function(a, b){return parseInt(a.time) - parseInt(b.time)});
            this.segundo.sort(function(a, b){return parseInt(a.time) - parseInt(b.time)});
            this.terceiro.sort(function(a, b){return parseInt(a.time) - parseInt(b.time)});
        });
    }

    traduzir(hero: Hero): Hero {
        var original = parseInt(hero.time);
        var hour = 9;
        switch(original) {
        case 1 : hour = 9; break;
        case 2 : hour = 10; break;
        case 3 : hour = 11; break;
        case 4 : hour = 12; break;
        case 5 : hour = 13; break;
        case 6 : hour = 14; break;
        case 7 : hour = 15; break;
        case 8 : hour = 16; break;
        case 9 : hour = 17; break;
        case 10: hour = 18; break;
        case 11: hour = 19; break;
        case 12: hour = 20; break;
        case 13: hour = 21; break;
        case 20: hour = 9; break;
        case 22: hour = 19; break;
        default: hour = original;
        }
        hero.time = hour.toString();
        if (original === 20 || original === 22) {
            hero.authorId = hour + ':00 - ' + (hour+3) + ':00';
        } else {
            hero.authorId = hour + ':00 - ' + hour + ':50';
        }

        var tipo = '';
        switch(parseInt(hero.type)) {
        case 1: tipo = 'Palestra'; break;
        case 2: tipo = 'Minicurso'; break;
        case 3: tipo = 'Encontro de comunidade'; break;
        default: tipo = '';
        }
        hero.type = tipo;
        return hero;
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: Hero): void {
        this.selectedHero = hero;
    }
}
