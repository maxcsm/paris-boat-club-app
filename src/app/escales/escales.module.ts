import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EscalesPageRoutingModule } from './escales-routing.module';

import { EscalesPage } from './escales.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EscalesPageRoutingModule, 
    TranslateModule
  ],
  declarations: [EscalesPage]
})
export class EscalesPageModule {}
