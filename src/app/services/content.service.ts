import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/publishReplay';


@Injectable()
export class ContentService {

  private pagesUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/pages';
  allPages: any;


  constructor(private http: Http) {
    console.log('ContentService started');

  }

  getPages(){
    if(!this.allPages){
      console.log('calling to get page data from wp');
      this.allPages = this.http.get(this.pagesUrl)
        .map(res => res.json())
        .publishReplay(1)
        .refCount();
    }
    return this.allPages;
  }


  getBlogContent() {
    var apiUrl = 'http://tabletandragee.org/Content/wp-json/wp/v2/pages?parent=89';
    return this.http.get(apiUrl)
      .map(res => res.json());
  }

}
