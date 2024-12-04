import { IonCard, IonCardContent, IonCardSubtitle, IonImg } from '@ionic/react';
import { Category } from '../types/category';

interface ICategoryDetails {
   data: Category;
}

export function CategoryDetails({ data }: ICategoryDetails) {
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
