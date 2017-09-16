import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { BeliefsComponent } from './components/beliefs/beliefs.component';
import { ContactComponent } from './components/contact/contact.component';
import { GivingComponent } from './components/giving/giving.component';
import { HomeComponent } from './components/home/home.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { LocationComponent } from './components/location/location.component';
import { WITCComponent } from './components/witc/witc.component';
import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from 'angular2-google-maps/core';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BeliefsComponent,
    ContactComponent,
    GivingComponent,
    HomeComponent,
    LeadershipComponent,
    LocationComponent,
    WITCComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDmp5blb-ong3ICIun0iLPKGi3A2LZfEKg'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
