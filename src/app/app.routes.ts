import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Demande } from './pages/demande/demande';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
    {
        path:'login',
        component: Login
    },
    {
        path:'demande',
        component: Demande
    },
    {
        path:'dashboard',
        component: Dashboard
    },
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    },
];
