import { Redirect, Route } from 'react-router-dom';
import {
   IonApp,
   IonIcon,
   IonLabel,
   IonRouterOutlet,
   IonTabBar,
   IonTabButton,
   IonTabs,
   setupIonicReact,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';

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
import '@ionic/react/css/palettes/dark.system.css';
import { ApolloProvider } from '@apollo/client';
import { client } from './config/apollo-client';

setupIonicReact();

const App: React.FC = () => (
   <ApolloProvider client={client}>
      <IonApp>
         <IonReactRouter>
            <IonTabs>
               <IonRouterOutlet>
                  <Route exact path="/tab1">
                     <Tab1 />
                  </Route>
                  <Route exact path="/tab2">
                     <Tab2 />
                  </Route>
                  <Route path="/tab3">
                     <Tab3 />
                  </Route>
                  <Route exact path="/">
                     <Redirect to="/tab1" />
                  </Route>
               </IonRouterOutlet>
               <IonTabBar slot="bottom">
                  <IonTabButton tab="tab1" href="/tab1">
                     <IonIcon aria-hidden="true" icon={triangle} />
                     <IonLabel>Tab 1</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab2" href="/tab2">
                     <IonIcon aria-hidden="true" icon={ellipse} />
                     <IonLabel>Tab 2</IonLabel>
                  </IonTabButton>
                  <IonTabButton tab="tab3" href="/tab3">
                     <IonIcon aria-hidden="true" icon={square} />
                     <IonLabel>Tab 3</IonLabel>
                  </IonTabButton>
               </IonTabBar>
            </IonTabs>
         </IonReactRouter>
      </IonApp>
   </ApolloProvider>
);

export default App;
