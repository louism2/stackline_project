export type Review = {
    customer: string,
    review: string,
    score: number
}

export type Sale = {
    weekEnding: string,
    retailSales: number,
    wholesaleSales: number,
    unitsSold: number,
    retailerMargin: number

}

export type Product = {
    id: string,
    title: string,
    image: URL,
    subtitle: string,
    brand: string,
    reviews: Review[],
    details: string[],
    tags: string[]
    sales: Sale[]
}