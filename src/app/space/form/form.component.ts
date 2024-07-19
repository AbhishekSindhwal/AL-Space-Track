import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {


  constructor(private _Activatedroute: ActivatedRoute,
    private apiService: ApiService
  ) { }

  availableSeat: number = 0;

  ownerForm = new FormGroup({
    price: new FormControl(''),
    cab: new FormControl(false,),
    cabPrice: new FormControl(0,),
    printer: new FormControl(false),
    printerPrice: new FormControl(0,),
    wifi: new FormControl(false),
    teaCoffee: new FormControl(false),
    service1: new FormControl(false),
  })

  serviceForm = new FormGroup({
    price:new FormControl(''),
    cabinId:new FormControl(''),
    services:new FormGroup({
      serviceId:new FormArray([

      ]),
      price:new FormArray([

      ]),
      units:new FormArray([

      ])
    })
  })
 
  name = this._Activatedroute.snapshot.paramMap.get("name");
  availableSeats = this._Activatedroute.snapshot.paramMap.get("availableSeats");
  
  cab_price: number = 0
  printer_price: number = 0
  seat_price: number = 0
  services:any
  array:number[]=[]

  ngOnInit(): void {
    this.apiService.getService().subscribe(response => {
      this.services=response
      this.array = new Array(this.services.length).fill(0);
      console.log(this.services)
    });
  }

  cabService: boolean = false
  printerService: boolean = false

  cabServiceStatus(index:number) {
    this.array[index] = this.array[index] === 0 ? 1 : 0;
  }

  onSubmit() {
    const data = this.ownerForm.value
    console.log(this.ownerForm.value);
    console.log(this.serviceForm.value);
    const senddata = {
      id: Math.floor((Math.random() * 1000) % 100),
      seatType: this.name,
      seatPrice: data.price,
      cab: data.cab,
      cabPrice: data.cabPrice,
      printer: data.printer,
      printerPrice: data.printerPrice,
      wifi: data.wifi,
      tea: data.teaCoffee,
      service1: data.service1
    }
  }
}
