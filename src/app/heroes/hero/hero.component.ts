import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

    public name: string = 'iroman';
    public age: number = 45;


get capitalizedName():string {

  //return 'Hola Mundo'.toUpperCase();
  return this.name.toUpperCase();

  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():void{
     this.name = 'Spiderman';
  }

  changeAge():void{
    this.age = 20;

  }
  resetform():void{
    this.name = 'Iroman';
    this.age = 45;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1> Desde angular</h1>'
    // });
  }

}
