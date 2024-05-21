import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from 'next/link';
import axios from 'axios'; // Importar o Axios

import { ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/outline";

interface StockPortfolioProps {
  nameStock: string;
  symbolStock: string;
  valueToday: number;
  rate: number;
  levelUp?: boolean;
  levelDown?: boolean;
}

const formatCurrency = (value = 0) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const simplifiedPercent = (value = 0) => {
  return value.toFixed(2);
}

const StockPortfolio: React.FC<StockPortfolioProps> = ({
  nameStock,
  symbolStock,
  valueToday,
  rate,
  levelUp,
  levelDown,
}) => {
  return (

      <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex justify-between items-center">
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {symbolStock}
          </h4>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium dark:text-white">Preço (agora)</span>
          </div>
          <span className="flex items-center gap-1 text-sm font-bold dark:text-white">
            {formatCurrency(valueToday)}
          </span>
        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium dark:text-white">Variação (agora)</span>
          </div>
          <span
            className={`flex items-center gap-1 text-sm font-medium ${levelUp && "text-meta-3"} ${levelDown && "text-meta-1"}`}
          >
            {simplifiedPercent(rate)}
            {levelUp && (
              <ArrowUpIcon className="fill-meta-3" width={11} height={11} />
            )}
            {levelDown && (
              <ArrowDownIcon className="fill-meta-1" width={11} height={11} />
            )}
          </span>
        </div>
      </div>
  );
};

const StocksList = () => {
  const [stockDetails, setStockDetails] = useState<any[]>([]); // Estado para armazenar os detalhes das ações

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const res = await axios.get('http://localhost:8080/portfolio');
        setStockDetails(res.data.results);
      } catch (error) {
        console.error('Error fetching stock details:', error);
      }
    };

    fetchStockDetails();
  }, []);

  const stocks = stockDetails.map((stock: any) => {
    const isUp = stock.value_stock > stock.value_purchased;
    const isDown = stock.value_stock < stock.value_purchased;
    const rate = ((stock.value_stock - stock.value_purchased) / stock.value_purchased) * 100;

    return (
      <StockPortfolio
        key={stock.id}
        nameStock={stock.symbol}
        symbolStock={stock.symbol}
        valueToday={stock.value_stock}
        rate={rate}
        levelUp={isUp}
        levelDown={isDown}
      />
    );
  });

  return <div className="grid grid-cols-1 gap-4">{stocks}</div>;
};

export default StocksList;