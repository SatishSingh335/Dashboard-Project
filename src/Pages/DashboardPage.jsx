import React from 'react';
import Sidebar from '../Components/Sidebar';
import TopMetrics from '../Components/TopMetrics';
import SwitchTabs from '../Components/SwitchTabs';
import SentimentChart from '../Components/SentimentChart';
import LatestMentionsBacklinks from '../Components/LatestMentionBacklinks';
import TopInfluencers from '../Components/TopInfluencers';
import "../App.css"
import ExtraBtn from '../Components/ExtraBtn';

const DashboardPage = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6  ml-16">
        <TopMetrics />
        
        {/* First Grid Section */}
        <div className="grid-pure mt-6">
            <SwitchTabs />
            <SentimentChart />
        </div>

        {/* Second Grid Section */}
        <div className="grid-pure mt-6">
          <LatestMentionsBacklinks />
          <TopInfluencers />
        </div>
      </div>
      <ExtraBtn />
    </div>
  );
};

export default DashboardPage;
