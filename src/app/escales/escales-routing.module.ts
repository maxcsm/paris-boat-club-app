import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalesPage } from './escales.page';

const routes: Routes = [
  {
    path: '',
    component: EscalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalesPageRoutingModule {}
