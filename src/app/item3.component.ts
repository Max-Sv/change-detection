import {
  Component,
  Input,
  ChangeDetectorRef,
  ChangeDetectionStrategy
} from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-item3',
  template: `
    <h4>Default</h4>
    <p>{{ counter }}</p>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['h4 { font-size: 20px; color: #4d4dff }']
})
export class item3Component {
  @Input() value: number;
  public counter = 0;
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.counter++;
      this.ref.detectChanges();
    }, 1000);
  }
  ngOnChanges() {
    this.counter += this.value;
  }
}
