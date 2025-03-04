import { housesServices } from "../services/HousesServices.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {

  constructor() {
    this.getHouses()
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