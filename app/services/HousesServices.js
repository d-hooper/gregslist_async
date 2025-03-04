import { api } from "../utils/Axios.js"

class HousesServices{
  async getHouses() {
    const response = await api.get('api/houses')
    console.log('Got houses 🏠🏠🏠', response.data);
  }

}

export const housesServices = new HousesServices()