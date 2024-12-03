import { gql, TypedDocumentNode } from '@apollo/client';
import { Product, ProductPreview } from '../types/products';

export const GET_PRODUCTS_SUMMARY: TypedDocumentNode<
   ProductPreview[],
   { offset: number; limit: number; title: string }
> = gql(`
   query GetProductsSummary($offset: Number, $limit: Number, $title: String){
      products(limit: $limit, offset: $offset, title: $title) {
         id
         title
         images
      }
   }
`);

export const GET_PRODUCT_DETAILS: TypedDocumentNode<
   Product[],
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
