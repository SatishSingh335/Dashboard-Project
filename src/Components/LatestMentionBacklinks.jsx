import React, { useState } from 'react';
import LatestMention from './Latestmention';

const LatestMentionsBacklinks = () => {
  const [activeTab, setActiveTab] = useState('mentions');

  return (
    <div className="bg-white p-6 rounded shadow">
      <div className="flex space-x-12 mb-4">
        <button
          className={`text-lg ${activeTab === 'mentions' ? 'text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('mentions')}
        >
          Latest Mentions
        </button>
        <button
          className={`text-lg ${activeTab === 'backlinks' ? 'text-blue-600' : 'text-gray-600'}`}
          onClick={() => setActiveTab('backlinks')}
        >
          Latest Backlinks
        </button>
      </div>
      <div>
        {activeTab === 'mentions' && <LatestMention/>}
        {activeTab === 'backlinks' && <p>Latest backlinks mention</p>}
      </div>
    </div>
  );
};

export default LatestMentionsBacklinks;
