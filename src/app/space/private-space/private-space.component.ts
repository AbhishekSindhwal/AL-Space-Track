import { Component, OnInit ,inject } from '@angular/core';

import { ApiService } from '../../api.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
@Component({
  selector: 'app-private-space',
  // standalone: true,
  // imports: [],
  templateUrl: './private-space.component.html',
  styleUrl: './private-space.component.css'
})
export class PrivateSpaceComponent implements OnInit {
  constructor(private apiService:ApiService){

  }


  readonly dialog = inject(MatDialog);

  openDialog() {
    const dialogRef = this.dialog.open(DialogBoxComponent,{
      height: '800px',
      width: '1200px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


  handleClick(id:any)
  {
    console.log(id);
    this.apiService.deleteService(id).subscribe();
  }


  services:any
  ngOnInit(): void {
    this.apiService.getService().subscribe(response=>{
      this.services=response
      // console.log(this.services);
      // console.log(response[0])
      // this.total_open_seats=response[0].total_seats
      // this.allocated_open_seats=response[0].allocated_seats
      // this.total_dedicated_seats=response[1].total_seats
      // this.allocated_dedicated_seats=response[1].allocated_seats
    });
  }

}


