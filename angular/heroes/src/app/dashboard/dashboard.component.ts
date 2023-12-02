import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Heroes } from '../heroes/mocks/Hero.mocks';
import { Hero } from '../Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: Hero [] = []

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesMock().subscribe(Heroes => this.heroes = Heroes.slice(1,5))
  }

}
