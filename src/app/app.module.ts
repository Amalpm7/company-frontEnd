import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import {MatToolbarModule} from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin/admin.component';


const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
    path:"addemployee",component:AdminNavbarComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminNavbarComponent,
    AdminComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
