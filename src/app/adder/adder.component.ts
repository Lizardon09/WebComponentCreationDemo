import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-adder',
  template: `
    <h5>{{number1}} + {{number2}} = {{total}}</h5>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AdderComponent implements OnInit {

  @Input() number1 : number;
  @Input() number2 : number;
  @Output() summationevent = new EventEmitter<number>();
  total = 0;

  constructor() {
   }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.addNumbers();
  }

  addNumbers(){
    this.total = Number(this.number1) + Number(this.number2);
    console.log("Before event emition");
    this.summationevent.emit(this.total);
  }

}
