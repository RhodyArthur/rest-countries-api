import { Routes } from '@angular/router';
import { Details } from './components/details/details';
import { Home } from './components/home/home';

export const routes: Routes = [
    {
        path: '',
        component: Home
    },
    {
        path:'name/:countryName',
        component: Details
    }
];
