import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import { routes } from '../../lib/routes';
import FavoritesView from './views/favorites-view';
import ProductDetailsView from '../views/product-details-view';

function FavoritesOutlet() {
   return (
      <IonRouterOutlet>
         <Route exact path={routes().favorites().url}>
            <FavoritesView />
         </Route>
         <Route exact path={routes().favorites().productDetails()}>
            <ProductDetailsView />
         </Route>
      </IonRouterOutlet>
   );
}

export default FavoritesOutlet;
