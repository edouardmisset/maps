import faker from 'faker'
import { Mappable } from './CustomMap'

// User has to have all the correct properties of the Mappable interface
export class User implements Mappable {
  fullName: string
  location: {
    lng: number
    lat: number
  }

  constructor() {
    this.fullName = `${faker.name.firstName()} ${faker.name.lastName()}`
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `<h1>User name is ${this.fullName}</h1>`
  }
}
