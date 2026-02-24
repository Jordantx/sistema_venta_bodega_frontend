import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //ruta (URL)
import { MatSelectModule } from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Cliente } from '../../services/cliente';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-registro-clientes',
  imports: [
    RouterModule,
     MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule, 
    MatSnackBarModule, 
    FormsModule,
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './registro-clientes.html',
  styleUrl: './registro-clientes.css',
})
export class RegistroClientes {
  
// 1. DECLARACIÓN (Esto DEBE ir aquí arriba para que funcione en todo el archivo)
  clienteData: any = {
    dni: '',
    nombre: '',
    apellidos: '',
    telefono: ''
  };

  constructor(
    private clienteService: Cliente,
    private _snackBar: MatSnackBar
  ) { }

  guardarCliente() {
    this.clienteService.registrar(this.clienteData).subscribe({
      next: (res: any) => {
        this._snackBar.open('✅ ¡Cliente guardado con éxito!', 'Cerrar', {
          duration: 3000,
          verticalPosition: 'bottom',
          horizontalPosition: 'center',
        });
        this.limpiarFormulario(); // 👈 Ahora el error desaparecerá
      },
      error: (err: any) => {
        this._snackBar.open('❌ Error al registrar el cliente', 'Entendido');
      }
    });
  }

  // 2. FUNCIÓN DE LIMPIEZA (Asegúrate de que esté dentro de la clase)
  limpiarFormulario() {
    this.clienteData = {
      dni: '',
      nombre: '',
      apellidos: '',
      telefono: ''
    };
  }


}

