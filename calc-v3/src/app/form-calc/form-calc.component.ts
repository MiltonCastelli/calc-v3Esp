import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrls: ['./form-calc.component.css']
})
export class FormCalcComponent {
num1: number = 0;
num2: number = 0;
sum:  number = 0;
sub:  number = 0;
div:  number = 0;
mult:  number = 0;

onClickSum(){
  this.sum = this.num1 + this.num2;
}
onClickSub(){
  this.sub = this.num1 - this.num2;
}
onClickDiv(){
  this.div = this.num1 / this.num2;
}
onClickMult(){
  this.mult = this.num1 * this.num2;
}

}
