import { Component } from '@angular/core';
import {ContentService} from '../../services/content.service';
import { fadeInAnimation } from '../../app.animations';

@Component({
  selector: 'blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class BlogComponent {
  pageContent: any;

  constructor(private contentService: ContentService) {};


  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      data.forEach(page => {
        if(page.slug === 'blog'){
          this.pageContent = page.content.rendered;
        }
        else{
          console.log('Could not load Page Content');
        }
      });
    }, error => console.log('Could not load Page Content'));
  };

}




