import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorkSpaceComponent } from './work-space/work-space.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'passport', loadChildren: () => import('./passport/passport.module').then(m => m.PassportModule) },
  { path: 'workspace' , component: WorkSpaceComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
