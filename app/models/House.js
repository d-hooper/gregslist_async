import { AppState } from "../AppState.js"


export class House {
  constructor(data) {
      this.id = data.id
      this.bedrooms = data.bedrooms
      this.bathrooms = data.bathrooms
      this.levels = data.levels
      this.imgUrl = data.imgUrl
      this.year = data.year
      this.price = data.price
      this.description = data.description
      this.creatorId = data.creatorId
      this.creator = data.creator
  }

  get randomColorBorder() {
    const values = [
      'a','b','c','d','e','f','1','2','3','4','5','6','7','8', '9', '0'
    ]
    let color = []
    for (let index = 0; index < values.length; index++) {
      const randomNumber = Math.round(Math.random() * values.length)
      /** @type {string} */
      const value = values[randomNumber];
      if (color.length == 6) {
        return color.join('').toString()
      }
      color.push(value)
    }
  }

  get deleteButton() {
    const user = AppState.identity
    
    if (user == null) {
      return ''
    }
    
    if (this.creatorId != user.id) {
      return ''
    }
    
    return `
    <button class="btn btn-outline-danger">
      Delete
    </button>
    `
  }


  get houseCard() {
    return `
    <div class="col-12">
      <div class="row rounded house-border mb-3" style="border-color: #${this.randomColorBorder}">
        <div class="col-md-8">
          <div class="d-flex flex-column justify-content-between h-100">
            <div>
              <div>
                <p class="fs-3 mb-3">${this.levels}-Story ${this.bedrooms} Bed ${this.bathrooms} Bath Home</p>
              </div>
              <div class="d-flex justify-content-between mt-3">
                <p class="fs-4">Listed Price: $${this.price.toLocaleString()}</p>
                <p class="fs-4">Built in ${this.year}</p>
              </div>
              <div class="mt-3 fs-5">
                <p>${this.description}</p>
              </div>
            </div>
            <div class="mb-3 d-flex justify-content-between">
            <div>
              <img src="${this.creator.picture}" class="creator-img">
              <span>${this.creator.name}</span>
            </div>
            ${this.deleteButton}
            </div>
          </div>
        </div>
        <div class="col-md-4 px-0">
          <div>
            <img src="${this.imgUrl}" alt="A ${this.levels}-Story Home with ${this.bedrooms} bedrooms and ${this.bathrooms} bathrooms" class="house-img">
          </div>
        </div>
      </div>
    </div>
    `
  }

}