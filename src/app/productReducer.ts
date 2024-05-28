import { createSlice } from '@reduxjs/toolkit'
import { Product } from '../types/product'


type ProductState = Product[] | null

const initialProductState: ProductState = []

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: initialProductState
  },
  reducers: {
    // @ts-ignore
    loadProduct: (state, action: {payload: {products: WritableDraft<Product>[]}}) => {
        state.products = action.payload.products
    },
  },
})

export default productSlice.reducer