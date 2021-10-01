import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'server mappe';
  //Aggiungiamo latitudine e longitudine di un luogo
  center : any;
  
  position : any;
  positionCasa : any
  label :string;
  labelCasa : string;
  circleOptions: { fillColor: string; };
  circleOptionsCasa: { fillColor: string; };
  markerOptions: google.maps.MarkerOptions;
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.label = "Scuola";
    this.circleOptions = {fillColor : 'red'}
    this.circleOptionsCasa = {fillColor : 'pink'}
    this.positionCasa={lat: 45.46342, lng: 9.19405};
    this.labelCasa = "Casa Mia";
    
    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
 }
  
this.markerOptions = {icon:iconData}

  }

}