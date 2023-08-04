import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { API_CONFIG } from '../config/api.config';
import { Horario } from '../models/horario'

@Injectable({
  providedIn: 'root'
})

export class HorarioService {

  constructor(private http: HttpClient) { }

  findAll(): Observable<Horario[]> {
    return this.http.get<Horario[]>(`${API_CONFIG.baseUrl}/horario/lista`);
  }

  create(horario: Horario): Observable<string> {
    console.log('Enviando solicitação para:', `${API_CONFIG.baseUrl}/horario/incluir`, 'com dados:', horario);

    return this.http.post(`${API_CONFIG.baseUrl}/horario/incluir`, horario, { responseType: 'text' }).pipe(
      catchError(error => {
        console.error('Erro na solicitação:', error);
        return throwError(error);
      })
    );
  }

  update(horario: Horario): Observable<Horario> {
    return this.http.put<Horario>(`${API_CONFIG.baseUrl}/horario/${ horario.id }/alterar`, horario);
  }

  delete(id: any): Observable<Horario> {
    return this.http.delete<Horario>(`${API_CONFIG.baseUrl}/horario/${id}/excluir`);
  }
}
