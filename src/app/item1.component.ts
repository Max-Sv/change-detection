import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item1',
  template: `
    <p>Default</p>
    <p>{{ item1 }}</p>
  `,
  styles: ['.skill { font-size: 20px; color: #4d4dff }']
})
export class item1Component {
  @Input() add: number;
  public item1: any;
  constructor() {
    let i = 0;
    this.item1 = 0;
  }

  ngOnChanges() {
    setInterval(() => this.item1, 100);
  }
  ngDoCheck() {
    setInterval(() => this.item1, 100);
  }
}
