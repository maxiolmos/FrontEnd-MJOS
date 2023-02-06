import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Cursos } from '../model/cursos';

@Injectable({
  providedIn: 'root'
})

export class CursosService {

  URL = Environment.URL + 'cursos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Cursos[]>{
    return this.httpClient.get<Cursos[]>(this.URL + 'lista');
  }

  public detail(id:number): Observable<Cursos>{
    return this.httpClient.get<Cursos>(this.URL + `detail/${id}`);
  }

  public save(cursos: Cursos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', cursos);
  }

  public update(id: number, cursos: Cursos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, cursos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }


}
