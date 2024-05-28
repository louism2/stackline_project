import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { data } from "../data.ts"
import { RootState } from '../app/store.ts'
import { Product } from '../types/product.ts'
import ProductInfo from './ProductInfo.tsx'
import MonthlySalesChart from './MonthlySalesChart.tsx'
import WeeklySalesTable from './WeeklySalesTable.tsx'

const ProductWrapper: React.FC = () => {
    const dispatch = useDispatch()
    const product: Product = useSelector((state: RootState) => state.product.products[0])


    // In production I would attach the dispatching of the redux action to
    // the url state so that the action would fire when the url changes.
    useEffect(() => {
        dispatch({type: "product/loadProduct", payload: {products: data}})
    })

    if (!product) {
        return <div>LOADING...</div>
    }

    return (
        <div id="product-wrapper">
            <div id="product-sidebar">
                <ProductInfo />
            </div>
            <div id="product-main">
                <MonthlySalesChart />
                <WeeklySalesTable />
            </div>
        </div>
    )
}

export default ProductWrapper