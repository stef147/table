import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {BeliefsComponent} from './components/beliefs/beliefs.component';
import {CalendarComponent} from './components/calendar/calendar.component';
import {ContactComponent} from './components/contact/contact.component';
import {DiscipleshipComponent} from './components/discipleship/discipleship.component';
import {GivingComponent} from './components/giving/giving.component';
import {LeadershipComponent} from './components/leadership/leadership.component';
import {PrayerComponent} from './components/prayer/prayer.component';
import {ValuesComponent} from './components/values/values.component';
import {WITCComponent} from './components/witc/witc.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'beliefs',
    component: BeliefsComponent
  },
  {
    path: 'calendar',
    component: CalendarComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'discipleship',
    component: DiscipleshipComponent
  },
  {
    path: 'giving',
    component: GivingComponent
  },
  {
    path: 'leadership',
    component: LeadershipComponent
  },
  {
    path: 'prayer',
    component: PrayerComponent
  },
  {
    path: 'values',
    component: ValuesComponent
  },
  {
    path: 'witc',
    component: WITCComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    component: HomeComponent
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false,// <-- debugging purposes only
        useHash: true}
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

