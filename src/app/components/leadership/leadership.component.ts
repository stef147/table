import { Component } from '@angular/core';
import { fadeInAnimation } from '../../app.animations';


@Component({
  selector: 'leadership',
  templateUrl: './leadership.component.html',
  styleUrls:['./leadership.component.less'],
  animations: [fadeInAnimation],
  host: { '[@fadeInAnimation]': '' }
})
export class LeadershipComponent {}




