import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './tj-components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'home' , pathMatch: 'full', data: {isNavigationRoute: false}},
  { path: 'home', component: HomeComponent , data: {name: "Home",  isNavigationRoute: false}},
  { path: 'profile', component: DashboardComponent , data: {name: "profile", isNavigationRoute: true}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
