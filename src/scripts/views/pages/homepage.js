import DataSource from '../../data/data-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Homepage = {
  async render() {
    return `
        <div class="hero">
            <div class="hero__inner">
                <h1 tabindex="0" class="hero__title">Restaurant Apps</h1>
                <p tabindex="0" class="hero__tagline">Temukan restoran favorite dari berbagai daerah di Indonesia disini!</p>
            </div>
        </div>
        <div class="explore">
            <h1 tabindex="0" class="explore__label">Explore Restaurant</h1>
            <div id="card"></div>
        </div>
        `;
  },

  async afterRender() {
    const data = await DataSource.listRestaurants();
    const { restaurants } = data;
    const restaurantsContainer = document.querySelector('#card');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Homepage;
