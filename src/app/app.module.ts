import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ReactiveFormsModule}from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NavComponent } from './nav/nav.component';
import { NotfoundComponent } from './notfound/notfound.component';
import {HttpClientModule} from "@angular/common/http";
import { GameDetailsComponent } from './game-details/game-details.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CarouselModule } from 'ngx-owl-carousel-o';
import { PlatformPipe } from './platform.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NavComponent,
    NotfoundComponent,
    GameDetailsComponent,
    PlatformPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
