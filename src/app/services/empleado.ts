import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class Empleado {


  // 1. URL actualizada
  private url = 'http://localhost:2025/bodega/api/empleados';

  constructor(private http: HttpClient) { }

  // 2. Cambiar nombre a listarEmpleados
  public listarEmpleados(): Observable<any> {
    return this.http.get(this.url);
  }

  // 3. Cambiar parámetro a 'empleado'
  public registrar(empleado: any): Observable<any> {
    return this.http.post(`${this.url}/registro`, empleado);
  }

  // 4. El login se mantiene igual pero apunta a la nueva URL
  public login(credentials: any): Observable<any> {
    return this.http.post(`${this.url}/login`, credentials); 
  }
    
}
