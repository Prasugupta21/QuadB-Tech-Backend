import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Header';

const HodlInfo = () => {
  const [tickerData, setTickerData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/ticker');
        setTickerData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="min-h-screen bg-[#191d28] text-white">
     <Header/>

      <div className="container mx-auto px-4 py-8">

        <div className="grid grid-cols-5 gap-4 mb-8">

            <div className='flex flex-col'>
          <div className=" rounded-lg p-4 text-center">
            <div className="text-[#3dc6c1] text-2xl">0.1%</div>
            <div className="text-gray-400 mx-auto">5 Mins</div>
            </div>
          </div>
          <div className="flex flex-col">

          <div className=" rounded-lg p-4 text-center">
            <div className="text-[#3dc6c1] text-2xl">0.96%</div>
            <div className="text-gray-400 mx-auto">1 Hour</div>
          </div>
          </div>
        <div className="text-center mb-8">
            <h1 className="text-gray-400 text-3xl mt-[-1.0rem]">Best Price to Trade</h1>
          <h2 className="text-4xl font-bold ">
            ₹{' '}
            {tickerData[0]?.lastPrice
              ? new Intl.NumberFormat('en-IN').format(tickerData[0].lastPrice)
              : '0'}
          </h2>
        </div>

          <div  className="flex flex-col">
  <div className=" rounded-lg p-4 text-center">
            <div className="text-[#3dc6c1] text-2xl">2.73%</div>
            <div className="text-gray-400 mx-auto">1 Day</div>
          </div>
          </div>
          <div className="flex flex-col">

          <div className=" rounded-lg p-4 text-center">
            <div className="text-[#3dc6c1] text-2xl">7.51%</div>
            <div className="text-gray-400 mx-auto">7 Days</div>
          </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full  rounded-lg">
            <thead>
              <tr className="text-gray-400 ">
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Platform</th>
                <th className="p-4 text-right">Last Traded Price</th>
                <th className="p-4 text-right">Buy / Sell Price</th>
                <th className="p-4 text-right">Difference</th>
                <th className="p-4 text-right">Savings</th>
              </tr>
            </thead>
            <tbody className=''>
              {tickerData.map((ticker, index) => {
                const name=ticker.name.slice(0,3);
                const difference =
                  (( ticker.buyPrice - ticker.sellingPrice) / ticker.sellingPrice * 100).toFixed(2);
                const savings = (ticker.buyPrice - ticker.sellingPrice).toFixed(2);

                return (
                  <tr key={index} className="border-t border-gray-700 my-[60rem] bg-[#2e3241]">
                    <td className="p-4">{index + 1}</td>
                    <td className="p-4 platform-cell">
                      
                     {name}
                    </td>
                    <td className="p-4 text-right">
                      ₹{' '}
                      {new Intl.NumberFormat('en-IN').format(ticker.lastPrice)}
                    </td>
                    <td className="p-4 text-right">
                      ₹ {new Intl.NumberFormat('en-IN').format(ticker.buyPrice)} /
                      ₹ {new Intl.NumberFormat('en-IN').format(ticker.sellingPrice)}
                    </td>
                    <td
                      className={`p-4 text-right ${
                        difference >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      {difference}%
                    </td>
                    <td
                      className={`p-4 text-right ${
                        savings >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}
                    >
                      ₹ {Math.abs(savings)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
</div>
</div>   
  );
};

export default HodlInfo;