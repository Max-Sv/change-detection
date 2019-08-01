import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-item2',
  template: `
    <h4>OnPush</h4>
    <p>{{ counter }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['h4 { font-size: 20px; color: #4d4dff }']
})
export class item2Component {
  @Input() value: number;
  public counter = 0;
  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }

  ngOnChanges() {
    this.counter += this.value;
  }
}
