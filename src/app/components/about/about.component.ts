import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  providers: [ContentService],
  styleUrls: ['./about.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent {
  pageContent: String;
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    this.showSpinner = true;
    this.contentService.getAboutPageContent().subscribe(response => {
      this.pageContent = response[0].content.rendered;
      this.showSpinner = false;
    });
  }
}




