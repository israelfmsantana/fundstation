import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";
import logoStock from "./logoStock.png"; // Importe seu próprio logo ou ajuste conforme necessário

interface TimelineEvent {
  buyDate: string;
  sellDate: string;
  buySymbolAction: string;
  sellSymbolAction: string;
  buyValueStock: number;
  sellValueStock: number;
  buyValuePurchased: number;
  sellValueStockSell: number;
  valorGanho: number;
  valorPerda: number;
  sellValuePurchased: number;
}

interface GroupedEvents {
  [date: string]: TimelineEvent[];
}

const Timeline: React.FC<{ events: TimelineEvent[] }> = ({ events }) => {
  const groupedEvents = events.reduce((acc: GroupedEvents, event) => {
    const date = event.buyDate;
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(event);
    return acc;
  }, {});

  const formatCurrency = (value: number) => {
    return value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  };

  const simplifiedPercent = (rate: number) => {
    return rate.toFixed(2) + "%";
  };

  return (
    <div className=" bg-boxdark dark:bg-boxdark text-white dark:text-gray-300 rounded-lg shadow-lg p-8">
      <ul className="timeline space-y-8">
        {Object.keys(groupedEvents).map((date, index) => (
          <li
            key={index}
            className="p-6 border border-gray-700 rounded-lg shadow-sm bg-gray-800 dark:bg-gray-800"
          >
            <div>
              <p className="text-sm text-gray-400">{date}</p>
              {groupedEvents[date].map((event, idx) => (
                <div
                  key={idx}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start mt-4"
                >
                  <div className="rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex justify-between items-center">
                      <h4 className="text-title-md font-bold text-black dark:text-white">
                        {event.sellSymbolAction}
                      </h4>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <span className="text-sm font-medium dark:text-white">
                          Valor Ação quando comprou
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-bold dark:text-white">
                        {event.sellValueStock !== undefined &&
                        event.sellValueStock !== null
                          ? formatCurrency(event.sellValueStock)
                          : "Valor não disponível"}
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <span className="text-sm font-medium dark:text-white">
                          Valor Ação quando vendeu
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-bold dark:text-white">
                        {event.sellValueStockSell !== undefined &&
                        event.sellValueStockSell !== null
                          ? formatCurrency(event.sellValueStockSell)
                          : "Valor não disponível"}
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <span className="text-sm font-medium dark:text-white">
                          Valor Investido
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium dark:text-white">
                        {event.sellValuePurchased !== undefined &&
                        event.sellValuePurchased !== null
                          ? formatCurrency(event.sellValuePurchased)
                          : "Valor não disponível"}
                      </span>
                    </div>
                  </div>

                  {event.valorGanho !== null && (
                       <div className="mt-22 text-center">
                        <div className={`font-semibold text-lg text-green-500`}>
                          {event.valorGanho.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                            <ArrowUpIcon className="inline h-6 w-6 ml-2 text-green-500" />
                        </div>
                      </div>
                    )}
                  
                    {event.valorPerda !== null && (
                      <div className="mt-22 text-center">
                        <div className={`font-semibold text-lg text-red`}>
                          {event.valorPerda.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                          <ArrowDownIcon className="inline h-6 w-6 ml-2 text-red" />
                        </div>
                      </div>
                    )}

                  <div className="mt-5 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark">
                    <div className="flex justify-between items-center">
                      <h4 className="text-title-md font-bold text-black dark:text-white">
                        {event.buySymbolAction}
                      </h4>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <span className="text-sm font-medium dark:text-white">
                          Valor da Ação
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-bold dark:text-white">
                        {event.buyValueStock !== undefined &&
                        event.buyValueStock !== null
                          ? formatCurrency(event.buyValueStock)
                          : "Valor não disponível"}
                      </span>
                    </div>

                    <div className="mt-4 flex items-end justify-between">
                      <div>
                        <span className="text-sm font-medium dark:text-white">
                          Valor Investido
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-sm font-medium dark:text-white">
                        {event.buyValuePurchased !== undefined &&
                        event.buyValuePurchased !== null
                          ? formatCurrency(event.buyValuePurchased)
                          : "Valor não disponível"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
