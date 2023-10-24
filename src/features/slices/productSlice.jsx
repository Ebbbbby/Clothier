import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filteredProducts: JSON.parse(sessionStorage.getItem('filteredData')) || storeData,
    singleProduct:JSON.parse(sessionStorage.getItem('oneProduct')) || storeData,
  },

  reducers: { filteredProducts(state, action) {
        try {
            const filter = storeData?.filter((product) => product.type === action.payload);
            state.filteredProducts = filter;
            const saveState = JSON.stringify(filter);
            sessionStorage.setItem('filteredData', saveState)
        } catch (error) {
           return error
        }
    },
  singleProduct(state, action){
    try {
      const oneProduct = storeData.filter((product)=> product?.id === action.payload);
      state.singleProduct = oneProduct;
    const saveState = JSON.stringify(oneProduct);
    sessionStorage.setItem('oneProduct', saveState)
    console.log(oneProduct, "one");

    } catch (error) {
      return error

    }

  }

  },
});

export const { filteredProducts , singleProduct} = productSlice.actions;
export default productSlice.reducer;
