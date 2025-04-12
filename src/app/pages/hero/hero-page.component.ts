import { Component, signal } from "@angular/core";
import { CommonModule } from '@angular/common';

@Component({
  templateUrl:"./hero-page.component.html",
  styleUrls: ["./hero-page.component.css"],
  imports: [CommonModule]
})

export class HeroPageComponent {

  name  = signal('Ironman');
  age = signal(45);


  getHeroDescription () {
    return `${this.name()} - ${this.age()}`;
 }

 changeHero () {
  this.name.set("Spiderman");
  this.age.set(22);

}

resetForm () {
  this.name.set("Ironman ");
  this.age.set(45);

}

changeAge () {
  this.age.set(60);

}


}
