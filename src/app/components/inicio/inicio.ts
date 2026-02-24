import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
// Importaciones de Angular Material para el Dashboard
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { Empleado  } from '../../services/empleado'; 

@Component({
  selector: 'app-inicio',
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {
  
  empleado: any = { Empleado}; // Inicializamos para evitar errores

  ngOnInit() {
    // Recuperamos el objeto que guardamos en el Login
    const datosGuardados = localStorage.getItem('usuarioLogueado');
    if (datosGuardados) {
      this.empleado = JSON.parse(datosGuardados);
    }
  }
  constructor(private empleadoService: Empleado,
    
  ) {}

  

}
