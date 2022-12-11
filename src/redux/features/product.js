import { createSlice } from "@reduxjs/toolkit";
import { productActions } from "../actions/product";
import { products } from "../state/product"

const productSlice = createSlice({
  name: "product",
  initialState: products,
  reducers: productActions, 
})

export const { update, add } = productSlice.actions
export default productSlice.reducer