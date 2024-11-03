import { Component, OnInit } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Array<Car> = [];
  constructor() { }

  ngOnInit() {
  }

}
