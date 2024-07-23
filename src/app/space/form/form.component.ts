import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  ownerForm: FormGroup;

  // ownerForm:FormGroup | undefined
  constructor(private _Activatedroute: ActivatedRoute,
    private apiService: ApiService,
    private fb:FormBuilder
  ) { 
    this.ownerForm=this.fb.group({})
    
    this.apiService.getService().subscribe(response => {
      this.services=response
      this.array = new Array(this.services.length).fill(0);

      this.initializeForm()
      console.log(this.services)
    });
    
  }

  availableSeat: number = 0;

  // ownerForm = new FormGroup({
  //   price: new FormControl(''),
   
  // })

  serviceForm = new FormGroup({
    price:new FormControl(''),
    cabinId:new FormControl(''),
    services:new FormGroup({
      serviceId:new FormArray([
         
      ]),
      price:new FormArray([
         
      ]),
    })
  })

  
 
  name = this._Activatedroute.snapshot.paramMap.get("name");
  availableSeats = this._Activatedroute.snapshot.paramMap.get("availableSeats");
  
  services:any
  array:number[]=[]

  ngOnInit(): void {
   
    this.initializeForm();
  }


  initializeForm(): void {
    console.log(this.services);
    if(this.services?.length){
    this.services.forEach((service:any, index:any) => {
      // Initialize array values
     // this.array[index] = false;
      // Add a form control for each service
      this.ownerForm.addControl(service.Name_ , new FormControl(false));
    });
  }
  }

  cabServiceStatus(index:number) {
    this.array[index] = this.array[index] === 0 ? 1 : 0;
  }

  onSubmit() {
    const data = this.ownerForm.value
    console.log(this.ownerForm.value);
    console.log(this.serviceForm.value);
  
  }
}




// @Component({
//   selector: 'app-dynamic-form',
//   templateUrl: './dynamic-form.component.html',
//   styleUrls: ['./dynamic-form.component.css']
// })
// export class DynamicFormComponent implements OnInit {
//   form: FormGroup;
//   services = [
//     { Name_: 'cab' },
//     { Name_: 'wifi' },
//     { Name_: 'meal' }
//   ];
//   array: boolean[] = [];

//   constructor(private fb: FormBuilder) {
//     this.form = this.fb.group({});
//   }

//   ngOnInit(): void {
//     this.initializeForm();
//   }

//   initializeForm(): void {
//     this.services.forEach((service, index) => {

//       this.array[index] = false;
     
//       this.form.addControl(service.Name_, new FormControl(false));
//     });
//   }

//   cabServiceStatus(index: number): void {
//     this.array[index] = !this.array[index];
//   }

//   onSubmit(): void {
//     console.log(this.form.value);
   
//   }
// }

