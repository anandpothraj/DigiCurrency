import React from 'react';
import './index';

const Coin = ({name, image, symbol,price,volume,priceChange ,marketcap}) => {
    return (
            <div className="coinRow">
                <img src={image} alt="crypto" />
                <h3>{name}</h3>
                <p className="coinSymbol">{symbol}</p>
                <p className="coinPrice">${price}</p>
                <p className="coinVolume">${volume.toLocaleString()}</p>
                {priceChange < 0 ? (
                    <p className='coinPercent red'>{priceChange.toFixed(2)}%</p>
                ) : (
                    <p className='coinPercent green'>{priceChange.toFixed(2)}%</p>
                )}
                <p className="coinMarketcap">
                    Mkt Cap : ${marketcap.toLocaleString()}
                </p>

            </div>
    )
}

export default Coin;

