import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Usuario {
  

  // URL exacta de tu proyecto Spring Boot
  private url = 'http://localhost:2025/bodega/api/usuarios';

  constructor(private http: HttpClient) { }
  //
  // Método para listar usuarios en tu tabla de Angular Material
  public listarTodo(): Observable<any> {
    return this.http.get(this.url);
  }

  // Método para registrar (el JSON que probamos en Swagger)
  public registrar(usuario: any): Observable<any> {
    return this.http.post(`${this.url}/registro`, usuario);
  }

  // En usuario.ts
public login(credentials: any): Observable<any> {
  // Asegúrate de que la URL sea la del puerto 2025 de tu Spring Boot
  return this.http.post(`${this.url}/login`, credentials);
}
}
