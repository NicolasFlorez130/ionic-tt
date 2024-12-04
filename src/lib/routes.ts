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
      favorites: () => {
         const favoritesUrl = `${baseUrl}/favorites`;

         return {
            url: favoritesUrl,
            productDetails: (slug = ':title') =>
               `${favoritesUrl}/details/${slug}`,
         };
      },
   };
}
