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
  rectOption: { fillColor: string; };
  circleOptionsCasa: { fillColor: string; };
  markerOptions: google.maps.MarkerOptions;
  markerOptions2: { icon: google.maps.Icon; };
  position2: { lat: number; lng: number; };
  label2: string;
  position3: { lat: number; lng: number; };
  label3: string;
  markerOptions3: { icon: google.maps.Icon; };
  position4: { lat: number; lng: number; };
  label4: string;
  markerOptions4: { icon: any; };
  vertices: google.maps.LatLngLiteral[];
  rettangolo: google.maps.LatLngLiteral[];



  cambiacoloreBlu()
  {
    this.circleOptions = {fillColor : 'blue'},
    this.circleOptionsCasa = {fillColor : 'blue'}
  }

  cambiacoloreVerde()
  {
    this.circleOptions = {fillColor : 'green'},
    this.circleOptionsCasa = {fillColor : 'green'}
  }

  cambiacoloreMarrone()
  {
    this.circleOptions = {fillColor : 'brown'},
    this.circleOptionsCasa = {fillColor : 'brown'}
  }


  cambiacoloreBluR()
  {
    this.rectOption = {fillColor : 'blue'}
    
  }

  cambiacoloreVerdeR()
  {
    this.rectOption = {fillColor : 'green'}
  }

  cambiacoloreMarroneR()
  {
    this.rectOption = {fillColor : 'brown'}
  }
  constructor()
  {
    this.center={lat: 45.506738, lng: 9.190766};
    this.position = this.center;
    this.position2 = {lat: 45.509, lng: 9.1909};
    this.position3 = {lat: 45.56, lng: 9.1908};
    this.position4 = {lat: 45.5612, lng: 9.190812};
    this.label = "Scuola";
    this.circleOptions = {fillColor : 'red'}
    this.rectOption = {fillColor : 'black'}
    this.circleOptionsCasa = {fillColor : 'pink'}
    this.positionCasa={lat: 45.46342, lng: 9.19405};
    this.labelCasa = "Casa Mia";
    this.label2 = "Cane";
    this.label3 = "Criceto";
    this.label4 = "Orsetto";
    this.vertices = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng - 0.002 },
      {  lat: this.center.lat, lng: this.center.lng },
      {  lat: this.center.lat - 0.001, lng: this.center.lng - 0.002}
    ];
    
    this.rettangolo = [
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.001 },
      {  lat: this.center.lat + 0.001, lng: this.center.lng + 0.002 },
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.002},
      {  lat: this.center.lat - 0.001, lng: this.center.lng + 0.001 }
 ];

    let iconData : google.maps.Icon = {
      url:'./assets/img/cat_acrobat.ico',
      scaledSize : new google.maps.Size(60,60)
 }

 let iconData2 : google.maps.Icon = {
  url:'./assets/img/doggo.png',
  scaledSize : new google.maps.Size(60,60)
}

let iconData3 : google.maps.Icon = {
  url:'./assets/img/PngItem_568447.png',
  scaledSize : new google.maps.Size(60,60)
}

let iconData4 : google.maps.Icon = {
  url:'./assets/img/2cd43b_868f2b346ea148eb9ccd6ef664225317~mv2.png',
  scaledSize : new google.maps.Size(60,60)
}
  
this.markerOptions = {icon:iconData}
this.markerOptions2 = {icon:iconData2}
this.markerOptions3 = {icon:iconData3}
this.markerOptions4 = {icon:iconData4}

  }
}

