import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Ironman' },
  { id: 2, name: 'Captain America' },
  { id: 3, name: 'Thor' },
  { id: 4, name: 'Hulk' },
  { id: 5, name: 'Doctor Strange' },
  { id: 6, name: 'Black widow' },
  { id: 7, name: 'Spiderman' },
  { id: 8, name: 'Black Panther' },
  { id: 9, name: 'Antman' },
  { id: 10, name: 'Hawkeye' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
