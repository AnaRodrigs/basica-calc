import { Component } from '@angular/core';

@Component({
  selector: 'app-basic-calc',
  templateUrl: './basic-calc.component.html',
  styleUrls: ['./basic-calc.component.css']
})
export class BasicCalcComponent {
  numb1: number = 0;
  numb2 : number =0;
  resultado : number =0;
  mensagem : string = "";

  calculo (op : string){
 if (op ==='+'){
  this.resultado = this.numb1 + this.numb2;
 }
 else if (op === '-'){
  this.resultado = this.numb1 - this.numb2;
 }
 else if (op === '*'){
  this.resultado = this.numb1 * this.numb2;
 }
 else if (op === '%'){
 this.resultado = this.numb1 / this.numb2;
 }
 else {
 this.mensagem = "preencha corretamente os campos";
 }
  }
}
