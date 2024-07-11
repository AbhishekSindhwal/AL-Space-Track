import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  
constructor(private _Activatedroute:ActivatedRoute){}

  availableSeat:number=0;

  ownerForm = new FormGroup({
    price: new FormControl(''),
    cab: new FormControl(false,),
    cabPrice:new FormControl(0,),
    printer: new FormControl(false),
    printerPrice:new FormControl(0,),
    wifi:new FormControl(false),
    teaCoffee:new FormControl(false),
    service1:new FormControl(false),
  })
   
  name=this._Activatedroute.snapshot.paramMap.get("name");
  availableSeats=this._Activatedroute.snapshot.paramMap.get("availableSeats");

  cabService:boolean=false
  printerService:boolean=false

  cabServiceStatus(){
    this.cabService=!this.cabService
  }

  printerServiceStatus(){
    this.printerService=!this.printerService
  }

  onSubmit() {
      console.log(this.ownerForm)
  }

}
