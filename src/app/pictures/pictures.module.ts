import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PicturesPageRoutingModule } from './pictures-routing.module';

import { PicturesPage } from './pictures.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PicturesPageRoutingModule,
    TranslateModule
  ],
  declarations: [PicturesPage]
})
export class PicturesPageModule {}
