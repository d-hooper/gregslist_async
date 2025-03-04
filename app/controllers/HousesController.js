import { AppState } from "../AppState.js";
import { housesServices } from "../services/HousesServices.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {

  constructor() {
    AppState.on('houses', this.drawHouses)
    this.getHouses()
  }

  drawHouses() {
    const houses = AppState.houses
    const housesElem = document.getElementById('houseListings')
    let housesContent = ''
    houses.forEach(house => housesContent += house.houseCard)
    housesElem.innerHTML = housesContent

  }

  async getHouses() {
    try {
      await housesServices.getHouses()
      
    } catch (error) {
      console.error('COULD NOT GET HOUSES', error);
      Pop.error(error, 'Could not get houses')
    }
  }
}