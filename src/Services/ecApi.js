import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { base_url } from "../firebaseapi/api";



const ecApi = createApi ({
   reducerPath: "ecApi",
   baseQuery: fetchBaseQuery({baseUrl: base_url}),
endpoints: (builder) => ({
getCategoryList: builder.query({
 query: () => "CategoryList.json",  
}),

})
})


export const { useGetCategoryListQuery } = ecApi;


