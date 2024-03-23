import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function Coin() {
    const [coinData, setCoinData] = useState('')
    const coin = useParams().id

    useEffect(() => {
        async function fetchCoin() {
            const response = await fetch(`https://api.coincap.io/v2/assets/${coin}`)
            const coinData = await response.json()
            setCoinData(coinData.data)
        }
        fetchCoin()
    }, [])

    return (
        <>
            {console.log(coinData)}
            {coinData && (
                <>
                    <h3>{coinData.name}</h3>
                    <div>
                        <p><b>ID</b>: {coinData.id}</p>
                        <p><b>Ranking</b>: {coinData.rank}</p>
                        <p><b>Name</b>: {coinData.name}</p>
                        <p><b>Symbol</b>: {coinData.symbol}</p>
                        <p><b>Supply</b>: {coinData.supply}</p>
                        <p><b>Max supply</b>: {coinData.maxSupply || 'Unlimited'}</p>
                        <p><b>Market Cap Usd</b>: {coinData.marketCapUsd}</p>
                        <p><b>Volume used 24h</b>: {coinData.volumeUsd24Hr}</p>
                        <p><b>Price USD</b>: {coinData.priceUsd}</p>
                        <p><b>Change % 24h</b>: {coinData.changePercent24Hr}</p>
                        <p><b>VWAP 24h</b>: {coinData.vwap24Hr}</p>
                        <p><b>Explorer</b>: <a href={coinData.explorer} target='_blank'>{coinData.explorer}</a></p>
                    </div>
                </>
            )}
        </>
    )
}

export default Coin