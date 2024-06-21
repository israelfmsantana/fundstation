import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from "@heroicons/react/24/solid";

interface TimelineEvent {
  buyDate: string;
  sellDate: string;
  buySymbol: string;
  sellSymbol: string;
  buyValueStock: number;
  sellValueStock: number;
  buyValuePurchased: number;
  sellValueSell: number;
  valorGanho: number;
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

  return (
    <div className="bg-white dark:text-white dark:border-strokedark dark:bg-boxdark rounded shadow px-8 py-6 flex flex-col">
      <ul className="timeline space-y-6">
        {Object.keys(groupedEvents).map((date, index) => (
          <li
            key={index}
            className={`p-4 border border-slate-500 rounded-lg shadow-sm ${
              index % 2 === 0 ? "bg-gray-50 dark:boxdark" : "dark:boxdark"
            }`}
          >
            <div>
              <p className="text-sm text-gray-500">{date}</p>
              {groupedEvents[date].map((event, idx) => (
                <div key={idx} className="grid grid-cols-3 gap-4 items-center mt-4">
                  <div>
                    <p className="font-semibold">Compra de Ação: {event.buySymbol}</p>
                    <p>
                      Valor da Ação quando comprou:{" "}
                      {event.buyValueStock.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                    <p>
                      Valor investido:{" "}
                      {event.buyValuePurchased.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
                  </div>
                  <div className="text-center">
                    <div className={`font-semibold text-lg ${event.valorGanho >= 0 ? "text-green-500" : "text-red"}`}>
                      {event.valorGanho.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      {event.valorGanho >= 0 ? (
                        <ArrowUpIcon className="inline h-6 w-6 ml-2 text-green-500" />
                      ) : (
                        <ArrowDownIcon className="inline h-6 w-6 ml-2 text-red" />
                      )}
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">Venda de Ação: {event.sellSymbol}</p>
                    <p>
                      Valor da Ação quando vendeu:{" "}
                      {event.sellValueSell.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                    </p>
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
