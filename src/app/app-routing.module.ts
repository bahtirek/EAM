
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';



const routes: Routes = [
  
{
path: 'login',
loadChildren: './login/login.module#LoginModule',

},


{
path: 'registration',
loadChildren: './registration/registration.module#RegistrationModule',

},


{
path: 'employer',
loadChildren: './employer/employer.module#EmployerModule',

},


{
path: 'application',
loadChildren: './application/application.module#ApplicationModule',

},
{
  path: 'home',
  component: HomeComponent
},
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

