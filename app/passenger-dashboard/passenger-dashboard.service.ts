import {Injectable} from "@angular/core";
import {Passenger} from "./models/passenger.interface";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/add/observable/throw'

const PASSENGER_API: string = '/api/passengers';

@Injectable()
export class PassengerDashboardService {
  constructor(private httpClient: Http) {
  }

  getPassengers(): Observable<Passenger[]> {
    return this.httpClient
      .get(PASSENGER_API)
      .map(resp => {
        return resp.json();
      })
      .catch((error:any) => Observable.throw(error.json()));
  }

  getPassenger(id: number): Observable<Passenger> {
    return this.httpClient
      .get(`${PASSENGER_API}/${id}`)
      .map(resp => {
        return resp.json();
      })
      .catch((error:any) => Observable.throw(error.json()));
  }

  updatePassengers(passenger: Passenger): Observable<Passenger> {

    let headers = new Headers({
      'Content-Type': 'application/json'
    })

    let options = new RequestOptions({
      headers: headers
    })

    return this.httpClient
      .put(`${PASSENGER_API}/${passenger.id}`, passenger, options)
      .map(resp => {
        return resp.json();
      })
      .catch((error:any) => Observable.throw(error.json()));
  }

  removePassenger(passenger: Passenger): Observable<Passenger> {
    return this.httpClient
      .delete(`${PASSENGER_API}/${passenger.id}`)
      .map(resp => {
        return resp.json();
      })
      .catch((error:any) => Observable.throw(error.json()));
  }
}
