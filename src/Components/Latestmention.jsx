import React from "react";

const LatestPosts = () => { // Changed the component name to LatestPosts
  const posts = [
    {
      avatar: "https://via.placeholder.com/40", // Placeholder avatar URL
      text: "RT @JChVerro: CognitiveSEO Keyword Tool Review https://t.co/wlc",
      site: "Twitter",
      performance: 50,
      time: "15:45PM",
      mood: "😐",
    },
    {
      avatar: "https://via.placeholder.com/40", // Placeholder avatar URL
      text: "How to Improve Your Website Navigation: 7 Essential Best Practices",
      site: "SE Journal",
      performance: 40,
      time: "15:45PM",
      mood: "😊",
    },
  ];

  return (
    <div className="!bg-white p-6 rounded-lg shadow-md max-w-4xl mx-auto">
      {/* Header Row */}
      <div className="grid grid-cols-6 items-center text-sm text-grey-600 font-medium border-b pb-2 mb-4">
        <span className="col-span-2">Post</span>
        <span>Site</span>
        <span>Performance</span>
        <span className="flex items-center justify-start space-x-2">
          <span>Date</span>
          {/* Dropdown Icon (SVG) */}
          <svg
            className="w-4 h-4 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </span>
        <span>Mood</span>
      </div>

      {/* Post Rows */}
      {posts.map((post, index) => (
        <div
          key={index}
          className="grid grid-cols-6 items-center text-sm text-gray-800 py-2"
        >
          {/* Post Content */}
          <div className="col-span-2 flex items-center space-x-4">
            <img
              src={post.avatar}
              alt="Avatar"
              className="w-10 h-10 rounded-full"
            />
            <p className="max-w-lg">{post.text}</p>
          </div>
          {/* Site */}
          <p className="text-left">{post.site}</p>
          {/* Performance */}
          <p className="text-left">{post.performance} 👍</p>
          {/* Date */}
          <p className="text-left">{post.time}</p>
          {/* Mood */}
          <p className="text-left">{post.mood}</p>
        </div>
      ))}
    </div>
  );
};

export default LatestPosts; // Changed the export name to LatestPosts
