import { Routes } from '@angular/router';
import { Login } from './pages/security/login/login';

import { Dashboard } from './pages/compte/dashboard/dashboard';
import { Compte } from './pages/compte/compte';
import { Security } from './pages/security/security';
import { CompteListe } from './pages/compte/compte-liste/compte-liste';
import { CompteDetail } from './pages/compte/compte-detail/compte-detail';
import { NotFoundPage } from './shared/pages/not-found-page/not-found-page';
import { DemandeListe } from './pages/compte/demande/demande';
import { DemandeDetail } from './pages/demande-detail/demande-detail';


export const routes: Routes = [
    {
        path:'compte',
        component: Compte,
        children: 
        [
            {
            path:'comptes',
            component: CompteListe
            },
            {
            path:'comptes/:numero/details',
            component: CompteDetail
            },
            {
                path: 'demande',
                component: DemandeListe
            },
            {
                path:'demande/:numero/details',
                component: DemandeDetail
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
     {
        path:'**',
        component: NotFoundPage
    }
];
