import { createSlice } from "@reduxjs/toolkit";
import { CategoryList } from "../../Data/CategoryList";
import { ProductsList } from "../../Data/ProductList";

const firstSlice = createSlice({

    name: "firstSlice",

    initialState: {
        allCategories: CategoryList,
        allProducts: ProductsList,
        categorySelected: "",
        productsFilterByCategory:[],
        productSelected: {},

    },

    reducers: {
        setCategory: (state, action) => {
            state.categorySelected = action.payload; 
            
            
            state.productsFilterByCategory = state.allProducts.filter(
                (el) => el.category === state.categorySelected
              );
            
        

        },

        setProductSelected: (state, action) => {
            state.productSelected = action.payload;

        }

    },



});
export const {setCategory, setProductSelected} = firstSlice.actions;

export default firstSlice.reducer;