import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button (click)="handleClick()">{{label}}<button>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom 
})
export class ButtonComponent implements OnInit {

  @Input() label: string;
  @Output() action = new EventEmitter();

  private numberOfClicks = 0;

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.numberOfClicks++;
    this.action.emit(this.numberOfClicks);
  }

}
