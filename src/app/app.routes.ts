import { Routes } from '@angular/router';
import { Login } from './components/login/login'; // Apuntamos al archivo login.ts que ya tienes
import { Registro } from './components/registro/registro';
import {  Inicio} from './components/inicio/inicio'
import {  RegistroClientes} from './components/registro-clientes/registro-clientes';; // Apuntamos al archivo login.ts que ya tienes

export const routes: Routes = [
    { path: 'login', component: Login },
    { path: 'registro', component: Registro },
    { path: 'inicio', component: Inicio },
    { path: 'registro-clientes', component: RegistroClientes },

    //RegistroClientes

    { path: '', redirectTo: 'login', pathMatch: 'full' },
    
];
