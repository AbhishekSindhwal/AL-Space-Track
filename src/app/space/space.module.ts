import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateSpaceComponent } from './private-space/private-space.component';
import { OpenSpaceComponent } from './open-space/open-space.component';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FormComponent } from './form/form.component';
import { AppRoutingModule } from '../app.routes';
import { ReactiveFormsModule } from '@angular/forms';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { MatDialogModule } from '@angular/material/dialog';



@NgModule({
  declarations: [
    PrivateSpaceComponent,
    OpenSpaceComponent,
    DialogBoxComponent,
    FormComponent,
    HomeComponentComponent,
    DialogContentComponent,
    DialogBoxComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule,
    AppRoutingModule, 
    ReactiveFormsModule ,
    MatDialogModule,

  ],
  exports:[
    PrivateSpaceComponent,
    OpenSpaceComponent,
    FormComponent,
    HomeComponentComponent
  ]
})
export class SpaceModule { 

}
