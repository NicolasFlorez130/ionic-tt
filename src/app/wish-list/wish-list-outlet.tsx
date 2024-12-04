import { IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import { routes } from '../../lib/routes';
import WishlistView from './views/wish-list-view';
import ProductDetailsView from '../views/product-details-view';

function WishlistOutlet() {
   return (
      <IonRouterOutlet>
         <Route exact path={routes().wishList().url}>
            <WishlistView />
         </Route>
         <Route
            exact
            path={routes().wishList().productDetails()}
            component={ProductDetailsView}
         />
      </IonRouterOutlet>
   );
}

export default WishlistOutlet;
