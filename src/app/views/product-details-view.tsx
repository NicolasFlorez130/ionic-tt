import { useQuery } from '@apollo/client';
import {
   IonBackButton,
   IonButtons,
   IonCard,
   IonCardContent,
   IonCardHeader,
   IonCardSubtitle,
   IonCardTitle,
   IonContent,
   IonHeader,
   IonImg,
   IonPage,
   IonSpinner,
   IonTitle,
   IonToolbar,
} from '@ionic/react';
import { GET_PRODUCT_DETAILS } from '../../queries/products.queries';
import { RouteComponentProps } from 'react-router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Product } from '../../types/products';
import { Navigation } from 'swiper/modules';
import { formatInUSD } from '../../lib/utils/formatting';
import { Category } from '../../types/category';

import 'swiper/css';
import 'swiper/css/navigation';
import '@ionic/react/css/ionic-swiper.css';

interface IProductDetailsView
   extends RouteComponentProps<{
      title: string;
   }> {}

function ProductDetailsView({
   match: {
      params: { title },
   },
}: IProductDetailsView) {
   const { data, loading, error } = useQuery(GET_PRODUCT_DETAILS, {
      variables: {
         title,
      },
   });

   const item = data?.products.at(0);

   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonButtons slot="start">
                  <IonBackButton></IonBackButton>
               </IonButtons>
               <IonTitle>Product details</IonTitle>
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

interface IProductDetails {
   data: Product;
}

function ProductDetails({ data }: IProductDetails) {
   return (
      <section className="space-y-4">
         <Swiper
            className="rounded-xl [&_.swiper-button-prev]:text-white [&_.swiper-button-next]:text-white"
            navigation
            modules={[Navigation]}
         >
            {data.images.map((image, i) => (
               <SwiperSlide key={i}>
                  <IonImg
                     className="w-full aspect-square"
                     alt={`${data.title} image ${i}`}
                     src={image}
                  />
               </SwiperSlide>
            ))}
         </Swiper>
         <h1 className="text-4xl font-bold">{data.title}</h1>
         <p className="text-gray-600 text-xl font-bold">
            {formatInUSD(data.price)}
         </p>
         <CategoryDetails data={data.category} />
         <p>{data.description}</p>
      </section>
   );
}

interface ICategoryDetails {
   data: Category;
}

function CategoryDetails({ data }: ICategoryDetails) {
   return (
      <IonCard className="m-0">
         <IonCardContent className="p-2 grid grid-cols-[auto_1fr] gap-4 w-max items-center">
            <IonImg
               className="h-10 rounded-md overflow-hidden aspect-square"
               alt={`category ${data.name} image`}
               src={data.image}
            />
            <IonCardSubtitle>{data.name}</IonCardSubtitle>
         </IonCardContent>
      </IonCard>
   );
}

export default ProductDetailsView;
