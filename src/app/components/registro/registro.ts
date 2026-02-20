import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; //ruta (URL)
import { MatSelectModule } from '@angular/material/select'; // <--- El motor del selector
@Component({
  selector: 'app-registro',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    CommonModule, 
     RouterModule,
    MatButtonModule,
    MatSelectModule

  ],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro {

}
