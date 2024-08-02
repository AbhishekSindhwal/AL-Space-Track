import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../api.service';
import { ActivatedRoute } from '@angular/router';
import { BookingDialogComponent } from '../booking-dialog/booking-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent implements OnInit {
  constructor(private _Activatedroute: ActivatedRoute,
    private apiService: ApiService) { }
  services: any
  array: number[] = []
  masterServices: any

  name = this._Activatedroute.snapshot.paramMap.get("name");
  availableSeats = this._Activatedroute.snapshot.paramMap.get("availableSeats");
  id = this._Activatedroute.snapshot.paramMap.get("id");
  //price=parseFloat(this._Activatedroute.snapshot.paramMap.get("bookedPrice"));
  cabinPrice: number = 0;
  price: number = 0




  ngOnInit(): void {
    const bookedPriceStr = this._Activatedroute.snapshot.paramMap.get("bookedPrice");
    this.price = bookedPriceStr ? parseFloat(bookedPriceStr) : 0;
    this.apiService.getCabinService(this.id).subscribe(response => {
      this.services = response.result;
      console.log(this.services);
      this.price = this.services.reduce((sum: any, service: any) => {
        const parsedPrice = parseFloat(service.Price);
        return sum + (isNaN(parsedPrice) ? 0 : parsedPrice);
      }, this.price);
      this.cabinPrice = this.price
      console.log('Total Price:', this.price);
    },
      error => {
        console.error('Error fetching data:', error);
      }
    );
    this.apiService.getService().subscribe(response => {
      this.masterServices = response;
      this.array = new Array(this.masterServices.length).fill(0);
      console.log(this.masterServices);
    })
  }

  updatedPrice(numberOfDays: any) {
    const days = parseFloat(numberOfDays);
    this.price = (this.price / 30) * numberOfDays;
  }
  
  cabServiceStatus(index: number) {
    this.array[index] = this.array[index] === 0 ? 1 : 0;
    if (this.array[index] == 1) this.price += parseFloat(this.masterServices[index].Price);
    if (this.array[index] == 0) this.price -= parseFloat(this.masterServices[index].Price);
  }

  readonly dialog = inject(MatDialog);
  openDialog() {
    const dialogRef = this.dialog.open(BookingDialogComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
