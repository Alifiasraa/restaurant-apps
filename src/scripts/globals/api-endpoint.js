import CONFIG from './config';

const API_ENDPOINT = {
  LIST_RESTAURANT: `${CONFIG.BASE_URL}/list`,
  DETAIL_RESTAURANT: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
  RESTAURANT_IMAGE: `${CONFIG.BASE_URL}/images/small/`,
};

export default API_ENDPOINT;
