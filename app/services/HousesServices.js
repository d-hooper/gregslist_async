import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js"

class HousesServices{
  
  async createHouse(rawHouseData) {
    const response = await api.post('api/houses', rawHouseData)
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }
  
  async getHouses() {
    const response = await api.get('api/houses')
    console.log('Got houses 🏠🏠🏠', response.data);
    const houses = response.data.map(house => new House(house))
    AppState.houses = houses
  }

}

export const housesServices = new HousesServices()