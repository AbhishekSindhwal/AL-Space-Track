import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateSpaceComponent } from './private-space/private-space.component';
import { OpenSpaceComponent } from './open-space/open-space.component';
import { MeetingSpaceComponent } from './meeting-space/meeting-space.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';



@NgModule({
  declarations: [
    MeetingSpaceComponent,
    PrivateSpaceComponent,
    OpenSpaceComponent,
    DialogBoxComponent,
    FormComponent,
    HomeComponentComponent
  
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    AppRoutingModule, 
    ReactiveFormsModule ,
  ],
  exports:[
    PrivateSpaceComponent,
    OpenSpaceComponent,
    MeetingSpaceComponent,
    FormComponent,
    HomeComponentComponent
  ]
})
export class SpaceModule { 

}
