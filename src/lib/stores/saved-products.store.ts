import { create, createStore } from 'zustand';
import { ProductPreview } from '../../types/products';
import { Preferences } from '@capacitor/preferences';
import { FAV_PRODUCTS } from '../keys';
import { useEffect } from 'react';

interface SavedProductsStore {
   products: ProductPreview[];
   setProducts(products: ProductPreview[]): void;
   addProduct(product: ProductPreview): void;
   removeProduct(id: string): void;
}

export const useSavedProductsStore = create<SavedProductsStore>(set => ({
   products: [],
   setProducts: products => set({ products }),
   removeProduct: id =>
      set(({ products }) => {
         const productIndex = products.findIndex(({ id: $id }) => $id === id);

         const aux = [...products];

         aux.splice(productIndex, 1);

         void Preferences.set({
            key: FAV_PRODUCTS,
            value: JSON.stringify(aux),
         });

         return { products: aux };
      }),
   addProduct: product =>
      set(({ products }) => {
         const aux = [...products, product];

         void Preferences.set({
            key: FAV_PRODUCTS,
            value: JSON.stringify(aux),
         });

         return { products: aux };
      }),
}));

export function useSetupSavedProducts() {
   const setProducts = useSavedProductsStore(store => store.setProducts);

   useEffect(() => {
      (async () => {
         const { value } = await Preferences.get({
            key: FAV_PRODUCTS,
         });

         if (!!value) {
            const products = JSON.parse(value) as ProductPreview[];

            setProducts(products);
         }
      })();
   }, []);
}
