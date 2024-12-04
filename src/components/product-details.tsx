import { Product } from '../types/products';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IonImg } from '@ionic/react';
import { formatInUSD } from '../lib/utils/formatting';

import 'swiper/css';
import 'swiper/css/navigation';
import '@ionic/react/css/ionic-swiper.css';
import { CategoryDetails } from './category-details';

interface IProductDetails {
   data: Product;
}

export function ProductDetails({ data }: IProductDetails) {
   return (
      <section className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-5 w-full max-w-screen-lg m-auto">
         <div className="w-full lg:col-span-3">
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
         </div>
         <div className="space-y-4 lg:col-span-2">
            <h1 className="text-4xl font-bold">{data.title}</h1>
            <p className="text-gray-600 text-xl font-bold">
               {formatInUSD(data.price)}
            </p>
            <CategoryDetails data={data.category} />
            <p>{data.description}</p>
         </div>
      </section>
   );
}
