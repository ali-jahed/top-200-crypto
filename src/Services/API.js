import axios from 'axios'
const URL_BASE = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false";

const getCoin = async ()=>{
    const respons = await axios.get(URL_BASE);
    return respons.data;
}
export{getCoin}