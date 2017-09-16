import {Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';

import {HomeComponent} from './components/home/home.component';
import {AboutComponent} from './components/about/about.component';
import {BeliefsComponent} from './components/beliefs/beliefs.component';
import {ContactComponent} from './components/contact/contact.component';
import {GivingComponent} from './components/giving/giving.component';
import {LeadershipComponent} from './components/leadership/leadership.component';
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
    path: 'contact',
    component: ContactComponent
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

