import { IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import { routes } from '../../lib/routes';
import ProductsView from './views/products-view';
import ProductDetailsView from '../views/product-details-view';

function ProductsOutlet() {
   return (
      <IonRouterOutlet>
         <Route exact path={routes().products().url}>
            <ProductsView />
         </Route>
         <Route
            path={routes().products().productDetails()}
            component={ProductDetailsView}
         />
      </IonRouterOutlet>
   );
}

export default ProductsOutlet;
