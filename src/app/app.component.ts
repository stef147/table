import { Component } from '@angular/core';
import { fadeInAnimation } from './app.animations';
import {ContentService} from './services/content.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }


})
export class AppComponent {
  private pageContent = {};
  showSpinner: boolean;

  constructor(private contentService: ContentService) {
    // this.showSpinner = true;
    // this.contentService.getLeadershipPageContent().subscribe(response => {
    //   this.pageContent = response[0].content.rendered;
    //   this.showSpinner = false;
  };


  ngOnInit() {
    this.contentService.getPages().subscribe(data => {
      console.log('all');
      this.pageContent = data;
      console.log(data);
    }, error => console.log('Could not load Page Content'));
    };



}
