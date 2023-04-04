import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const FavoritePage = {
  async render() {
    return ` 
    <div class="explore">
      <h1 tabindex="0" class="explore__label">Favorite</h1>
      <div id="card"></div>
      <div id="empty-card"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#card');
    const emptyRestaurant = document.querySelector('#empty-card');
    if (restaurants.length === 0) {
      emptyRestaurant.innerHTML = `
        Belum ada restaurant favorite
      `;
    }
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default FavoritePage;
