import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

var aboutPageContent = null;
var beliefsPageContent = null;
var leadershipPageContent = null;
var birdTablePageContent = null;
var blogPageContent = null;


@Injectable()
export class ContentService {

  constructor(private http: Http) {
    console.log('ContentService started');
    aboutPageContent = this.getContent('about');
    beliefsPageContent = this.getContent('beliefs');
    birdTablePageContent = this.getContent('birdtable');
    leadershipPageContent = this.getContent('leadership');
    blogPageContent = this.getBlogContent();
    console.log(aboutPageContent);

  }

  getAboutPageContent() {
    return aboutPageContent;
  }

  getBeliefsPageContent() {
    return beliefsPageContent;
  }
  getBirdPageContent() {
    return birdTablePageContent;
  }

  getBlogPageContent() {
    return blogPageContent;
  }

  getLeadershipPageContent() {
    return leadershipPageContent;
  }

  getContent(page) {
    console.log(page);
    var apiUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/pages?slug=' + page;
    return this.http.get(apiUrl)
      .map(res => res.json());
  }


  //id = 58 corresponnds to the parent id of values page
  //id = 89 corresponnds to the parent id of values page
  // getValuesContent(page) {
  //   var apiUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/pages?slug=' + page;
  //   return this.http.get(apiUrl)
  //     .map(res => res.json());
  // }

  getBlogContent() {
    var apiUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/pages?parent=89';
    return this.http.get(apiUrl)
      .map(res => res.json());
  }

}
