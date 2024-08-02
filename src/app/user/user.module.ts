import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomsComponent } from './rooms/rooms.component';
import { AppRoutingModule } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { RoomComponent } from './room/room.component';
import { BookingDialogComponent } from './booking-dialog/booking-dialog.component';



@NgModule({
  declarations: [
    RoomsComponent,
    RoomComponent,
    BookingDialogComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    
  ],
})
export class UserModule { }
