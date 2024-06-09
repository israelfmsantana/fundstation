import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PortfolioEvolutionChartProps {
  data: Array<{ date: string, value: number }>;
}

const PortfolioEvolutionChart: React.FC<PortfolioEvolutionChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Valor da Carteira',
        data: data.map(entry => entry.value),
        borderColor: '#4F46E5',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Ajuste feito aqui
      },
      title: {
        display: true,
        text: 'Evolução da Carteira de Ações',
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default PortfolioEvolutionChart;
