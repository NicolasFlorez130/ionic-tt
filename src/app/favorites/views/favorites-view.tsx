import {
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import { useSavedProductsStore } from '../../../lib/stores/saved-products.store';
import { ProductsList } from '../../../components/products-list';
import { routes } from '../../../lib/routes';

function FavoritesView() {
   const products = useSavedProductsStore(store => store.products);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Favorite products</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent color="light">
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Favorite products</IonTitle>
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
