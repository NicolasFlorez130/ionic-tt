import { Redirect, Route } from 'react-router-dom';
import {
   IonApp,
   IonIcon,
   IonLabel,
   IonRedirect,
   IonRouterOutlet,
   IonTabBar,
   IonTabButton,
   IonTabs,
   setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { bag, bookmark } from 'ionicons/icons';

import '@ionic/react/css/core.css';
import './tailwind.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
// import '@ionic/react/css/palettes/dark.system.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo-client';
import { routes } from './lib/routes';
import WishlistOutlet from './app/wish-list/wish-list-outlet';
import ProductsOutlet from './app/products/products-outlet';
import { useSetupWishlist } from './lib/stores/wish-list.store';

setupIonicReact();

function App() {
   useSetupWishlist();

   return (
      <ApolloProvider client={client}>
         <IonApp>
            <IonReactRouter>
               <IonTabs>
                  <IonRouterOutlet>
                     <Route path={routes().products().url}>
                        <ProductsOutlet />
                     </Route>
                     <Route path={routes().wishList().url}>
                        <WishlistOutlet />
                     </Route>
                     <Redirect exact from="/" to={routes().products().url} />
                  </IonRouterOutlet>
                  <IonTabBar slot="bottom">
                     <IonTabButton
                        tab="products"
                        href={routes().products().url}
                     >
                        <IonIcon aria-hidden="true" icon={bag} />
                        <IonLabel>Products</IonLabel>
                     </IonTabButton>
                     <IonTabButton
                        tab="wish-list"
                        href={routes().wishList().url}
                     >
                        <IonIcon aria-hidden="true" icon={bookmark} />
                        <IonLabel>Wish List</IonLabel>
                     </IonTabButton>
                  </IonTabBar>
               </IonTabs>
            </IonReactRouter>
         </IonApp>
      </ApolloProvider>
   );
}

export default App;
