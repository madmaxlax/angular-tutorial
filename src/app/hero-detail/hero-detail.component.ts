import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';
import { Hero } from './../heroes/mock-heroes';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss'],
})
export class HeroDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  @Input() hero?: Hero;

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.getHero();
  }

  save(): void {
    this.heroService.updateHero(this.hero as Hero).subscribe(() => this.goBack());
  }

  getHero(): void {
    const id = +(this.route.snapshot.paramMap.get('id') || 0);
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }
}
