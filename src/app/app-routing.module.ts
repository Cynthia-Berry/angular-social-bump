import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./modules/pages/home/home.component";
import {PhotoSearchComponent} from "./modules/pages/photo-search/photo-search.component";
import {PhotoSearchDetailComponent} from "./modules/pages/photo-search-detail/photo-search-detail.component";

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch:'full'},
  {path: 'dashboard', component: HomeComponent},
  {path: 'photos', component: PhotoSearchComponent},
  {path: 'photo/:id', component: PhotoSearchDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
