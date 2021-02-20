import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero, HeroesList } from './heroes/mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor(private messageService: MessageService) {}
  getHero(id: number): Observable<Hero | undefined> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HeroesList.find((hero) => hero.id === id));
  }
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HeroesList);
    this.messageService.add('HeroService: fetched heroes');

    return heroes;
  }
}
