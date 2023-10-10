import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public title: string = 'ABYS';
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
