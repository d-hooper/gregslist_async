import { AppState } from "../AppState.js"

export class Car {
  constructor(data) {
    this.id = data.id
    this.make = data.make
    this.model = data.model
    this.imgUrl = data.imgUrl
    this.year = data.year
    this.price = data.price
    this.description = data.description
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.color = data.color
    this.engineType = data.engineType
    this.creator = data.creator
    this.creatorId = data.creatorId
  }

  get deleteButton() {
    // NOTE who is currently logged in
    const user = AppState.identity

    // NOTE if user is not logged in
    if (user == null) {
      return ''
    }

    // NOTE if the logged in user did not create the car
    if (this.creatorId != user.id) {
      return ''
    }

    return `
     <button onclick="app.carsController.deleteCar('${this.id}')" type="button" class="btn btn-outline-danger">
        Delete Car
      </button>
    `
  }

  get card() {
    return `
    <div class="col-12">
      <div class="row bg-light shadow car-border mb-3" style="border-color: ${this.color};">
        <div class="col-md-4 px-0">
          <img src="${this.imgUrl}" alt="A picture of a ${this.make} ${this.model} for sale" class="car-img">
        </div>
        <div class="col-md-8">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <p class="fs-3 mb-1">${this.year} ${this.make} ${this.model}</p>
              <small>Listed on ${this.createdAt.toLocaleDateString()}</small>
              <div class="d-flex mt-1 justify-content-between align-items-center">
                <p class="fs-3">$${this.price.toLocaleString()}</p>
                <p class="fs-4">Engine: ${this.engineType}</p>
              </div>
              <p>${this.description}</p>
            </div>
            <div class="d-flex justify-content-between mb-1">
              <div>
                <img src="${this.creator.picture}" alt="${this.creator.name}" class="creator-img">
                <span>${this.creator.name}</span>
              </div>
             ${this.deleteButton}
            </div>
          </div>
        </div>
      </div>
    </div>
    `
  }
}

// const exampleDataFromAPI = {
//   "_id": "63348622236e4fd2522bdc64",
//   "make": "Oscar",
//   "model": "Meyer X",
//   "imgUrl": "https://upload.wikimedia.org/wikipedia/commons/8/8a/Wienermobile-NAIAS-2005.jpg",
//   "year": 2035,
//   "price": 100001,
//   "description": "Yummy Yummy, Made with 10% real meat. Just kidding, 0% real meat, you fool",
//   "createdAt": "2022-09-28T17:36:34.100Z",
//   "updatedAt": "2023-03-30T23:38:38.358Z",
//   "__v": 0,
//   "color": "#e8927d",
//   "engineType": "unknown",
//   "creator": null,
//   "id": "63348622236e4fd2522bdc64"
// }