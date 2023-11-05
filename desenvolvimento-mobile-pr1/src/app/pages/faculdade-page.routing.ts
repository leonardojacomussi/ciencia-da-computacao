import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FaculdadePageComponent } from './faculdade-page.component';
import { ProfessoresPageComponent } from './professores-page.component';
import { AlunosPageComponent } from './alunos-page.component';

const routes: Routes = [
  {
    path: '',
    component: FaculdadePageComponent,
    children: [
      { path: '', redirectTo: 'professores', pathMatch: 'full' },
      { path: 'professores', component: ProfessoresPageComponent },
      { path: 'alunos', component: AlunosPageComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaculdadePageRoutingModule {}
