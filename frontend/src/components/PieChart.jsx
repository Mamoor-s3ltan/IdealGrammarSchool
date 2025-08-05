import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ userCounts }) => {
  const data = {
    labels: ['Teachers', 'Students', 'Staff'],
    datasets: [
      {
        label: 'User Distribution',
        data: [userCounts.teachers, userCounts.students, 15],
        backgroundColor: [
          '#6366F1',  
        ],
        borderColor: [
          '#4F46E5', 
          '#059669', 
          '#D97706', 
        ],
        borderWidth: 2,
        hoverOffset: 10,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#374151', // Gray-700
          font: {
            size: 14,
            family: 'Inter, sans-serif',
          },
        },
      },
      tooltip: {
        backgroundColor: '#1F2937', // Gray-800
        titleColor: '#F9FAFB',       // Gray-50
        bodyColor: '#D1D5DB',        // Gray-300
        borderWidth: 1,
        borderColor: '#4B5563',      // Gray-600
      },
    },
  };

  return (
    <div className="max-w-sm md:max-w-md mx-auto bg-white shadow-xl rounded-xl p-6">
      <h2 className="text-center text-xl font-semibold text-gray-800 mb-4">
        School User Distribution
      </h2>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
