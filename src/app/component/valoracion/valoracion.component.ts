import { Component, OnInit } from '@angular/core';
import {Satisfaccion} from '../../interface/satisfaccion.interface';
import { SattisService } from '../../services/sattis.service'
import {map} from 'rxjs/operators'; 

@Component({
  selector: 'app-valoracion',
  templateUrl: './valoracion.component.html',
  styleUrls: ['./valoracion.component.css']
})
export class ValoracionComponent implements OnInit {
  sati:Satisfaccion={
    valoracion: null,
    comentario_NLU: null,
    cantidad: null
  }
  public Promedio
  constructor(private sattisserv:SattisService) { 
    
    this.sattisserv.getgo()
    .pipe(map(res => res.json())) 
    .subscribe(res =>{
      this.sati.cantidad = res["Cantidad"]
     this.sati.valoracion = res["Valoracion"]
     this.sati.comentario_NLU = res["Comentario_NLU"]
     console.log(this.sati);
     if(this.sati.valoracion <= 3.0){
       this.Promedio = "Mal"
     }
     if(this.sati.valoracion >= 4.0){
       this.Promedio = "Bien"
     }
     if(this.sati.valoracion >= 3.01 && this.sati.valoracion <= 3.90 ){
       this.Promedio = "Regular"
     }

   })

  }

  ngOnInit() {
  }

}
