import { Component, Input } from '@angular/core';

import { Hero } from './hero';

@Component({
  selector: 'hero-detail',
  template: `
<div *ngIf="hero">
  <h2>{{hero.title}} details!</h2>
  <div><label>time: </label>{{hero.time}}</div>
  <div><label>place: </label>{{hero.time}}</div>
  <div><label>type: </label>{{hero.time}}</div>
  <div><label>title: </label>{{hero.time}}</div>
  <div><label>kbou: </label>{{hero.authorName}}</div>
  <div><label>name: </label>{{hero.authorName}}</div>
  <div><label>date: </label>{{hero.date}}</div>
  <div><label>id: </label>{{hero.pid}}</div>
</div>
  `
})
export class HeroDetailComponent {
  @Input() hero: Hero;
}
