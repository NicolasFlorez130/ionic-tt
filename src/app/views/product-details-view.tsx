import { useQuery } from '@apollo/client';
import {
   IonBackButton,
   IonButton,
   IonButtons,
   IonCard,
   IonCardContent,
   IonCardHeader,
   IonCardSubtitle,
   IonCardTitle,
   IonContent,
   IonHeader,
   IonIcon,
   IonImg,
   IonPage,
   IonSpinner,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import { GET_PRODUCT_DETAILS } from '../../queries/products.queries';
import { RouteComponentProps } from 'react-router';
import { Category } from '../../types/category';

import {
   heart,
   heartDislikeOutline,
   heartHalf,
   heartOutline,
} from 'ionicons/icons';
import { useFavoritesStore } from '../../lib/stores/favorites.store';
import { useEffect, useMemo, useState } from 'react';
import { ProductDetails } from '../../components/product-details';

interface IProductDetailsView
   extends RouteComponentProps<{
      title: string;
   }> {}

function ProductDetailsView({
   match: {
      params: { title },
   },
}: IProductDetailsView) {
   const { removeProduct, addProduct, products } = useFavoritesStore();

   const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
      variables: {
         title,
      },
   });

   const item = data?.products.at(0);

   const [isFav, setIsFav] = useState(false);

   useEffect(() => {
      item?.id && setIsFav(products.some(({ id }) => id === item.id));
   }, [item?.id]);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton />
               </IonButtons>
               <IonTitle>Product details</IonTitle>
               <IonButtons slot="end">
                  <IonButton
                     disabled={!item}
                     onClick={() => {
                        if (!!item) {
                           if (isFav) {
                              removeProduct(item.id);
                              setIsFav(false);
                           } else {
                              addProduct({ ...item });
                              setIsFav(true);
                           }
                        }
                     }}
                     type="button"
                     fill="clear"
                  >
                     <IonIcon
                        icon={
                           !item
                              ? heartDislikeOutline
                              : isFav
                                ? heart
                                : heartOutline
                        }
                     />
                  </IonButton>
               </IonButtons>
            </IonToolbar>
         </IonHeader>
         <IonContent fullscreen color="light">
            <div className="space-y-6 p-4 w-full">
               {!!item ? (
                  <ProductDetails data={item} />
               ) : loading ? (
                  <div className="flex justify-center">
                     <IonSpinner name="dots" />
                  </div>
               ) : error ? (
                  <p className="text-center">
                     An error occurred getting the details of this product
                  </p>
               ) : (
                  <p className="text-center">
                     There's no product with this name
                  </p>
               )}
            </div>
         </IonContent>
      </IonPage>
   );
}

export default ProductDetailsView;
