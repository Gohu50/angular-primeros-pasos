import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

  <button (click)="increment(1)">+1</button>
  <button (click)="increment(-1)">-1</button>
  <button (click)="Reset()">Reset</button>


  `
})

export class CounterComponent {
  public counter: number = 10;

  increment(value:number):void {
    this.counter += value;
  }

  Reset(){
    this.counter = 10;
  }


}
