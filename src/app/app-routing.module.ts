import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'flashscreen',
    loadChildren: () => import('./flashscreen/flashscreen.module').then( m => m.FlashscreenPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'production-log',
    loadChildren: () => import('./production-log/production-log.module').then( m => m.ProductionLogPageModule)
  },
  {
    path: 'production-dashboard',
    loadChildren: () => import('./production-dashboard/production-dashboard.module').then( m => m.ProductionDashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
