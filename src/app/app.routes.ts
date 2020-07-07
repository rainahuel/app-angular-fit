import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { PerfilComponent } from './components/perfil/perfil.component';
import { RutinasComponent } from './components/rutinas/rutinas.component';
import { ContenedorComponent } from './components/contenedor.component';


const appRoutes: Routes = [
    
    
    { path: '', component: ContenedorComponent,
      children: [
        {path: 'perfil', component: PerfilComponent},
        {path: 'rutinas', component: RutinasComponent},
        { path: '', redirectTo: 'rutinas', pathMatch: 'full'}
      ]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }

]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});