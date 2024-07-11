import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import {  Router } from '@angular/router';


@Component({
  selector: 'app-open-space',
  standalone:false,
  // imports: [],
  templateUrl: './open-space.component.html',
  styleUrl: './open-space.component.css'
})
export class OpenSpaceComponent {
  constructor(private router:Router){}

  navigateToForm() {
    //this.router.navigate(['/form']);
  }


}
