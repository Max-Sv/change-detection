import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-item1',
  template: `
    <h4>Default</h4>
    <p>{{ counter }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.Default,
  styles: ['h4 { font-size: 18px; color: #4d4dff }']
})
export class item1Component {
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
