import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface StockChartData {
  date: string;
  rendimento: number;
}

interface StockChartPerformanceProps {
  symbol: string;
  valuePurchased: number;
  valueStock: number;
}

const formatPercent = (value: number) => {
    const formattedValue = (value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formattedValue;
  };
const StockChartPerformance: React.FC<StockChartPerformanceProps> = ({ symbol, valuePurchased, valueStock }) => {
  const [stockChartData, setStockChartData] = useState<StockChartData[]>([]);

  useEffect(() => {
    const calculateYield = () => {
      return ((valuePurchased - 100));
    };

    // Calcular o rendimento
    const yieldValue = calculateYield();

    // Definir os dados do gráfico
    const data: StockChartData[] = [{ date: 'Today', rendimento: yieldValue }];

    setStockChartData(data);
  }, [valuePurchased, valueStock]);

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart data={stockChartData}>
          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="date" stroke="white" />
          <YAxis stroke="white" />
          <Tooltip labelFormatter={() => 'Date'} formatter={(value: number) => formatPercent(value)} />
          <Legend />
          <Line type="monotone" dataKey="rendimento" stroke="#3C50E0" activeDot={{ r: 0 }} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default StockChartPerformance;
