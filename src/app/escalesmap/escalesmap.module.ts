import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalesmapPageRoutingModule } from './escalesmap-routing.module';

import { EscalesmapPage } from './escalesmap.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalesmapPageRoutingModule,
    TranslateModule
  ],
  declarations: [EscalesmapPage]
})
export class EscalesmapPageModule {}
