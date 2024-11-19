import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeemploiPage } from './modeemploi.page';

const routes: Routes = [
  {
    path: '',
    component: ModeemploiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModeemploiPageRoutingModule {}
