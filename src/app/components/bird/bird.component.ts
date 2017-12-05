import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';
import {ContentService} from '../../services/content.service';


@Component({
  selector: 'bird',
  templateUrl: './bird.component.html',
  providers: [ContentService],
  styleUrls:['./bird.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BirdComponent {
  pageContent: String;
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    this.showSpinner = true;
    this.contentService.getContent('birdtable').subscribe(response => {
      console.log(response);
      this.pageContent = response[0].content.rendered;
      console.log( this.pageContent);
      this.showSpinner = false;
    });
  }

}




