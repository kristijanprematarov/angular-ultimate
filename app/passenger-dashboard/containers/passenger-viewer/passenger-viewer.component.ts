import {Component, OnInit} from "@angular/core";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Passenger} from "../../models/passenger.interface";
import {ActivatedRoute, Params, Router} from "@angular/router";

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'passenger-viewer',
  template: `
    <div>
      <button (click)="goBack()">&lsaquo; Go back</button>
      <passenger-form [detail]="passenger" (update)="onUpdatePassenger($event)"></passenger-form>
    </div>
  `,
  styleUrls: ['passenger-viewer.component.scss']
})
export class PassengerViewerComponent implements OnInit {
  passenger: Passenger;

  constructor(private passengerDashboardService: PassengerDashboardService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.params
      .switchMap((data: Passenger) => this.passengerDashboardService.getPassenger(data.id))
      .subscribe((data: Passenger) => this.passenger = data);
  }

  goBack() {
    this.router.navigate(['passengers']);
  }

  onUpdatePassenger(passenger: Passenger) {
    this.passengerDashboardService.updatePassengers(passenger)
      .subscribe((data: Passenger) => {
        this.passenger = {
          ...this.passenger,
          ...data
        }
      })
  }
}
