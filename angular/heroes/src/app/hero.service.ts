import { Injectable } from '@angular/core';
import { Heroes } from './heroes/mocks/Hero.mocks';
import { Hero } from './Hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  getHeroes(): Hero[] {
    return Heroes
  }
}
