import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, MenuController, Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AuthenticationService } from 'src/providers/authentication.service';
import { TranslateService } from '@ngx-translate/core';
import { TranslateConfigService } from 'src/providers/translate-config.service';
import { Share } from '@capacitor/share';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {


  

  public appClient = [
    { title: 'home', url: '/tabs/home', icon: 'home' },
    { title: 'map', url: '/tabs/map', icon: 'map' },
    { title: 'list', url: '/tabs/posts', icon: 'list' },
    { title: 'services', url: '/tabs/services-list', icon: 'tv' },
    { title: 'boat', url: '/boat', icon: 'boat' },
    { title: 'ourstairs', url: '/escales', icon: 'flag' },
    { title: 'pictures', url: '/pictures', icon: 'camera' },
    { title: 'question', url: '/chatgpt', icon: 'help-circle' },
    { title: 'settings', url: '/tabs/settings', icon: 'gift' },
    { title: 'modeemploi', url: '/modeemploi', icon: 'play-circle' },
    { title: 'legal', url: '/legal', icon: 'information' },
    
  ];


  
  public labels = ['Divers'];
  firstname: any;
  lastname: any;
  role: any;
  language: string | null;
  platf: string="";
  constructor(   
    private platform: Platform,
    // private splashScreen: SplashScreen,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public alertController: AlertController,
    private authenticationService: AuthenticationService,
    public menu: MenuController,
    private storage: Storage,
    private translate: TranslateService,
    private translateConfigService: TranslateConfigService
  
) {
    this.language=this.translateConfigService.getCurrentLang();
    this.initializeApp();
  }



  initializeApp() {

    this.translate.setDefaultLang('fr'); // add this
    this.menu.enable(false);

  //  this.router.navigate(['/home']);     
   this.menu.enable(false, 'menu1');
   this.router.navigate(['/tabs']);     

  this.platform.ready().then(() => {
    if (this.platform.is('android')) {

      this.platf="android";
         console.log('android');
    } else if (this.platform.is('ios')) {
         console.log('ios');
         this.platf="ios";
    } else {
         //fallback to browser APIs or
         this.platf="desk";
           }
    });

   
  }



  async logout() {


    const alert = await this.alertController.create({
      header: 'Déconnexion',
      subHeader: '',
      message: 'Voulez-vous vraiment déconnecter ?',
      buttons: [{
        text: 'Ok',
        cssClass: 'primary',
        handler: (blah) => {
          console.log('Confirm Ok: blah');
     
          this.authenticationService.logout();
           setTimeout(() => { 
       
           
          this.menu.enable(false);
           this.router.navigateByUrl('/login');
         }, 1000); 
        }
      },
      {
        text: 'Annuler',
        cssClass: 'secondary',
        handler: (blah) => {
          console.log('Confirm Cancel: blah');
        }
      }
    ]
    });

    await alert.present();
  }


  async share() {
  await Share.share({
    title: 'ParisBoatClub',
    text: 'Venez découvrir Paris depuis la Seine pour des moments mémorables et uniques !',
    url: 'https://parisboatclub.fr/',
    dialogTitle: 'Bienvenue a bord du bateau',
  });
}
}
