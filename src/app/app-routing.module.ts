import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'flashscreen',
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
  {
    path: 'inward-production-dashboard',
    loadChildren: () => import('./inward-production-dashboard/inward-production-dashboard.module').then( m => m.InwardProductionDashboardPageModule)
  },
  {
    path: 'add-inward-production',
    loadChildren: () => import('./add-inward-production/add-inward-production.module').then( m => m.AddInwardProductionPageModule)
  },
  {
    path: 'machine-master',
    loadChildren: () => import('./machine-master/machine-master.module').then( m => m.MachineMasterPageModule)
  },
  {
    path: 'open-barcode',
    loadChildren: () => import('./open-barcode/open-barcode.module').then( m => m.OpenBarcodePageModule)
  },
  {
    path: 'order-dashboard',
    loadChildren: () => import('./order-dashboard/order-dashboard.module').then( m => m.OrderDashboardPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
