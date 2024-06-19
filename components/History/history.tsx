import React from "react";
import Timeline from "./timeline";
import PortfolioEvolutionChart from "./portfolioEvolutionChart";

interface TimelineEvent {
  date: string;
  description: string;
  amount: number;
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
      date: date.toISOString().split('T')[0],
      value: parseFloat(currentValue.toFixed(2)),
    });
  }

  return fakeData;
};

const generateFakeTimelineEvents = (): TimelineEvent[] => {
  const events: TimelineEvent[] = [];
  const descriptions = ["Compra de Ações", "Venda de Ações", "Dividendos Recebidos", "Compra de Ações", "Venda de Ações"];
  let currentValue = 1000;

  for (let i = 1; i <= 10; i++) {
    const date = new Date();
    date.setDate(date.getDate() - (10 - i));
    currentValue += Math.random() * 200 - 100;
    events.push({
      date: date.toISOString().split('T')[0],
      description: descriptions[Math.floor(Math.random() * descriptions.length)],
      amount: parseFloat(currentValue.toFixed(2)),
    });
  }

  return events;
};

const HistoryPage: React.FC = () => {
  const portfolioEvolution = generateFakePortfolioEvolution();
  const timelineEvents = generateFakeTimelineEvents();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Histórico Financeiro</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <PortfolioEvolutionChart data={portfolioEvolution} />
        <Timeline events={timelineEvents} />
      </div>
    </div>
  );
};

export default HistoryPage;
