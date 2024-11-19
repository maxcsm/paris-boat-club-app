import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { AuthGuard } from 'src/providers/auth-guard.service';

const routes: Routes = [

  /*
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
*/
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule),

  },
  {
    path: 'techs',
    loadChildren: () => import('./techs/techs.module').then( m => m.TechsPageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'posts',
    loadChildren: () => import('./posts/posts.module').then( m => m.PostsPageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'service-list',
    loadChildren: () => import('./service-list/service-list.module').then( m => m.ServiceListPageModule)
  },
  {
    path: 'service-detail',
    loadChildren: () => import('./service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'modal-post',
    loadChildren: () => import('./modal-post/modal-post.module').then( m => m.ModalPostPageModule)
  },
  {
    path: 'chatgpt',
    loadChildren: () => import('./chatgpt/chatgpt.module').then( m => m.ChatgptPageModule)
  },
  {
    path: 'boat',
    loadChildren: () => import('./boat/boat.module').then( m => m.BoatPageModule)
  },
  {
    path: 'changelanguage',
    loadChildren: () => import('./changelanguage/changelanguage.module').then( m => m.ChangelanguagePageModule)
  },
  {
    path: 'escales',
    loadChildren: () => import('./escales/escales.module').then( m => m.EscalesPageModule)
  },
  {
    path: 'legal',
    loadChildren: () => import('./legal/legal.module').then( m => m.LegalPageModule)
  },
  {
    path: 'pictures',
    loadChildren: () => import('./pictures/pictures.module').then( m => m.PicturesPageModule)
  },
  {
    path: 'modeemploi',
    loadChildren: () => import('./modeemploi/modeemploi.module').then( m => m.ModeemploiPageModule)
  },
  {
    path: 'escalesmap',
    loadChildren: () => import('./escalesmap/escalesmap.module').then( m => m.EscalesmapPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    TranslateModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
