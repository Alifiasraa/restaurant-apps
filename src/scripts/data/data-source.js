import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async listRestaurants() {
    const response = await fetch(API_ENDPOINT.LIST_RESTAURANT);
    const responseJson = await response.json();
    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL_RESTAURANT(id));
    const responseJson = await response.json();
    return responseJson;
  }
}

export default DataSource;
