import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DeveloperAddExpComponent } from './developers/developer-add-exp/developer-add-exp.component';
import { DeveloperAddeduComponent } from './developers/developer-addedu/developer-addedu.component';
import { DeveloperCreateProfileComponent } from './developers/developer-create-profile/developer-create-profile.component';
import { DeveloperEditProfileComponent } from './developers/developer-edit-profile/developer-edit-profile.component';
import { DevelopersListComponent } from './developers/developers-list/developers-list.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MainComponent } from './main/main.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component:MainComponent
  },
  {
    path:'create-profile',
    component:DeveloperCreateProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit-profile',
    component:DeveloperEditProfileComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'profiles',
    component:DevelopersListComponent
  },
  {
    path:'add-education',
    component:DeveloperAddeduComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-experience',
    component:DeveloperAddExpComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:HomeComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:'',
        component:DashboardComponent
      }
    ]
  },
  {
    path:'logout',
    component:LogoutComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
