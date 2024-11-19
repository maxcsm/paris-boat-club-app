import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChangelanguagePageRoutingModule } from './changelanguage-routing.module';

import { ChangelanguagePage } from './changelanguage.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChangelanguagePageRoutingModule,
    TranslateModule
  ],
  declarations: [ChangelanguagePage]
})
export class ChangelanguagePageModule {}
