import { Routes } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component.js';

export const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent,
        // pathMatch: "full"
    }
];
