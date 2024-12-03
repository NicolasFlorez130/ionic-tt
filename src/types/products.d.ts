import { Category } from './category';

export interface Product {
   id: string;
   title: string;
   price: number;
   description: string;
   images: string[];
   category: Category;
}

export interface ProductPreview
   extends Pick<Product, 'id' | 'title' | 'images'> {}
