import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartFilter from "../Buttons/ChartFilter";
import { mockSearchResults } from '@/app/constants/mock';

interface StockCardsProps {
  symbol: string;
}

interface HistoricalDataPrice {
  date: number;
  close: number;
}

// Função para formatar valores em reais
const formatCurrency = (value: number) => {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
};

// Função para formatar a data
const formatDate = (timestamp: number) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleDateString('pt-BR');
};

// Componente personalizado para o Tooltip
const CustomTooltip = ({ active, payload }: { active?: boolean; payload?: any }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="custom-tooltip dark:bg-boxdark bg-white px-2 py-2 rounded-lg flex text-black dark:text-white space-x-2">
        <div className='font-extrabold'>{`${formatCurrency(data.close)}`}</div>
        <div>{`${formatDate(data.date)}`}</div>
      </div>
    );
  }
  return null;
};

// Função para gerar dados aleatórios
const generateRandomData = (days: number) => {
  const data = [];
  const currentTimestamp = Math.floor(Date.now() / 1000);
  let previousClose = 2800 + Math.random() * 200; // Valor inicial aleatório

  for (let i = 0; i < days; i++) {
    const date = currentTimestamp - (days - i) * 86400; // Subtrai um dia em segundos para cada iteração
    const close = previousClose + (Math.random() - 0.5) * 20; // Variação aleatória no fechamento
    data.push({ date, close });
    previousClose = close;
  }
  return data;
}

// Definição dos tipos para os períodos disponíveis
type Period = '1d' | '5d' | '1mo' | '1y';

// Configuração do gráfico com tipagem explícita
const chartConfig: Record<Period, { days: number }> = {
  "1d": { days: 1 },
  "5d": { days: 5 },
  "1mo": { days: 30 },
  "1y": { days: 365 },
};

const StockChart: React.FC<StockCardsProps> = ({ symbol }) => {
  const [data, setData] = useState<HistoricalDataPrice[]>([]);
  const [period, setPeriod] = useState<Period>('1d'); // Tipagem explícita do período

  useEffect(() => {
    const fetchData = async () => {
      const config = chartConfig[period];
      const randomData = generateRandomData(config.days);
      setData(randomData);
    };
    fetchData();
  }, [symbol, period]);

  const formatData = (data: HistoricalDataPrice[]) => {
    return data.map((entry) => ({
      date: entry.date,
      close: entry.close,
    }));
  };

  return (
    <div>
      <ul className="flex">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={period === item}
              onClick={() => {
                setPeriod(item as Period); // Casting para o tipo Period
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formatData(data)}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" tickFormatter={(tick) => formatDate(tick)} stroke="white" hide />
          <YAxis stroke="white" hide />
          <Tooltip content={<CustomTooltip />} contentStyle={{ backgroundColor: '#1C2434', border: 'none', borderRadius: '5px', color: '#ffffff' }} />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#3C50E0" activeDot={{ r: 0 }} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
