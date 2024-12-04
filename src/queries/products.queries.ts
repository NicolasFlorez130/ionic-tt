import { gql, TypedDocumentNode } from '@apollo/client';
import { Product, ProductPreview } from '../types/products';

export const GET_PRODUCTS_SUMMARY: TypedDocumentNode<
   { products: ProductPreview[] },
   { offset: number; limit: number; title: string }
> = gql(`
   query GetProductsSummary($offset: Int, $limit: Int, $title: String){
      products(limit: $limit, offset: $offset, title: $title) {
         id
         title
         images
         category {
            name
         }
      }
   }
`);

export const GET_PRODUCT_DETAILS: TypedDocumentNode<
   { products: Product[] },
   { title: string }
> = gql(`
   query GetProductDetails($title: String){
      products(title: $title, limit: 1) {
         id
         title
         price
         description
         images
         category {
            id
            name
            image
         }
      }
   }
`);
