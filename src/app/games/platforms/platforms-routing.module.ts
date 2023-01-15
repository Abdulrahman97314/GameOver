import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlatformComponent } from './platform/platform.component';

const routes: Routes = [
  {path:"",redirectTo:"pc",pathMatch:"full"},
  {path:"pc",component:PlatformComponent},
  {path:"browser",component:PlatformComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformsRoutingModule { }
