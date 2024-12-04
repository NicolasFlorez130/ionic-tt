import {
   IonContent,
   IonHeader,
   IonPage,
   IonTitle,
   IonToolbar,
} from '@ionic/react';

function FavoritesView() {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>Buscar productos</IonTitle>
            </IonToolbar>
         </IonHeader>
         <IonContent fullscreen>
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Tab 1</IonTitle>
               </IonToolbar>
            </IonHeader>
         </IonContent>
      </IonPage>
   );
}

export default FavoritesView;
