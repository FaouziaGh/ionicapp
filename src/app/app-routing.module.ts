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
    path: 'crud-user/list-user',
    loadChildren: () => import('./crud-user/list-user/list-user.module').then( m => m.ListUserPageModule)
  },
  {
    path: 'crud-user/add-user',
    loadChildren: () => import('./crud-user/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'crud-user/list-user/detail-user/:id',
    loadChildren: () => import('./crud-user/detail-user/detail-user.module').then( m => m.DetailUserPageModule)
  },
  {
    path: 'crud-user/edit-user/:id',
    loadChildren: () => import('./crud-user/edit-user/edit-user.module').then( m => m.EditUserPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
