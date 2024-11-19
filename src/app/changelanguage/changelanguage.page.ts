import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TranslateConfigService } from 'src/providers/translate-config.service';

@Component({
  selector: 'app-changelanguage',
  templateUrl: './changelanguage.page.html',
  styleUrls: ['./changelanguage.page.scss'],
})
export class ChangelanguagePage implements OnInit {

  constructor( private translateConfigService: TranslateConfigService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
  }


  public  async select1() {
    this.translateConfigService.setLanguage("fr");
    const onClosedData: string = "fr";
    await this.modalController.dismiss(onClosedData);
  }
 

  public  async select2() {
    this.translateConfigService.setLanguage("en");
    const onClosedData: string = "en";
    await this.modalController.dismiss(onClosedData);
  }

  public  async select3() {
    this.translateConfigService.setLanguage("it");
    const onClosedData: string = "it";
    await this.modalController.dismiss(onClosedData);
  }

  public  async select4() {
    this.translateConfigService.setLanguage("es");
    const onClosedData: string = "es";
    await this.modalController.dismiss(onClosedData);
  }




}
