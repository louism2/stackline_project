import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { Product, Sale } from '../types/product';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const MonthlySalesChart = (): JSX.Element => {

    const product: Product = useSelector((state: RootState) => state.product.products[0])

    const data = {
        '01': {
            label: 'JAN',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '02': {
            label: 'FEB',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '03': {
            label: 'MAR',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '04': {
            label: 'APR',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '05': {
            label: 'MAY',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '06': {
            label: 'JUN',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '07': {
            label: 'JUL',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '08': {
            label: 'AUG',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '09': {
            label: 'SEP',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '10': {
            label: 'OCT',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '11': {
            label: 'NOV',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        },
        '12': {
            label: 'DEC',
            retailSalesTotal: 0,
            wholesaleSalesTotal: 0
        }
    }

    product.sales.forEach((sale: Sale) => {
        const matches = sale.weekEnding.match(/\d+\-(\d{2})/)!
        const monthNumber = matches[1]
        console.log(monthNumber)
        const monthData = data[monthNumber]
        console.log(monthData)

        monthData.retailSalesTotal += sale.retailSales
        monthData.wholesaleSalesTotal += sale.wholesaleSales
    })

    const chartProps = {
        labels: Object.values(data).map((d) => d.label),
        datasets: [
            {
                label: 'Retail Sales',
                data: Object.values(data).map((d) => d.retailSalesTotal)
            },
            {
                label: 'Wholesale Sales',
                data: Object.values(data).map((d) => d.wholesaleSalesTotal)
            }
        ]
    }


    return (
        <div>
            <Line data={chartProps} />
        </div>
    )
}

export default MonthlySalesChart