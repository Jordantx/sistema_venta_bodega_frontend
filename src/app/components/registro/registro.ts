import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; //ruta (URL)
import { MatSelectModule } from '@angular/material/select'; // <--- El motor del selector
import { Empleado } from '../../services/empleado'; 
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';



@Component({
  selector: 'app-registro',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule, 
     RouterModule,
    MatButtonModule,
    MatSelectModule,
    MatSnackBarModule,
    FormsModule

  ],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
  
})
export class Registro {
  // Objeto que coincide con tu entidad Java
  empleado = {
    dni: '',
    nombres: '',
    apellidos: '',
    usuario: '',
    contrasena: '',
    rol: 'VENDEDOR', // Valor por defecto
    estado: 'ACTIVO'
  };
  constructor(private empleadoService: Empleado,
    private _snackBar: MatSnackBar
  ) {}



  guardar() {
  this.empleadoService.registrar(this.empleado).subscribe({
    next: (res) => {
      // 🌟 DISEÑO DE ÉXITO EN MAYÚSCULAS
      this._snackBar.open('✅ ¡PERSONAL REGISTRADO CON ÉXITO!', 'Cerrar', {
        duration: 2500,
        verticalPosition: 'top',
        panelClass: ['snackbar-exito'] // Usa la misma clase que creamos para el login
      });
      
      console.log('Respuesta del servidor:', res);
      // Opcional: Redirigir al login después de registrar
      // this.router.navigate(['/login']); 
    },
    error: (err) => {
      // DISEÑO DE ERROR
      this._snackBar.open('❌ ERROR AL REGISTRAR. REVISA LOS DATOS', 'Cerrar', {
        duration: 3000,
        verticalPosition: 'top',
        panelClass: ['snackbar-error']
      });
      console.error(err);
    }
  });
}

}
