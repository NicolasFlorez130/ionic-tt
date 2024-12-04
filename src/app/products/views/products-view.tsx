import { useLazyQuery, useQuery } from '@apollo/client';
import {
   IonButton,
   IonCard,
   IonCardHeader,
   IonCardSubtitle,
   IonCardTitle,
   IonContent,
   IonHeader,
   IonIcon,
   IonImg,
   IonInfiniteScroll,
   IonInfiniteScrollContent,
   IonInput,
   IonItem,
   IonList,
   IonLoading,
   IonPage,
   IonSpinner,
   IonThumbnail,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import { search } from 'ionicons/icons';
import { GET_PRODUCTS_SUMMARY } from '../../../queries/products.queries';
import { useEffect, useRef, useState } from 'react';
import { routes } from '../../../lib/routes';
import { ProductPreview } from '../../../types/products';

function ProductsView() {
   const [searchQuery, setSearchQuery] = useState<string>();
   const paginationRef = useRef(0);

   const [productsList, setProductsList] = useState<ProductPreview[]>();

   const [getProducts, { loading, error, data }] = useLazyQuery(
      GET_PRODUCTS_SUMMARY,
      {
         onCompleted: ({ products }) =>
            setProductsList(prev => [...(prev ?? []), ...products]),
      }
   );

   function queryProducts() {
      return getProducts({
         variables: {
            offset: paginationRef.current,
            limit: paginationRef.current + 10,
            title: searchQuery ?? '',
         },
      });
   }

   //

   const timeoutRef = useRef<NodeJS.Timeout>();

   useEffect(() => {
      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(async () => {
         if (!!searchQuery) {
            paginationRef.current = 0;

            setProductsList(undefined);

            await queryProducts();

            paginationRef.current += 10;
         }
      }, 600);
   }, [searchQuery]);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Find your product</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent color="light">
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Find your product</IonTitle>
               </IonToolbar>
            </IonHeader>
            <section className="p-4">
               <IonInput
                  className="bg-white rounded-lg !px-4"
                  aria-label="search products"
                  placeholder="Filter by name..."
                  clearInput
                  onIonInput={({ target: { value } }) =>
                     setSearchQuery(value?.toString())
                  }
               >
                  <IonIcon icon={search} slot="start" />
               </IonInput>
            </section>
            <section className="flex-wrap flex justify-center">
               {!!productsList ? (
                  <>
                     <IonList inset className="w-full">
                        {productsList.map((product, i) => (
                           <IonItem
                              key={`${product.id}/${i}`}
                              routerLink={routes()
                                 .products()
                                 .productDetails(product.title)}
                           >
                              <IonThumbnail slot="start">
                                 <IonImg
                                    alt={`${product.title} image`}
                                    src={product.images.at(0)}
                                 />
                              </IonThumbnail>
                              <div className="w-full">
                                 <p className="text-sm text-gray-500">
                                    {product.category.name}
                                 </p>
                                 <p className="w-full font-medium truncate text-lg">
                                    {product.title}
                                 </p>
                              </div>
                           </IonItem>
                        ))}
                     </IonList>
                     <IonInfiniteScroll
                        onIonInfinite={async ev => {
                           if (
                              !!searchQuery &&
                              paginationRef.current > 0 &&
                              (data?.products.length ?? 0) > 0
                           ) {
                              await queryProducts();

                              paginationRef.current += 10;
                           }
                           ev.target.complete();
                        }}
                     >
                        <IonInfiniteScrollContent />
                     </IonInfiniteScroll>
                  </>
               ) : loading ? (
                  <IonSpinner className="justify-self-center" name="dots" />
               ) : error ? (
                  <p className="text-center">
                     An error occurred getting products
                  </p>
               ) : (
                  <p className="text-center">
                     Enter the name of the product you're looking for to see
                     items
                  </p>
               )}
            </section>
         </IonContent>
      </IonPage>
   );
}

export default ProductsView;
