import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaculdadePageModule } from './pages/faculdade-page.module';

const routes: Routes = [
  { path: 'faculdade', loadChildren: () => FaculdadePageModule }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
