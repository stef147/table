import { Component } from '@angular/core';

@Component({
  selector: 'location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.less'],
})
export class LocationComponent {
  title: string = 'My first angular2-google-maps project';
  lat: number = 54.352537;
  lng: number = -6.412043;
  zoom: number = 15;
}



