import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'initiation-app',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'vendedor-save',
    loadChildren: () => import('./vendedor-save/vendedor-save.module').then( m => m.VendedorSavePageModule)
  },
  {
    path: 'home-customer',
    loadChildren: () => import('./home-customer/home-customer.module').then( m => m.HomeCustomerPageModule)
  },
  {
    path: 'initiation-app',
    loadChildren: () => import('./initiation-app/initiation-app.module').then( m => m.InitiationAppPageModule)
  },
  {
    path: 'initiation-app-one',
    loadChildren: () => import('./initiation-app-one/initiation-app-one.module').then( m => m.InitiationAppOnePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
