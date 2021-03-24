import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './headerMenu/menu/menu.component';
import { DevelopersListComponent } from './developers/developers-list/developers-list.component';
import { DeveloperProfileComponent } from './developers/developer-profile/developer-profile.component';
import { DeveloperCreateProfileComponent } from './developers/developer-create-profile/developer-create-profile.component';
import { DeveloperEditProfileComponent } from './developers/developer-edit-profile/developer-edit-profile.component';
import { DeveloperAddExpComponent } from './developers/developer-add-exp/developer-add-exp.component';
import { DeveloperAddeduComponent } from './developers/developer-addedu/developer-addedu.component';


//import Angular Material components

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatCheckboxModule} from '@angular/material/checkbox'


import { MainComponent } from './main/main.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LandpageComponent } from './landpage/landpage.component';

import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './logout/logout.component';

import { CUSTOM_ELEMENTS_SCHEMA} from '@angular/core'






@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DevelopersListComponent,
    DeveloperProfileComponent,
    DeveloperCreateProfileComponent,
    DeveloperEditProfileComponent,
    DeveloperAddExpComponent,
    DeveloperAddeduComponent,
    MainComponent,
    HomeComponent,
    DashboardComponent,
    RegisterComponent,
    LoginComponent,
    LandpageComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
