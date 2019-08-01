import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'change-detection';
  public value = 0;
  public addValue = 0;
  add() {
    this.addValue = this.value;
  }
}
