import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; //ruta (URL) Buton de Regist

import { FormsModule } from '@angular/forms'; // Para capturar loginData
import { Router } from '@angular/router'; // Para el this.router.navigate
import { Usuario } from '../../services/usuario'; // Tu servicio conectado al puerto 2025
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule, 
    RouterModule,
    MatButtonModule,
    FormsModule,
            
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  hide = true;

// Objeto para capturar lo que el usuario escribe
  loginData = {
    usuario: '',
    contrasena: ''
  };

  // Inyectamos las dependencias en el constructor
  constructor(
    private usuarioService: Usuario, 
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  //mensafe con estilo 
 validarLogin() {
    // 1. Verificamos que los campos no estén vacíos antes de molestar al servidor
    if (!this.loginData.usuario || !this.loginData.contrasena) {
      this._snackBar.open('⚠️ DEBE INGRESAR USUARIO Y CONTRASEÑA', 'Cerrar', {
        duration: 3000,
        panelClass: ['snackbar-error']
      });
      return; // Aquí se detiene, no continúa
    }

    // 2. Intentamos conectar con el backend (Spring Boot)
    this.usuarioService.login(this.loginData).subscribe({
      next: (user: any) => {
        // Solo si los datos coinciden en la base de datos:
        this._snackBar.open('✅ ¡CORRECTO! BIENVENIDO AL SISTEMA', 'Cerrar', {
          duration: 2500,
          verticalPosition: 'top',
          panelClass: ['snackbar-exito']
        });
        this.router.navigate(['/inicio']); // Redirige solo al tener éxito
      },
      error: (err: any) => {
        // Si el servidor responde que los datos están mal o no hay conexión:
        this._snackBar.open('❌ USUARIO O CONTRASEÑA INCORRECTOS', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'top',
          panelClass: ['snackbar-error']
        });
        // NO hay redirección, se queda en la pantalla de login
      }
    });
  }





}
