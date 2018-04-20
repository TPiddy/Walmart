import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Car} from "../models/car";

@Injectable()
export class CarsService {
  constructor(private client: HttpClient) {

  }

  getCars(): Observable<Car[]> {
    return this.client.get<Car[]>("http://localhost:3000/cars");
  }
}
