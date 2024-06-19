import React, { ReactNode } from "react";
import Image from "next/image";
import Link from 'next/link';


import {
  ArrowDownIcon,
  ArrowUpIcon
} from "@heroicons/react/24/outline";

interface StockCardProps {
  nameStock: string;
  symbolStock: string;
  valueToday: number;
  rate: number;
  levelUp?: boolean;
  levelDown?: boolean;
  logoStock: string;
}

const formatCurrency = (value = 0) => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const simplifiedPercent = (value = 0) => {
  return value;
}


const StockCard: React.FC<StockCardProps> = ({
  nameStock,
  symbolStock,
  valueToday,
  rate,
  levelUp,
  levelDown,
  logoStock,
}) => {

  return (
    <Link href={`/stock/${symbolStock}`}>

      <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">

        <div className="flex justify-between items-center">
          <Image src={logoStock} alt="" width={40} height={40} className="rounded"></Image>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {symbolStock}
          </h4>
        </div>


        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium dark:text-white">Preço (agora)</span>
          </div>

          <span className="flex items-center gap-1 text-sm font-bold dark:text-white">{formatCurrency(valueToday)}</span>

        </div>
        <div className="mt-4 flex items-end justify-between">
          <div>
            <span className="text-sm font-medium dark:text-white">Variação (agora)</span>
          </div>

          <span
            className={`flex items-center gap-1 text-sm font-medium ${levelUp && "text-meta-3"
              } ${levelDown && "text-meta-1"} `}
          >
            {simplifiedPercent(rate)}

            {levelUp && (
              <ArrowUpIcon className="fill-meta-3" width={11} height={11}></ArrowUpIcon>
            )}
            {levelDown && (
              <ArrowDownIcon className="fill-meta-1" width={11} height={11}></ArrowDownIcon>
            )}
          </span>
        </div>
      </div>


    </Link>



  );
};



export default StockCard;
