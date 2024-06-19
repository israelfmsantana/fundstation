import React from "react";

interface TimelineEvent {
  date: string;
  description: string;
  amount: number;
}

const Timeline: React.FC<{ events: TimelineEvent[] }> = ({ events }) => {
  return (
    <div className="bg-white dark:text-white dark:border-strokedark dark:bg-boxdark rounded shadow px-8 py-6 flex flex-col">
      <h2 className="text-2xl font-bold mb-4">Histórico</h2>
      <ul className="timeline">
        {events.map((event, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-sm text-gray-500">{event.date}</p>
                <p className="font-semibold">{event.description}</p>
              </div>
              <div>
                <p className="font-semibold">{event.amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
