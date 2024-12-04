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
import { bag, heart } from 'ionicons/icons';

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
import FavoritesOutlet from './app/favorites/favorites-outlet';
import ProductsOutlet from './app/products/products-outlet';
import { useSetupSavedProducts } from './lib/stores/saved-products.store';

setupIonicReact();

function App() {
   useSetupSavedProducts();

   return (
      <ApolloProvider client={client}>
         <IonApp>
            <IonReactRouter>
               <IonTabs>
                  <IonRouterOutlet>
                     <Route path={routes().products().url}>
                        <ProductsOutlet />
                     </Route>
                     <Route path={routes().favorites().url}>
                        <FavoritesOutlet />
                     </Route>
                     <Redirect exact from="/" to={routes().products().url} />
                  </IonRouterOutlet>
                  <IonTabBar slot="bottom">
                     <IonTabButton
                        tab="products"
                        href={routes().products().url}
                     >
                        <IonIcon aria-hidden="true" icon={bag} />
                        <IonLabel>Productos</IonLabel>
                     </IonTabButton>
                     <IonTabButton
                        tab="favorites"
                        href={routes().favorites().url}
                     >
                        <IonIcon aria-hidden="true" icon={heart} />
                        <IonLabel>Favoritos</IonLabel>
                     </IonTabButton>
                  </IonTabBar>
               </IonTabs>
            </IonReactRouter>
         </IonApp>
      </ApolloProvider>
   );
}

export default App;
