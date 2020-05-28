import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DataMapComponent} from "./data-map/data-map.component";
import {MenuComponent} from "./menu/menu.component";
import {DataMapFormComponent} from "./data-map/data-map-form/data-map-form.component";


const routes: Routes = [
  {
    path: '', component: HomeComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'dataMap', component: DataMapComponent},
      {path: 'dataMapForm/:type/:id', component: DataMapFormComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'menuForm/:type/:id', component: MenuComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
