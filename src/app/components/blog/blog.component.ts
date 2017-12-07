import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  providers: [ContentService],
  styleUrls: ['./blog.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BlogComponent {
  pageContent: String;
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    this.showSpinner = true;
    this.contentService.getBlogPageContent().subscribe(response => {
      this.pageContent = response;
      this.showSpinner = false;
    });
  }
}




