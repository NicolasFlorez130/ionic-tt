import { createStore } from 'zustand';
import { ProductPreview } from '../../types/products';

interface SavedProductsStore {
   products: ProductPreview[];
   setProducts(products: ProductPreview[]): void;
   addProduct(product: ProductPreview): void;
   removeProduct(id: string): void;
}

export const useSavedProductsStore = createStore<SavedProductsStore>(set => ({
   products: [],
   setProducts: products => set({ products }),
   removeProduct: id =>
      set(({ products }) => {
         const productIndex = products.findIndex(({ id: $id }) => $id === id);

         const aux = [...products];

         aux.splice(productIndex, 1);

         return { products: aux };
      }),
   addProduct: product =>
      set(({ products }) => ({ products: [...products, product] })),
}));
