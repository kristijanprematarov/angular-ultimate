import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {Route, RouterModule} from "@angular/router";

// containers
import {PassengerDashboardComponent} from "./containers/passenger-dashboard/passenger-dashboard.component";
import {PassengerViewerComponent} from "./containers/passenger-viewer/passenger-viewer.component";

// components
import {PassengerDetailComponent} from "./components/passenger-detail/passenger-detail.component";
import {PassengerCountComponent} from "./components/passenger-count/passenger-count.component";
import {PassengerFormComponent} from "./components/passenger-form/passenger-form.component";

// services
import {PassengerDashboardService} from "./passenger-dashboard.service";

export const passengerDashboardRoutes: Route[] = [
  {
    path: 'passengers',
    children: [
      {
        path: '',
        component: PassengerDashboardComponent
      },
      {
        path: ':id',
        component: PassengerViewerComponent
      }
    ]
  },
];

@NgModule({
  declarations: [
    PassengerDashboardComponent,
    PassengerDetailComponent,
    PassengerCountComponent,
    PassengerViewerComponent,
    PassengerFormComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    RouterModule.forChild(passengerDashboardRoutes)
  ],
  providers: [
    PassengerDashboardService,
  ]
})
export class PassengerDashboardModule {

}
