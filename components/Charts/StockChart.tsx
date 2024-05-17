// components/StockChart.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import ChartFilter from "../Buttons/ChartFilter"
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



const StockChart: React.FC<StockCardsProps> = ({
    symbol
}) => {
    /* const [data, setData] = useState([]); */
    const [data, setData] = useState<HistoricalDataPrice[]>([])
    const [period, setPeriod] = useState('1d');

    const chartConfig = {
        "1d": { resolution: "1", days: 1, weeks: 0, months: 0, years: 0 },
        "5d": { resolution: "15", days: 0, weeks: 1, months: 0, years: 0 },
        "1mo": { resolution: "60", days: 0, weeks: 0, months: 1, years: 0 },
        "1y": { resolution: "D", days: 0, weeks: 0, months: 0, years: 1 },
    };

    useEffect(() => {
        const fetchData = async () => {
/*             const token = "mXF7E3cgxuBv5AF6kSdC9X"
            const result = await axios.get(`https://brapi.dev/api/quote/${symbol}?range=${period}&token=${token}`);
            setData(result.data.results);
            console.log("aqui", result) */
            const result = mockSearchResults;
            const historicalData = result.results[0]?.historicalDataPrice;
            setData(historicalData);
            console.log("aqui", result)
        };
        fetchData();
    }, [symbol, period]);

    const formatData = (data: any) => {
        const formatted = data.map((entry: any) => ({
          date: new Date(entry.date * 1000).toLocaleDateString(), // Convertendo timestamp para data
          close: entry.close
        }));
        console.log('Formatted data:', formatted);
        return formatted;
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
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" stroke="white" hide/>
                    <YAxis stroke="white" hide />
                    <Tooltip contentStyle={{ backgroundColor: '#1C2434', border: 'none', borderRadius: '5px', color: '#ffffff' }} />
                    <Legend />
                    <Line type="monotone" dataKey="close" stroke="#3C50E0" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default StockChart;
