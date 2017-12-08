import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { AboutComponent } from './components/about/about.component';
import { BeliefsComponent } from './components/beliefs/beliefs.component';
import { BirdComponent } from './components/bird/bird.component';
import { BlogComponent } from './components/blog/blog.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ContactComponent } from './components/contact/contact.component';
import { DiscipleshipComponent } from './components/discipleship/discipleship.component';
import { FooterComponent } from './components/footer/footer.component';
import { FridaysComponent } from './components/fridays/fridays.component';
import { GivingComponent } from './components/giving/giving.component';
import { HomeComponent } from './components/home/home.component';
import { LeadershipComponent } from './components/leadership/leadership.component';
import { LocationComponent } from './components/location/location.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PrayerComponent } from './components/prayer/prayer.component';
import { PhotosComponent } from './components/photos/photos.component';
import { ValuesComponent } from './components/values/values.component';
import { WITCComponent } from './components/witc/witc.component';

import { AppRoutingModule } from './app.routing';
import { AgmCoreModule } from 'angular2-google-maps/core';
import {ContentService} from './services/content.service';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BeliefsComponent,
    BirdComponent,
    BlogComponent,
    CalendarComponent,
    ContactComponent,
    DiscipleshipComponent,
    FooterComponent,
    FridaysComponent,
    GivingComponent,
    HomeComponent,
    LeadershipComponent,
    LocationComponent,
    NavbarComponent,
    PhotosComponent,
    PrayerComponent,
    ValuesComponent,
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
  providers: [ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
