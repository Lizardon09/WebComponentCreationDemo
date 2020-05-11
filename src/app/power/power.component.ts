import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-power',
  template: `
    <h5>{{inputvalue}}<sup>{{powerval}}</sup> = {{total}}</h5>
  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class PowerComponent implements OnInit {

  @Input() inputvalue : number;
  @Output() result = new EventEmitter<number>();
  total : number;
  powerval : number = 2;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    this.power();
  }

  power(){
    this.total  = Math.pow(Number(this.inputvalue),this.powerval);
    this.result.emit(this.total);
  }

}
