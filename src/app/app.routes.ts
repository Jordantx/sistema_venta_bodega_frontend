import { Routes } from '@angular/router';
import { Login } from './components/login/login'; // Apuntamos al archivo login.ts que ya tienes
export const routes: Routes = [
    { path: 'login', component: Login },
    { path: '', redirectTo: 'login', pathMatch: 'full' }
];
