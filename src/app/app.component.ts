import {Component, OnDestroy, OnInit} from '@angular/core';
import {Car} from "../models/car";
import {CarsService} from "../services/cars.service";
import 'rxjs/add/operator/takeWhile';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit, OnDestroy {
  cars: Car[];
  sort: string;
  active: boolean = false;
  constructor(private carService: CarsService) {}

  ngOnDestroy(): void {
    this.active = false;
  }

  ngOnInit(): void {
    this.active = true;
    this.carService.getCars()
      .takeWhile(() => this.active)
      .subscribe(cars => this.cars = this.sortByName(cars));
  }

  changeSort(): void {
    switch ( this.sort ) {
      case "name":
        this.cars = this.sortByName(this.cars);
        break;
      case "availability":
        this.cars = this.sortByAvailability(this.cars);
        break;
    }
  }

  sortByName(list) {
    this.sort = "name";
    return list.sort((a, b) => { return a.make < b.make ? -1 : b.make < a.make ? 1 : 0})
  }

  sortByAvailability(list) {
    this.sort = "availability";
    return list.sort((a, b) => {
      if ( a.available === "Available" ) {
        switch ( b.available ) {
          case "Available":
            return 0;
          default:
            return -1;
        }
      } else {
        switch ( b.available ) {
          case "Available":
            return 1;
          default:
            return 0;
        }
      }
    })
  }
}
