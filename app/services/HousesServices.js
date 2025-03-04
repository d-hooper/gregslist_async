import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "../utils/Axios.js"

class HousesServices{
  
  
  async getHouses() {
    const response = await api.get('api/houses')
    // console.log('Got houses 🏠🏠🏠', response.data);
    const houses = response.data.map(house => new House(house))
    AppState.houses = houses
  }
  
  async createHouse(rawHouseData) {
    const response = await api.post('api/houses', rawHouseData)
    const newHouse = new House(response.data)
    AppState.houses.push(newHouse)
  }
  
  async deleteHouse(houseId) {
      const response = await api.delete(`api/houses/${houseId}`) 
      const houses = AppState.houses
      const foundIndex = houses.findIndex(house => house.id == houseId)
      houses.splice(foundIndex, 1)
  }
}

export const housesServices = new HousesServices()