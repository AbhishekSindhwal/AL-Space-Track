import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'spaceManagement';
  sidebarActive=true;
  openSpace=true;
  openSpaceActive=true;
  

  

  handleOpenSpace(){
    this.openSpace=true;
    this.openSpaceActive=true;
  }
  handleCabinSpace(){
    this.openSpace=false;
    this.openSpaceActive=false;
  }
}
