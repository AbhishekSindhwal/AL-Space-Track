import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../api.service';
// import {  Router } from '@angular/router';


@Component({
  selector: 'app-open-space',
  standalone:false,
  // imports: [],
  templateUrl: './open-space.component.html',
  styleUrl: './open-space.component.css'
})
export class OpenSpaceComponent  implements OnInit {
  constructor(private router:Router,
    private apiService:ApiService
  ){}

  total_open_seats:number=0
 allocated_open_seats:number=0

 total_dedicated_seats:number=0
 allocated_dedicated_seats:number=0
 
 data:any
  ngOnInit(): void {
      this.apiService.getData().subscribe(response=>{
        this.data=response
        console.log(response[0])
        this.total_open_seats=response[0].total_seats
        this.allocated_open_seats=response[0].allocated_seats
        this.total_dedicated_seats=response[1].total_seats
        this.allocated_dedicated_seats=response[1].allocated_seats
      });
  }


 


}
