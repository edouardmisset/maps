import faker from 'faker'
import { Mappable } from './CustomMap'

// Company has to have all the correct properties of the Mappable interface
export class Company implements Mappable {
  name: string
  catchPhrase: string
  location: {
    lng: number
    lat: number
  }

  constructor() {
    this.name = faker.company.companyName()
    this.catchPhrase = faker.company.catchPhrase()
    this.location = {
      lat: Number(faker.address.latitude()),
      lng: Number(faker.address.longitude()),
    }
  }

  markerContent(): string {
    return `
      <div>
        <h1>Company name: ${this.name}</h1>
        <p>Catchphrase: ${this.catchPhrase}</p>
      </div>
    `
  }
}
