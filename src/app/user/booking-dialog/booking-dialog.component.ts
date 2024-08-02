import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrl: './booking-dialog.component.css'
})
export class BookingDialogComponent {

  cabinForm!: FormGroup;

  constructor(private fb:FormBuilder){
  }
  ngOnInit(): void {
    this.cabinForm = this.fb.group({
      name: ['', Validators.required],
      phNumber: ['', [Validators.required, Validators.min(1)]],
    });
  }
}
