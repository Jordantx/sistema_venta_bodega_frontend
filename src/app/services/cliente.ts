import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class Cliente {
  // URL de tu API en Spring Boot
  private url = 'http://localhost:2025/bodega/api/clientes';

  constructor(private http: HttpClient) { }

  // Método para enviar los datos del formulario
  public registrar(cliente: any): Observable<any> {
    return this.http.post(this.url, cliente);
  }
}
