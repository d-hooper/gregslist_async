

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

  get houseCard() {
    return `
    <div class="col-12">
          <div class="row rounded house-border" style="border-color: mediumseagreen">
            <div class="col-md-8">
              <div class="d-flex flex-column justify-content-between h-100">
                <div>
                  <div>
                    <p class="fs-3 mb-3">2-Story 4 Bed 4 Bath Home</p>
                    <small>Listed on 04/12/2023</small>
                  </div>
                  <div class="d-flex justify-content-between mt-3">
                    <p class="fs-4">Listed Price: $590,000</p>
                    <p class="fs-4">Built in 1997</p>
                  </div>
                  <div class="mt-3 fs-5">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates numquam sequi architecto
                      adipisci ipsa fugit!</p>
                  </div>
                </div>
                <div class="mb-3">
                  <button class="btn btn-outline-danger">Delete</button>
                </div>
              </div>
            </div>
            <div class="col-md-4 px-0">
              <div>
                <img src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     alt="A house with a lawn" class="house-img">
              </div>
            </div>
          </div>
        </div>
    `
  }

}