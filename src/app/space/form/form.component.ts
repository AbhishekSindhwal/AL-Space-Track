import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {


  constructor(private _Activatedroute: ActivatedRoute,
    private dataService: ApiService
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

  name = this._Activatedroute.snapshot.paramMap.get("name");
  availableSeats = this._Activatedroute.snapshot.paramMap.get("availableSeats");

  cab_price: number = 0
  printer_price: number = 0
  seat_price: number = 0

  ngOnInit(): void {
    this.dataService.getData().subscribe(response => {
      console.log(response[0])
      if (this.name == 'Open') {
        this.cab_price = response[0].cab_price
        this.printer_price = response[0].printer_price
        this.seat_price = response[0].seat_price
      } else {
        this.cab_price = response[1].cab_price
        this.printer_price = response[1].printer_price
        this.seat_price = response[1].seat_price
      }
    });
  }

  cabService: boolean = false
  printerService: boolean = false

  cabServiceStatus() {
    this.cabService = !this.cabService
  }

  printerServiceStatus() {
    this.printerService = !this.printerService
  }

  onSubmit() {
    const data = this.ownerForm.value
    console.log(this.ownerForm.value)
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
    this.dataService.saveFormData(senddata).subscribe({
      next: (res) => {
        console.log("form data has been updated successfully", res)
      },
      error: (err) => {
        console.log("Invalid values ", err)
      }
    })
  }
}
