import { AppState } from "../AppState.js";
import { housesServices } from "../services/HousesServices.js";
import { getFormData } from "../utils/FormHandler.js";
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

  async createHouseListing() {
    try {
      event.preventDefault()
      const formElem = event.target
      const rawHouseData = getFormData(formElem)
      await housesServices.createHouse(rawHouseData)
    } catch (error) {
      console.error('COULD NOT ADD THE SPECIFIED HOUSE', error);
      Pop.error(error, 'Could not add house')
    }
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