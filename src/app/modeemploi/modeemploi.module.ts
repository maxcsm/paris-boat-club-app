import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModeemploiPageRoutingModule } from './modeemploi-routing.module';

import { ModeemploiPage } from './modeemploi.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModeemploiPageRoutingModule,
    TranslateModule
  ],
  declarations: [ModeemploiPage]
})
export class ModeemploiPageModule {}
