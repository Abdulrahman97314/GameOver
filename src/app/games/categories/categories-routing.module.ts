import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';

const routes: Routes = [
  {path:"",redirectTo:"",pathMatch:"full"},
  {path:"racing",component:CategoriesComponent},
  {path:"sports",component:CategoriesComponent},
  {path:"social",component:CategoriesComponent},
  {path:"shooter",component:CategoriesComponent},
  {path:"open-world",component:CategoriesComponent},
  {path:"zombie",component:CategoriesComponent},
  {path:"fantasy",component:CategoriesComponent},
  {path:"action-rpg",component:CategoriesComponent},
  {path:"action",component:CategoriesComponent},
  {path:"flight",component:CategoriesComponent},
  {path:"battle-royale",component:CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
