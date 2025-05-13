import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Home from '../pages/Home';
import Catalog from '../pages/Catalog';
import Details from '../pages/Details';

const Routes = () => {
  return (
    <RouterRoutes>
      <Route path="/:category/search/:keyword" element={<Catalog />} />
      <Route path="/:category/:id" element={<Details />} />
      <Route path="/:category" element={<Catalog />} />
      <Route path="/" element={<Home />} />
    </RouterRoutes>
  );
};

export default Routes;