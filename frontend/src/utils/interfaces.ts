import { ReactNode } from "react";

export interface Brand {
    id: string,
    name: string,
    url: string,
    img: string,
}

export interface BrandConfig {
    brandId: string,
    hasCoupons: boolean,
    hasTransferPayment: boolean,
    blueExpress: boolean,
    homePickup: boolean,
    transferPaymentPercentage: number,
    couponPercentage: number,
}

export interface BrandWithConfig extends Brand {
    settings: BrandConfig,
}

export interface Faqs {
    category: string,
    items: {
        id: number,
        question: string,
        answer: ReactNode,
    }[]
}
