import { IonPage, IonRouterOutlet } from '@ionic/react';
import { Route } from 'react-router';
import { routes } from '../../lib/routes';
import ProductsView from './views/products-view';

function ProductsOutlet() {
   return (
      <IonRouterOutlet>
         <Route exact path={routes().products().url}>
            <ProductsView />
         </Route>
         <Route path={routes().products().productDetails()}>
            <IonPage>uwu</IonPage>
         </Route>
      </IonRouterOutlet>
   );
}

export default ProductsOutlet;
