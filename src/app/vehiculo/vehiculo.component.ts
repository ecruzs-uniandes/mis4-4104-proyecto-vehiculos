import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';
import { VehiculoService } from './vehiculo.service';


interface VehiculoAgrupado {
  marca: string;
  cantidad: number;
}

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {
  vehiculos: Array<Vehiculo> = [];
  vehiculosAgrupados: VehiculoAgrupado[] = [];

  constructor(private vehiculoService: VehiculoService) { }

  getVehiculos(){
    this.vehiculoService.getVehiculos().subscribe(vehiculos =>{
      this.vehiculos = vehiculos;
      this.getVehiculosPorMarca();
    })
  }

  getVehiculosPorMarca() {
    const agrupados: { [key: string]: number } = {};

    this.vehiculos.forEach(vehiculo => {
      const agrupado = "Total " + vehiculo.marca + ":";
      agrupados[agrupado] = (agrupados[agrupado] || 0) + 1;
    });
    this.vehiculosAgrupados = Object.entries(agrupados).map(([marca, cantidad]) => ({marca,cantidad,}));
  }

  ngOnInit() {
    this.getVehiculos();
  }
}
