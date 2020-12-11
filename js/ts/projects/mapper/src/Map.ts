import { Traceable } from './types';

export class CustomMap {
  private googleMap: google.maps.Map;
  constructor(element: string = 'map') {
    this.googleMap = new google.maps.Map(document.getElementById(element), {
      zoom: 1,
      center: { lat: 51.220638, lng: -0.2333893 },
    });
  }
  addMarker(traceable: Traceable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: traceable.location(),
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: traceable.description(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}
