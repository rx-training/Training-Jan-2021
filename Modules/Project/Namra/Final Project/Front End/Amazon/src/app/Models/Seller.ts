export interface Seller {
    sellerId?: number;
    sellerName: string;
    sellerContactNo: string;
    sellerEmail: string;
    sellerCompanyName: string;
    sellerDate ?: Date;
}
export interface SellerProduct {
    sellerProductId ?: number,
    sellerId : number,
    productId : number,
    sellerProductDate ?: Date
}