import { Component } from '@angular/core';
import { Historial } from './historial.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string='Aplicación Calculadora';
  numero1:number =0;
  numero2:number =0;
  resultado:number =0;
  historial: Historial[]=[]


  sumar():void{
    this.resultado= this.numero1 + this.numero2;
  }
  restar():void{
    this.resultado= this.numero1 - this.numero2;
  }
  multiplicar():void{
    this.resultado= this.numero1 * this.numero2;
  }
  dividir():void{
    this.resultado= this.numero1 / this.numero2;
  }

}
