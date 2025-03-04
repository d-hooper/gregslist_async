import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js"

class HousesServices{
  
  async getHouses() {
    const response = await api.get('api/houses')
    console.log('Got houses 🏠🏠🏠', response.data);
    const houses = response.data.map(house => new House(house))
    AppState.houses = houses
  }

}

export const housesServices = new HousesServices()