export function routes() {
   const baseUrl = ``;

   return {
      url: baseUrl,
      products: () => {
         const productsUrl = `${baseUrl}/products`;

         return {
            url: productsUrl,
            productDetails: (slug = ':title') =>
               `${productsUrl}/details/${slug}`,
         };
      },
      wishList: () => {
         const wishListUrl = `${baseUrl}/wish-list`;

         return {
            url: wishListUrl,
            productDetails: (slug = ':title') =>
               `${wishListUrl}/details/${slug}`,
         };
      },
   };
}
