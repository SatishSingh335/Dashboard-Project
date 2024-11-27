import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Allmention = () => {
  const data = {
    labels: ['2 Sep', '5 Aug', '12 Aug', '19 Aug'], // Dates on the x-axis
    datasets: [
      {
        label: 'Sales',
        data: [120, 200, 150, 180], // Sales data
        backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
        borderColor: 'rgba(75, 192, 192, 1)', // Border color
        borderWidth: 1
      },
      {
        label: 'Revenue',
        data: [1000, 1500, 1200, 1300], // Revenue data
        backgroundColor: 'rgba(255, 99, 132, 0.6)', // Bar color
        borderColor: 'rgba(255, 99, 132, 1)', // Border color
        borderWidth: 1
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return `${tooltipItem.dataset.label}: ${tooltipItem.raw}`; // Custom label format
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12
          }
        }
      },
      y: {
        beginAtZero: true,
        ticks: {
          font: {
            size: 12
          }
        }
      }
    }
  };

  return (
    <div className="w-full h-[400px]">
      <h3 className="text-center mb-4">Sales and Revenue Over Time</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default Allmention;
