// Make the ‘google' global variable available (when the node module is installed) in our TS files with its types
/// <reference types="@types/google.maps" />

// We reduce the amount of API surface area exposed
// by wrapping google's API inside a custom class
// using the private modifier

// Instructions to every other class
// on how they can be an argument to 'addMarker'
export interface Mappable {
  location: {
    lat: number
    lng: number
  }
  markerContent(): string
}

export class CustomMap {
  private googleMap: google.maps.Map

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 3,
      center: {
        lat: 0,
        lng: 0,
      },
    })
  }

  addMarker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    })

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      })
      infoWindow.open(this.googleMap, marker)
    })
  }
}
