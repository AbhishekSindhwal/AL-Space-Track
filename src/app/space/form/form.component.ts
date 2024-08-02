import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../api.service';
import { HighlightSpanKind } from 'typescript';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent implements OnInit {
  ownerForm: FormGroup;
  submitError: string = '';
  submitSuccess: boolean = false;
  services:any
  array:number[]=[]
  cabinService:any
  

  constructor(private _Activatedroute: ActivatedRoute, 
    private apiService: ApiService,
    private fb:FormBuilder
  ) 
  { 
    this.ownerForm=this.fb.group({
      cabinId:this.id
    })

    this.apiService.getCabinService(this.id).subscribe(response=>{
       console.log('response== ', response.result)
      this.cabinService=response.result

    })
    
    this.apiService.getService().subscribe(response => {
      this.services=response
      this.array = new Array(this.services.length).fill(0);
      this.initializeForm()
      console.log(this.services)

      

    });
  }

  availableSeat: number = 0;


 
  name = this._Activatedroute.snapshot.paramMap.get("name");
  availableSeats = this._Activatedroute.snapshot.paramMap.get("availableSeats");
  id=this._Activatedroute.snapshot.paramMap.get("id");
  

  
  

  ngOnInit(): void {
   
    this.apiService.cabinServiceSubject$.subscribe(()=>{
      this.apiService.getCabinService(this.id).subscribe(response=>{
        this.services=response;
      })
    })
  }


  initializeForm(): void {
    console.log(this.services);
    if (this.services?.length) {
      console.log(this.services.length)
      this.services.forEach((service: any,index:any) => {
        console.log("HELLO")
        this.ownerForm.addControl(service.Id.toString(), new FormControl(false));
        if(this.cabinService?.length){
          this.cabinService.forEach((cabin: any) => {
          if (cabin.ServiceRefId === service.Id) {
            this.ownerForm.get(service.Id.toString())?.patchValue(cabin.Price);
            this.array[index]=1;
          }
        });
        }
       
      });   
    }
  }

  cabServiceStatus(index:number) {
    this.array[index] = this.array[index] === 0 ? 1 : 0;
  }

  onSubmit() {
    const data = this.ownerForm.value
    console.log(this.ownerForm.value);
  
    
      this.apiService.addCabinService(this.ownerForm.value).subscribe({
        next: (response:any) => {
          console.log('Service assocaited  successfully:', response);
          this.submitSuccess = true;
          this.submitError = '';
  
        },
        error: (error) => {
          console.error('Error associating services:', error);
          this.submitError = 'An error occurred while associating services. Please try again.';
          this.submitSuccess = false;
        }
      });

    }
  }


