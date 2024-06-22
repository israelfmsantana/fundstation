/* import React from "react";
import Timeline from "./timeline";
import PortfolioEvolutionChart from "./portfolioEvolutionChart";

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

interface PortfolioDataEntry {
  date: string;
  value: number;
}

const generateFakePortfolioEvolution = (): PortfolioDataEntry[] => {
  const fakeData: PortfolioDataEntry[] = [];
  let currentValue = 1000;

  for (let i = 1; i <= 30; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (30 - i));
    currentValue += Math.random() * 50 - 25;
    fakeData.push({
      date: date.toISOString().split("T")[0],
      value: parseFloat(currentValue.toFixed(2)),
    });
  }

  return fakeData;
};

const generateFakeTimelineEvents = (): TimelineEvent[] => {
  const events: TimelineEvent[] = [];
  const descriptions = ["Compra de Ações", "Venda de Ações"];

  for (let i = 1; i <= 10; i++) {
    const buyDate = new Date();
    buyDate.setDate(buyDate.getDate() - (10 - i));
    const sellDate = new Date(buyDate);
    sellDate.setDate(sellDate.getDate() + Math.floor(Math.random() * 10));
    const buyValueStock = Math.random() * 100;
    const sellValueStock = buyValueStock + (Math.random() * 20 - 10);
    const buyValuePurchased = buyValueStock * (Math.random() * 10 + 1);
    const sellValueSell = sellValueStock * (Math.random() * 10 + 1);
    const valorGanho = sellValueSell - buyValuePurchased;

    events.push({
      buyDate: buyDate.toISOString().split("T")[0],
      sellDate: sellDate.toISOString().split("T")[0],
      buySymbol: `AAPL${i}`,
      sellSymbol: `AAPL${i}`,
      buyValueStock: parseFloat(buyValueStock.toFixed(2)),
      sellValueStock: parseFloat(sellValueStock.toFixed(2)),
      buyValuePurchased: parseFloat(buyValuePurchased.toFixed(2)),
      sellValueSell: parseFloat(sellValueSell.toFixed(2)),
      valorGanho: parseFloat(valorGanho.toFixed(2)),
    });

    if (i % 2 === 0) {
      const additionalBuyValueStock = Math.random() * 100;
      const additionalSellValueStock = additionalBuyValueStock + (Math.random() * 20 - 10);
      const additionalBuyValuePurchased = additionalBuyValueStock * (Math.random() * 10 + 1);
      const additionalSellValueSell = additionalSellValueStock * (Math.random() * 10 + 1);
      const additionalValorGanho = additionalSellValueSell - additionalBuyValuePurchased;

      events.push({
        buyDate: buyDate.toISOString().split("T")[0],
        sellDate: sellDate.toISOString().split("T")[0],
        buySymbol: `GOOGL${i}`,
        sellSymbol: `GOOGL${i}`,
        buyValueStock: parseFloat(additionalBuyValueStock.toFixed(2)),
        sellValueStock: parseFloat(additionalSellValueStock.toFixed(2)),
        buyValuePurchased: parseFloat(additionalBuyValuePurchased.toFixed(2)),
        sellValueSell: parseFloat(additionalSellValueSell.toFixed(2)),
        valorGanho: parseFloat(additionalValorGanho.toFixed(2)),
      });
    }
  }

  return events;
};

const HistoryPage: React.FC = () => {
  const portfolioEvolution = generateFakePortfolioEvolution();
  const timelineEvents = generateFakeTimelineEvents();

  return (
    <div className="container mx-auto p-4">
        <Timeline events={timelineEvents} />
    </div>
  );
};

export default HistoryPage; */

import React, { useEffect, useState } from "react";
import Timeline from "./timeline";
import PortfolioEvolutionChart from "./portfolioEvolutionChart";

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

interface PortfolioDataEntry {
  date: string;
  value: number;
}

const fetchTimelineEvents = async (): Promise<TimelineEvent[]> => {
  const response = await fetch("http://localhost:8080/historicoPortfolio/findAll");
  const data = await response.json();
  return data;
};

const HistoryPage: React.FC = () => {
  const [timelineEvents, setTimelineEvents] = useState<TimelineEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const events = await fetchTimelineEvents();
        setTimelineEvents(events);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container p-4">
      {timelineEvents.length > 0 ? (
        <Timeline events={timelineEvents} />
      ) : (
        <div className="bg-white dark:text-white dark:border-strokedark dark:bg-boxdark rounded shadow px-8 py-6 flex flex-col">
          <div>Não há dados de histórico</div>
        </div>
      )}
    </div>
  );
};

export default HistoryPage;


