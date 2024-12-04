import {
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import { useFavoritesStore } from '../../../lib/stores/favorites.store';
import { ProductsList } from '../../../components/products-list';
import { routes } from '../../../lib/routes';

function FavoritesView() {
   const products = useFavoritesStore(store => store.products);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Favorites</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent color="light">
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Favorites</IonTitle>
               </IonToolbar>
            </IonHeader>
            <section>
               <ProductsList
                  products={products}
                  route={routes().favorites().productDetails}
               />
            </section>
         </IonContent>
      </IonPage>
   );
}

export default FavoritesView;
