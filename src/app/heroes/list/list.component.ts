import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Black panther', 'Ironman', 'Spiderman','Hulk'];

  public deletedHero?: string;
    removeLastHerp():void {
      this.deletedHero = this.heroNames.pop();
  }

}
