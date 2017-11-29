import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'values',
  templateUrl: './values.component.html',
  providers: [ContentService],
  styleUrls: ['./values.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class ValuesComponent {
  pageContent: String;
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    this.showSpinner = true;
    this.contentService.getValuesContent().subscribe(response => {
      console.log(response);
      this.pageContent = response;
      console.log( this.pageContent);
      this.showSpinner = false;
    });
  }
}




