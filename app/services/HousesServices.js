class HousesServices{
  async getHouses() {
    await console.log('Return houses🏠');
  }

}

export const housesServices = new HousesServices()