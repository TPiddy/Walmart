import {Component, Input} from '@angular/core';
import {Car} from '../models/car';

@Component({
  selector: "car-component",
  templateUrl: "./car.component.html",
  styleUrls: ["./car.component.css"]
})
export class CarComponent {
  @Input() car: Car;
}
