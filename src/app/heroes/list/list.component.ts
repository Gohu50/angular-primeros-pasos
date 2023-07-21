import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroesName : string[]= ['Spiderman','Iroman','hulk','She hulk','Thor'];
  public deleteheroe? : string ;

  removeLastHeroe():void{
    this.deleteheroe = this.heroesName.pop();

  }


}
