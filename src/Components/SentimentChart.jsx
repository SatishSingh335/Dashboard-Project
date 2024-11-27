import React, { useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { FaDownload } from "react-icons/fa";
// import Chart from "chart.js/auto"; // Ensure that the necessary chart.js package is imported

const SentimentChart = () => {
  const chartRef = useRef(null); // Reference for the chart

  const data = {
    labels: ["2 Sep", "9 Sep", "16 Sep", "23 Sep"],
    datasets: [
      {
        label: "Positive",
        data: [300, 400, 350, 450],
        backgroundColor: "rgba(34, 197, 94, 0.8)", // Green
      },
      {
        label: "Negative",
        data: [700, 1000, 950, 1200],
        backgroundColor: "rgba(239, 68, 68, 0.8)", // Red
      },
      {
        label: "Neutral",
        data: [100, 200, 150, 250],
        backgroundColor: "rgba(156, 163, 175, 0.8)", // Grey
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false, // Disable default legend
      },
    },
    scales: {
      x: {
        stacked: true, // Stack bars horizontally
        ticks: {
          font: {
            size: 12,
          },
        },
      },
      y: {
        stacked: true,
        beginAtZero: true,
        ticks: {
          font: {
            size: 12,
          },
        },
      },
    },
  };

  useEffect(() => {
    // Cleanup the chart on component unmount
    return () => {
      if (chartRef.current) {
        const chartInstance = chartRef.current.chartInstance;
        if (chartInstance) {
          chartInstance.destroy();
        }
      }
    };
  }, []);

  return (
    <div className="max-w-full bg-white rounded-lg shadow-md p-6">
      {/* Chart Header */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Sentiment</h3>
        <FaDownload className="text-gray-500 cursor-pointer" />
      </div>

      {/* Chart */}
      <div className="h-64">
        <Bar ref={chartRef} data={data} options={options} />
      </div>

      {/* Legend */}
      <div className="flex justify-center items-center mt-4 space-x-4">
        <div className="flex items-center text-green-600">
          <span>🙂 Positive</span>
        </div>
        <div className="flex items-center text-red-600">
          <span>🙁 Negative</span>
        </div>
        <div className="flex items-center text-gray-500">
          <span>😐 Neutral</span>
        </div>
      </div>
    </div>
  );
};

export default SentimentChart;
