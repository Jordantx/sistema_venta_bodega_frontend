import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //ruta (URL)
import { MatSelectModule } from '@angular/material/select'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-clientes',
  imports: [
    RouterModule,
     MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule, 
    
    MatButtonModule,
    MatSelectModule
  ],
  templateUrl: './registro-clientes.html',
  styleUrl: './registro-clientes.css',
})
export class RegistroClientes {


}
