import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface PortfolioDataEntry {
  date: string;
  value: number;
}

interface PortfolioEvolutionChartProps {
  data: PortfolioDataEntry[];
}

const PortfolioEvolutionChart: React.FC<PortfolioEvolutionChartProps> = ({ data }) => {
  const chartData = {
    labels: data.map(entry => entry.date),
    datasets: [
      {
        label: 'Valor da Carteira',
        data: data.map(entry => entry.value),
        borderColor: '#4F46E5', // bg-indigo-600 color
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const, // Ensure the position is one of the accepted values
      },
      title: {
        display: true,
        text: 'Evolução da Carteira de Ações',
      },
    },
  };

  return (
    <div className="w-full p-6 rounded-lg border border-stroke bg-white shadow-lg dark:border-strokedark dark:bg-boxdark">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default PortfolioEvolutionChart;
