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
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  adjustedClose: number;
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

const StockChart: React.FC<StockCardsProps> = ({ symbol }) => {
  const [data, setData] = useState<HistoricalDataPrice[]>([]);
  const [period, setPeriod] = useState('1d');

  const chartConfig = {
    "1d": { resolution: "1", days: 1, weeks: 0, months: 0, years: 0 },
    "5d": { resolution: "15", days: 0, weeks: 1, months: 0, years: 0 },
    "1mo": { resolution: "60", days: 0, weeks: 0, months: 1, years: 0 },
    "1y": { resolution: "D", days: 0, weeks: 0, months: 0, years: 1 },
  };

  useEffect(() => {
    const fetchData = async () => {
      // const token = "mXF7E3cgxuBv5AF6kSdC9X"
      // const result = await axios.get(`https://brapi.dev/api/quote/${symbol}?range=${period}&token=${token}`);
      // setData(result.data.results);
      // console.log("aqui", result)
      const result = mockSearchResults;
      const historicalData = result.results[0]?.historicalDataPrice;
      setData(historicalData);
      console.log("aqui", result);
    };
    fetchData();
  }, [symbol, period]);

  const formatData = (data: HistoricalDataPrice[]) => {
    return data.map((entry) => ({
      date: entry.date,
      close: entry.close,
    }));
  };

    // Função para gerar as coordenadas da linha da grade horizontal no rodapé
    const generateHorizontalGridLines = (yCoords: number[]) => {
        // Retorna apenas a última coordenada Y, que corresponde ao rodapé
        return [yCoords[yCoords.length - 1]];
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
                setPeriod(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={formatData(data)}>
        <CartesianGrid strokeDasharray="4 4"/>
          <XAxis dataKey="date" tickFormatter={(tick) => formatDate(tick)} stroke="white" hide />
          <YAxis stroke="white" hide />
          <Tooltip content={<CustomTooltip />} contentStyle={{ backgroundColor: '#1C2434', border: 'none', borderRadius: '5px', color: '#ffffff' }} />
          <Legend />
          <Line type="monotone" dataKey="close" stroke="#3C50E0" activeDot={{ r: 0 }} dot={false}/>

        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChart;
