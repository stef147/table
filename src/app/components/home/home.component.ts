import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'home',
  providers: [ContentService],
  templateUrl: './home.component.html',
  styleUrls:['./home.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent {
  pageContent: String;
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    this.showSpinner = true;
    this.contentService.getContent('Schedule').subscribe(response => {
      console.log(response);
      this.pageContent = response[0].content.rendered;
      console.log( this.pageContent);
      this.showSpinner = false;
    });
  }
}
