import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {PortalComponent} from './pages/portal/portal.component';
import {AuthGuard} from './auth/auth.guard';
import {SettingComponent} from './pages/setting/setting.component';
import {HomeportalComponent} from './pages/homeportal/homeportal.component';


const WebRoutes: Routes = [
  { path: '', redirectTo: 'home',  pathMatch: 'full'},
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'portal', component: PortalComponent},
  { path: 'setting', component: SettingComponent},
  { path: 'homeportal', component: HomeportalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(WebRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
