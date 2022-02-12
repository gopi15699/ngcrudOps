import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MessageService} from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import { HttpClientModule } from '@angular/common/http';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import {CheckboxModule} from 'primeng/checkbox';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {CardModule} from 'primeng/card';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    InputTextModule,
    ButtonModule,
    ToastModule,
    CheckboxModule,
    BrowserAnimationsModule,
    TableModule,
    DialogModule,
    CardModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
