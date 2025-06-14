import React from 'react';

const Coin = ({ name, image, symbol, price, marketcap, pricechange }) => {
  return (
    <div className="w-full md:w-3/4 lg:w-2/4 flex items-center justify-between border border-gray-300 rounded-xl p-4 my-2 shadow hover:shadow-md transition-all">
      
      
      <div className="flex items-center gap-4">
        <img className="w-12 h-12" src={image} alt={name} />
        <div className="text-sm sm:text-base font-medium">{name}</div>
      </div>

      
      <span className="uppercase text-sm sm:text-base text-gray-600">{symbol}</span>

      
      <p className="text-sm sm:text-base text-green-600">
        ${price.toLocaleString()}
      </p>

      
      <p
        className={`text-sm sm:text-base font-semibold ${
          pricechange < 0 ? 'text-red-500' : 'text-green-500'
        }`}
      >
        {pricechange.toFixed(2)}%
      </p>

      
      <p className="hidden sm:block text-sm text-gray-500">
        MCap: ${marketcap.toLocaleString()}
      </p>
    </div>
  );
};

export default Coin;
