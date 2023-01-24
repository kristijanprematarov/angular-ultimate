// NG MODULES
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Route, RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";

// FEATURE MODULES
import {PassengerDashboardModule} from "./passenger-dashboard/passenger-dashboard.module";

// COMPONENTS
import {AppComponent} from './app.component';
import {HomeComponent} from "./home.component";
import {NotFoundComponent} from "./not-found.component";

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'passengers',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(routes),
    PassengerDashboardModule
  ],
  declarations: [
    AppComponent,
    NotFoundComponent,
    HomeComponent
  ]
})
export class AppModule {
}
