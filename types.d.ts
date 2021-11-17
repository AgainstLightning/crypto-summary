export type Change = {
    percentage: number
    absolute: number
}

export type Price = {
    last: number
    high: number
    low: number
    change: Change
}

export type Pair = {
    price: Price,
    volume: number
    volumeQuote: number
}

export type Market = Pair<{
    market: string,
    pair: string,
}>

export interface FetchedResponse {
    result: {
        [key: string]: Pair
    }
}

export type HydratedData = {
    [pairName: string]: {                   
        [market: string]: Market            
    }
}