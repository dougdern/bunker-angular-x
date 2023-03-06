import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Conto } from './conto';

@Injectable({
  providedIn: 'root'
})
export class ContoService {
  private readonly API = 'http://localhost:3000/contos'
  constructor(private http: HttpClient ) { }

  listar(): Observable<Conto[]> {
    return this.http.get<Conto[]>(this.API)
  }

  criar(conto: Conto): Observable<Conto>{
    return this.http.post<Conto>(this.API, conto)
  }
  getConto(id:string){
    return this.http.get<Conto>(`http://localhost:3000/contos/${id} `)
  }

  // ler() : Observable<Conto[]>{
  //   return this.http.get<Conto[]>(this.API)
  // }

}
