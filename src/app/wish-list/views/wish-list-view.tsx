import {
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import { useWishlistStore } from '../../../lib/stores/wish-list.store';
import { ProductsList } from '../../../components/products-list';
import { routes } from '../../../lib/routes';

function WishlistView() {
   const products = useWishlistStore(store => store.products);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Wish list</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent color="light">
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Wish list</IonTitle>
               </IonToolbar>
            </IonHeader>
            <section>
               <ProductsList
                  products={products}
                  route={routes().wishList().productDetails}
               />
            </section>
         </IonContent>
      </IonPage>
   );
}

export default WishlistView;
