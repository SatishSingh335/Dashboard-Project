import React, { useState } from 'react';
import Allmention from './Allmention';

const SwitchTabs = () => {
  const [activeTab, setActiveTab] = useState('mentions');

  // Toggle active tab when clicked
  const handleTabClick = (tabName) => {
    setActiveTab((prevTab) => (prevTab === tabName ? '' : tabName)); // If the tab is already active, reset it.
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="flex space-x-20 mb-4 border-b border-gray-200">
        <button
          className={`text-lg px-4 py-2 rounded-lg focus:outline-none ${activeTab === 'mentions' ? 'text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('mentions')}
        >
          All Mentions
        </button>
        <button
          className={`text-lg px-4 py-2 rounded-lg focus:outline-none ${activeTab === 'web' ? 'text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('web')}
        >
          Web 40
        </button>
        <button
          className={`text-lg px-4 py-2 rounded-lg focus:outline-none ${activeTab === 'social' ? 'text-blue-600' : 'text-gray-600'}`}
          onClick={() => handleTabClick('social')}
        >
          Social 310
        </button>
      </div>
      <div>
        {activeTab === 'mentions' && <Allmention />}
        {activeTab === 'web' && <p>Web 40 Content</p>}
        {activeTab === 'social' && <p>Social 310 Content</p>}
      </div>
    </div>
  );
};

export default SwitchTabs;
