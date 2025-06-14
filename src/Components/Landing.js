import React, {useEffect, useState} from 'react';
import { getCoin } from '../Services/API';
import Coin from './Coin';

import Loader from './Loader';

const Landing = () => {
    const [coins, setCoins] = useState([]);
    const [Search, setSearch] = useState('');
    useEffect (()=>{
        const fetchAPI = async()=>{
            const data = await getCoin();
            setCoins(data)   
        }
        fetchAPI()
    },[])

    const searchHandler = (e) => {
        setSearch(e.target.value);

    }
    const searchedCoin = coins.filter(coin => coin.name.toLowerCase().includes(Search.toLowerCase()))

    return (
        < >
        <div>
            <input
            className="w-96 px-4 py-2 mb-6 rounded-lg shadow-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Search"
            value={Search}
            onChange={searchHandler}
            />

            {coins.length ? (
            <div className="flex flex-col items-center space-y-4">
                {searchedCoin.map(coin => (
                <Coin
                    key={coin.id}
                    name={coin.name}
                    image={coin.image}
                    symbol={coin.symbol}
                    price={coin.current_price}
                    marketcap={coin.market_cap}
                    pricechange={coin.price_change_24h}
                />
                ))}
            </div>
            ) : (
            <div className="flex justify-center items-center h-40">
                <Loader />
            </div>
            )}
        </div>
        </>
    );
};

export default Landing;