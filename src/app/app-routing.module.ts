import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { GameDetailsComponent } from './game-details/game-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home", canActivate:[AuthGuard] ,component:HomeComponent},
  {path:"gameDetails/:id", canActivate:[AuthGuard] ,component:GameDetailsComponent},
  {
    path: 'games',canActivate:[AuthGuard],
    loadChildren: () => import('./games/games.module').then(m => m.GamesModule)
  },
  {path:"login" ,component:LoginComponent},
  {path:"register" ,component:RegisterComponent},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
