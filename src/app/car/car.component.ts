import { Component, OnInit } from '@angular/core';
import { Car } from './car';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Array<Car> = [];
  constructor(private carService: CarService) { }

  getCars(){
    this.carService.getCars().subscribe(cars =>{
      this.cars = cars;
    })
  }

  ngOnInit() {
    this.getCars();
  }

}
