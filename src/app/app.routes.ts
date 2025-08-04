import { Routes } from '@angular/router';
import { Login } from './pages/security/login/login';
import { Demande } from './pages/compte/demande/demande';
import { Dashboard } from './pages/compte/dashboard/dashboard';
import { Compte } from './pages/compte/compte';
import { Security } from './pages/security/security';
import { CompteListe } from './pages/compte/compte-liste/compte-liste';
import { CompteDetail } from './pages/compte/compte-detail/compte-detail';


export const routes: Routes = [
    {
        path:'compte',
        component: Compte,
        children: 
        [
            {
                path: 'demande',
                component: Demande
            },
            {
            path:'comptes',
            component: CompteListe
            },
            {
            path:'comptes',
            component: CompteDetail
            },
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
            path:'',
            redirectTo: '/compte/comptes',
            pathMatch: 'full'
            },
    ]
    },
    {
        path:'security',
        component: Security,
        children:
        [
            {
                path:'login',
                component: Login
            },
        ]
    },
    {
        path:'',
        redirectTo: '/security/login',
        pathMatch: 'full'
    },
];
