import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EscalesmapPage } from './escalesmap.page';

const routes: Routes = [
  {
    path: '',
    component: EscalesmapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EscalesmapPageRoutingModule {}
