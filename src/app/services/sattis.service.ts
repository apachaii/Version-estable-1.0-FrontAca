import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Satisfaccion} from '../interface/satisfaccion.interface';
@Injectable({
  providedIn: 'root'
})
export class SattisService {
  sati:Satisfaccion={
    valoracion: null,
    comentario_NLU: null,
    cantidad: null
  }
  gourl:string =  "http://localhost:3675/peliculas"
  constructor(private http: Http) { }
  //Peticion get de satisfaccion
  getgo(){
    return this.http.get(this.gourl)
  }
}
