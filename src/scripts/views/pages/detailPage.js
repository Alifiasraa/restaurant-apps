import DataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const DetailPage = {
  async render() {
    return `
            <div id="detail-page"></div>
            <div id="likeButtonContainer"></div>
        `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await DataSource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('#detail-page');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    LikeButtonPresenter.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        pictureId: restaurant.pictureId,
        city: restaurant.city,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });
  },
};

export default DetailPage;
