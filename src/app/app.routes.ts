import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

const appRoutes: Routes = [
    
    
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }

]

export const APP_ROUTES = RouterModule.forRoot(appRoutes, { useHash: true});