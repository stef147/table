import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'beliefs',
  templateUrl: './beliefs.component.html',
  providers: [ContentService],
  styleUrls: ['./beliefs.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BeliefsComponent {
  pageContent: String;
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    this.showSpinner = true;
    this.contentService.getContent('beliefs').subscribe(response => {
      console.log(response);
      this.pageContent = response[0].content.rendered;
      console.log( this.pageContent);
      this.showSpinner = false;
    });
  }
}




