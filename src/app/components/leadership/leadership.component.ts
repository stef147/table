import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';
import {ContentService} from '../../services/content.service';



@Component({
  selector: 'leadership',
  templateUrl: './leadership.component.html',
  providers: [ContentService],
  styleUrls:['./leadership.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LeadershipComponent {
  pageContent: String;
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    this.showSpinner = true;
    this.contentService.getLeadershipPageContent().subscribe(response => {
      this.pageContent = response[0].content.rendered;
      this.showSpinner = false;
    });
  }
}




