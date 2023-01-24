import {Component, OnInit} from "@angular/core";
import {Passenger} from "../../models/passenger.interface";
import {PassengerDashboardService} from "../../passenger-dashboard.service";
import {Router} from "@angular/router";

@Component({
  selector: 'passenger-dashboard',
  template: `
    <div>
      <passenger-count [items]="passengers"></passenger-count>
      <passenger-detail
        *ngFor="let passenger of passengers"
        [detail]="passenger"
        (edit)="handleEdit($event)"
        (remove)="handleRemove($event)"
        (view)="handleView($event)">
      </passenger-detail>
    </div>
  `,
  styleUrls: ['passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor(private passengerDashboardService: PassengerDashboardService,
              private router: Router) {
  }

  ngOnInit() {
    this.passengerDashboardService.getPassengers()
      .subscribe((data: Passenger[]) => {
        this.passengers = data;
      })
  }

  handleRemove(event: Passenger) {
    this.passengerDashboardService.removePassenger(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.filter((passenger: Passenger) => passenger.id !== event.id);
      })
  }

  handleEdit(event: Passenger) {
    this.passengerDashboardService.updatePassengers(event)
      .subscribe((data: Passenger) => {
        this.passengers = this.passengers.map((passenger: Passenger) => {
          if (passenger.id === event.id) {
            // passenger = {
            //   ...passenger,
            //   ...event
            // }
            passenger = Object.assign({}, passenger, event)
          }

          return passenger;
        });
      });
  }

  handleView(event: Passenger) {
    this.router.navigate(['/passengers', event.id]);
  }
}
