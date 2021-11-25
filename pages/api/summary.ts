import type { NextApiRequest, NextApiResponse } from 'next'
import type { FetchedResponse, HydratedData } from '../../types.d'
const URL = "https://api.cryptowat.ch/markets/summaries"

const WHITELIST = ["btcusd", "ethusd"]

const handler = async (req : NextApiRequest, res : NextApiResponse) => {
    const apiResponse = await fetch(URL)
    const data : FetchedResponse = await apiResponse.json()
    const hydrated = hydrator(data)

    res.status(200).json(hydrated)
}

const hydrator = (data : FetchedResponse) : HydratedData => {
    const hydrated : HydratedData = {};

    for (let marketPair in data.result) {
        const [market, pair] = marketPair.split(":")
        const isOnWhitelist = WHITELIST.includes(pair)
        const isNewPair = !Object.keys(hydrated).includes(pair)

        if(!isOnWhitelist) continue
        if(isNewPair) hydrated[pair] = {}

        hydrated[pair][market] = { market, pair, ...data.result[marketPair] }
    }

    return hydrated
}

export default handler