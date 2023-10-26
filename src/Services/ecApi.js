import { base_url } from "../firebase/api";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";




export const ecApi = createApi({
   reducerPath: "ecApi",
   baseQuery: fetchBaseQuery({
      baseUrl: base_url
   }),

   endpoints: (builder) => ({
      getCategoryList: builder.query({
         query: () => "CategoryList.json",
      }),


      // esto agarra la imagen de firebase
      getImage: builder.query({
         query: () => "image.json",
       }),
   
       // ENVIA LA IMAGEN A LA BD
       putImage: builder.mutation({
         query: (image) => ({
           url: "image.json",
           method: "PUT",
           body: image,
         }),
       }),
     }),
   });


   export const {
      useGetCategoryListQuery,
      useGetImageQuery,
      usePutImageMutation,
    } = ecApi;
    

    