import Homepage from '../views/pages/homepage';
import DetailPage from '../views/pages/detailPage';
import FavoritePage from '../views/pages/favoritePage';

const routes = {
  '/': Homepage,
  '/detail/:id': DetailPage,
  '/favorite': FavoritePage,
};

export default routes;
