import { NgModule } from '@angular/core';
import { AlunosPageComponent } from './alunos-page.component';
import { FaculdadePageComponent } from './faculdade-page.component';
import { FaculdadePageRoutingModule } from './faculdade-page.routing';
import { ProfessoresPageComponent } from './professores-page.component';

@NgModule({
  declarations: [
    FaculdadePageComponent,
    ProfessoresPageComponent,
    AlunosPageComponent
  ],
  imports: [
    FaculdadePageRoutingModule,
  ],
  exports: [
  ],
  providers: []
})

export class FaculdadePageModule { }
