import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hello-button',
  template: `
    <button (click)="handleClick()">{{label}}<button>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HelloButtonComponent implements OnInit {

  @Input() label = 'Click Me';
  @Output() action = new EventEmitter();

  private numberOfClicks = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
    this.label = "Hello World";
  }

}
