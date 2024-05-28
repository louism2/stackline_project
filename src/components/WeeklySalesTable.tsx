import { useSelector } from "react-redux"
import { RootState } from "../app/store"
import { Product, Sale } from '../types/product'
import React from 'react'

const WeeklySalesTable: React.FC = (): JSX.Element => {
    
    const product: Product = useSelector((state: RootState) => state.product.products[0])

    const buildWeeklySalesTable = () => {
        const salesSortedByWeekEndingAsc = [...product.sales].sort((current: Sale, prev: Sale) => {
            if (prev.weekEnding > current.weekEnding) {
                return -1
            } else {
                return 1
            }
        })

        const tableRows = salesSortedByWeekEndingAsc.map((sale: Sale) => {
            return(
                <tr>
                    <td>{ sale.weekEnding }</td>
                    <td>{ sale.retailSales }</td>
                    <td>{ sale.wholesaleSales }</td>
                    <td>{ sale.unitsSold }</td>
                    <td>{ sale.retailerMargin }</td>
                </tr>
            )
        })

        const tableHeaders = (
            <tr>
                <th>WEEK ENDING</th>
                <th>RETAIL SALES</th>
                <th>WHOLESALE SALES</th>
                <th>UNITS SOLD</th>
                <th>RETAILER MARGINS</th>
            </tr>
        )

        return (
            <table>
                { tableHeaders }
                { tableRows }
            </table>
        )
    }

    return <div>{ buildWeeklySalesTable() }</div>
}

export default WeeklySalesTable