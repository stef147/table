import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ContentService {

  constructor(private http: Http) {
    console.log('ContentService started');
  }

  getContent(page) {
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
