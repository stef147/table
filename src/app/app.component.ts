import { Component } from '@angular/core';
import { fadeInAnimation } from './app.animations';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }


})
export class AppComponent {
}
