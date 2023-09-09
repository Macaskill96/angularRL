import {Component, Input} from '@angular/core';

import {CarService} from "../../../../services/car.service";
import {ICar} from "../../../../interfaces/car.interface";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {
  @Input()
  cars:ICar[]
  panelOpenState = false
  constructor(private carService:CarService) {
  }
}
