import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SortByComponent } from './sort-by/sort-by.component';

const routes: Routes = [
  {path:"",redirectTo:"release-date",pathMatch:"full"},
  {path:"release-date",component:SortByComponent},
  {path:"popularity",component:SortByComponent},
  {path:"alphabetical",component:SortByComponent},
  {path:"relevance",component:SortByComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SortByRoutingModule { }
