import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllComponent } from './all/all.component';

const routes: Routes = [
  {path:"",redirectTo:"all",pathMatch:'full'},
  {path:"all",component:AllComponent},
  {
    path: 'platforms',
    loadChildren: () => import('../games/platforms/platforms.module').then(m => m.PlatformsModule)
  },
  {
    path: 'sort-by',
    loadChildren: () => import('../games/sort-by/sort-by.module').then(m => m.SortByModule)
  },
  {
    path: 'Categories',
    loadChildren: () => import('../games/categories/categories.module').then(m => m.CategoriesModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
