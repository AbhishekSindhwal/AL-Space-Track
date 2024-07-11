import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './space/form/form.component';
import { NgModule } from '@angular/core';
import { HomeComponentComponent } from './space/home-component/home-component.component';

export const routes: Routes = [
    {
        path:'',
        component:HomeComponentComponent
    },
    {
        path:'form-module/:name/:availableSeats',
        component:FormComponent
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{

}