import {Injectable} from "@angular/core";
import {Loader} from "@googlemaps/js-api-loader";
import {mapStyle} from "../../assets/mapStyle";

@Injectable({providedIn: 'root'})
export class MapService {
  getNewLoader() {
    return new Loader({
      apiKey: 'insert your google api here'
    });
  }
  initializeMapOptions(map: any) {
    const initialLocation = {lat: 45.9432, lng: 24.9668};
    map = new google.maps.Map(document.getElementById('map') as HTMLElement, {
      center: initialLocation,
      zoom: 7,
      mapTypeId: 'roadmap',
      streetViewControl: false,
      styles: mapStyle,
      restriction : {
        latLngBounds : {
          north: 48.2208812526,
          south: 43.6884447292,
          east: 29.62654341,
          west: 20.2201924985,
        },
      },
    });
    return map;
  }

}
