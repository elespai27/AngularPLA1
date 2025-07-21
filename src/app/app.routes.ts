import { Routes } from '@angular/router';
import { Login } from './pages/login/login';
import { Notfound } from './pages/notfound/notfound';
import { About } from './pages/about/about';
import { Resources } from './pages/resources/resources';


export const routes: Routes = [
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: 'login', component: Login },
  { path: 'about', component: About},
  { path: 'resources', component: Resources },
  { path: '**', component: Notfound }
];
