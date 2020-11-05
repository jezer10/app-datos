import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Informe } from './informe';

@Injectable({
  providedIn: 'root'
})
export class InformeService {
  private httpHeaders=new HttpHeaders({'Content-Type':'application/json'});
  private urlInforme:string='http://localhost:9090/informe';
  constructor(private http:HttpClient) { }
  getInformes():Observable<Informe[]>{
    return this.http.get<Informe[]>(this.urlInforme+'/all');
  }
}
