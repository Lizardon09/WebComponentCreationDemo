import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-squareroot',
  template: `
    <h5><span>&#8730;{{inputvalue}}</span> = {{total}}</h5>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class SquarerootComponent implements OnInit {

  @Input() inputvalue : number;
  @Output() result = new EventEmitter<number>();
  total : number;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.sqrtNumber();
  }

  sqrtNumber(){
    this.total = Number((Math.sqrt(Number(this.inputvalue))).toFixed(2));
    this.result.emit(this.total);
  }

}
