import { IonImg, IonItem, IonList, IonThumbnail } from '@ionic/react';
import { ProductPreview } from '../types/products';

interface IProductsList {
   products: ProductPreview[];
   route(_?: string): string;
}

export function ProductsList({ products, route }: IProductsList) {
   return (
      <IonList inset className="w-full max-w-screen-md">
         {products.map((product, i) => (
            <IonItem
               key={`${product.id}/${i}`}
               routerLink={route(product.title)}
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
   );
}
