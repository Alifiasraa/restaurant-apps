import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import API_ENDPOINT from '../../globals/api-endpoint';

const createRestaurantItemTemplate = (restaurant) => `
    <div class="card-item">
    <img tabindex="0" class="card-item__thumbnail lazyload" data-src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}" alt="${restaurant.name}"/>
        <div class="card-item__content">
            <p tabindex="0" class="card-item__info">${restaurant.city} | Rating: ${restaurant.rating}</p>
            <h2 tabindex="0" class="card-item__name"><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
            <p tabindex="0" class="card-item__description">${restaurant.description}</p>
        </div>
    </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
    <h2 tabindex="0" class="restaurant__title">${restaurant.name}</h2>
    <img tabindex="0" class="restaurant__poster lazyload" data-src="${API_ENDPOINT.RESTAURANT_IMAGE + restaurant.pictureId}" alt="${restaurant.name}"/>
    <h3 tabindex="0" class="restaurant__label">Information :</h3>
      <div class="restaurant__info">
        <h4 tabindex="0">Address</h4>
        <p tabindex="0">${restaurant.address}, ${restaurant.city}</p>
        <h4 tabindex="0">Rating</h4>
        <p tabindex="0">${restaurant.rating}</p>
        <h4 tabindex="0">Description</h4>
        <p tabindex="0">${restaurant.description}</p>
        <h4 tabindex="0">Foods</h4>
        <p tabindex="0">${restaurant.menus.foods.map((food) => `${food.name}`).join(', ')}</p>
        <h4 tabindex="0">Drinks</h4>
        <p tabindex="0">${restaurant.menus.drinks.map((drink) => `${drink.name}`).join(', ')}</p>
        <h4 tabindex="0">Review</h4>
      <div class="restaurant__review">
          ${restaurant.customerReviews.map((customerReview) => `
            <div class="review-card" tabindex="0">
              <div class="reviewer-name">
                  ${customerReview.name}
              </div>
              <div class="reviewer-date">
                  ${customerReview.date}
              </div>
              <div class="review">
                  ${customerReview.review}
              </div>
            </div>`).join('')}
      </div>
      </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
