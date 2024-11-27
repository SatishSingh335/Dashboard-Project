import React from 'react';
import { FaChartBar, FaLink, FaSearch, FaSmile, FaFrown } from 'react-icons/fa';

const TopMetrics = () => {
  return (
    <div className="md:grid md:grid-cols-5 md:gap-4 md:shadow-lg md:rounded-md ">
      {/* Mentions Card */}
      <div className="bg-white p-5 flex flex-col justify-center items-center">
        <FaChartBar className="text-blue-500 text-4xl mb-2" />
        <h3 className="text-xl">Mentions</h3>
        <p className="text-2xl font-bold">1,250</p>
      </div>

      {/* Backlinks Card */}
      <div className="bg-white p-4 flex flex-col justify-center items-center">
        <FaLink className="text-green-500 text-4xl mb-2" />
        <h3 className="text-xl">Backlinks</h3>
        <p className="text-2xl font-bold">350</p>
      </div>

      {/* Search Card */}
      <div className="bg-white p-4 flex flex-col justify-center items-center">
        <FaSearch className="text-yellow-500 text-4xl mb-2" />
        <h3 className="text-xl">Search</h3>
        <p className="text-2xl font-bold">1,000</p>
      </div>

      {/* Positive Mentions Card */}
      <div className="bg-white p-4 flex flex-col justify-center items-center">
        <FaSmile className="text-green-500 text-4xl mb-2" />
        <h3 className="text-xl">Positive Mentions</h3>
        <p className="text-2xl font-bold text-green-500">800</p>
      </div>

      {/* Negative Mentions Card */}
      <div className="bg-white p-4 flex flex-col justify-center items-center">
        <FaFrown className="text-red-500 text-4xl mb-2" />
        <h3 className="text-xl">Negative Mentions</h3>
        <p className="text-2xl font-bold text-red-500">450</p>
      </div>
    </div>
  );
};

export default TopMetrics;
