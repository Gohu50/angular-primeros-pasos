import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[]=[{
    name: 'Trunk',
    power: 10
  }];

  @Output()
  public onDeleteID: EventEmitter<string>= new EventEmitter();

  // onDeleteId(index:number):void{
  //   console.log(index);
  // }

  onDeleteCharacter(id?:string):void{
    if(!id) return;

    console.log({id});
    this.onDeleteID.emit(id);
  }






}
