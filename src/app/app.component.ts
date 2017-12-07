import { Component } from '@angular/core';
import { fadeInAnimation } from './app.animations';
import {ContentService} from './services/content.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.less'],
  providers: [ContentService],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }


})
export class AppComponent {

  constructor(private contentService: ContentService) {

  }
}
