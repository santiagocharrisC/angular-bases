import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizadName(): string{
    return this.name.toUpperCase();
  }

  getHeroDescription(): string{
    return `${this.name} - ${this.age} `;
  }

  changeHero(): void{
    this.name = 'black panther'
  }
  chagenAge(): void{
    this.age = 43
  }
  restForm(): void{
    this.name='ironman';
    this.age= 45;
  }

}
