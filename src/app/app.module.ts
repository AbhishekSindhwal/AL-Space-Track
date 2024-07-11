import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SpaceModule,
    // RouterOutlet,
    // RouterLink,
    // RouterLinkActive,
    AppRoutingModule,
  ],
  exports:[
   
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
