import { Component } from "@angular/core";


@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>
    <button (click)="increase_counter(+1)">+1</button>
    <button (click)="reset()" >reset</button>
    <button (click)="descrease_counter(-1)">-1</button>
  `
})
export class CounterComponent{
  public counter: number = 0;

  increase_counter(value: number):void {
    this.counter += value
  }
  reset(): void {
    this.counter = 0
  }
  descrease_counter(value: number):void {
    this.counter += value
  }

}
