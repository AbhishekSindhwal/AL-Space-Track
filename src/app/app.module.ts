import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SpaceModule } from './space/space.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppRoutingModule } from './app.routes';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { RoomsComponent } from './user/rooms/rooms.component';
import { UserModule } from './user/user.module';


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    // SpaceModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports:[
   
  ],
  providers: [
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
