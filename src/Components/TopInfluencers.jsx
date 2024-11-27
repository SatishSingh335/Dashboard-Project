import React from "react";
import { HiOutlineChevronDown, HiOutlineChatBubbleLeftEllipsis } from "react-icons/hi2";

const influencers = [
  {
    name: "Dyson Ambassador",
    handle: "@dysonambassador",
    followers: "473k",
    mentions: 14,
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Home Electronics",
    handle: "@homeelectronics",
    followers: "37k",
    mentions: 14,
    image: "https://via.placeholder.com/40",
  },
  {
    name: "Home Electronics",
    handle: "@homeelectronics",
    followers: "37k",
    mentions: 14,
    image: "https://via.placeholder.com/40",
  },
];

const TopInfluencers = () => {
  return (
    <div className="max-w-full mt-2 p-4 bg-white shadow rounded-lg">
      {/* Header Section */}
      <h2 className="text-xl font-semibold mb-4">Top Influencers</h2>

      {/* Labels with Dropdown Icons */}
      <div className="flex justify-between text-gray-600 text-sm border-b pb-2 mb-2">
        {/* Dropdown Icon in Front of # of Followers */}
        <div className="flex items-center">
        <span># of followers</span>
          <HiOutlineChevronDown className="mr-2 w-4 h-4 text-gray-500 cursor-pointer" />
          
        </div>

        {/* Dropdown Icon in Front of Mentions */}
        <div className="flex items-center">
        <span>Mentions</span>
          <HiOutlineChevronDown className="mr-2 w-4 h-4 text-gray-500 cursor-pointer" />
          
        </div>
      </div>

      {/* Influencers List */}
      {influencers.map((influencer, index) => (
        <div
          key={index}
          className="flex items-center justify-between py-2 border-b last:border-none"
        >
          <div className="flex items-center">
            <img
              src={influencer.image}
              alt={influencer.name}
              className="w-10 h-10 rounded-full mr-3"
            />
            <div>
              <p className="font-medium text-gray-800">{influencer.name}</p>
              <p className="text-sm text-gray-500">{influencer.handle}</p>
            </div>
          </div>
          <div className="text-right flex items-center gap-2">
            <p className="text-gray-800">{influencer.mentions}</p>
            <HiOutlineChatBubbleLeftEllipsis className="text-gray-500 w-5 h-5" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopInfluencers
