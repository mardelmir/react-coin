import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import fetchTopCoins from '../utils/fetch';

function Home() {
    const [cryptoList, setCryptoList] = useState()

    useEffect(() => {
        async function fetchCoin() {
            const response = await fetch('https://api.coincap.io/v2/assets?limit=10')
            const dataList = await response.json()
            setCryptoList(dataList.data)
        }
        fetchCoin()
    }, [])



    return (
        <>
            <h2>Top Cryptocoins</h2>
            <ul className='CryptoList'>
                {cryptoList && (cryptoList.map(crypto =>
                    <li key={crypto.id}>
                        <Link to={`/coin/${crypto.id}`}>
                            <div className="cardCrypto">
                            <p>{crypto.rank}</p>
                            <p>{crypto.name}</p>
                            <p>({crypto.symbol})</p>
                            </div>
                        </Link>
                    </li>)
                )}
            </ul>
        </>
    )
}
export default Home