import React from 'react';
import { FaSearch, FaChartLine, FaCog, FaCalendar, FaClipboardList } from 'react-icons/fa';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div className="bg-gradient-to-b from-blue-800 to-blue-600 w-16
    min-h-screen text-white p-2 fixed">
            <div className="space-y-2">

                <Link to="/Dashboard">
                    <button className="w-full text-left p-3 rounded-md hover:bg-blue-700 flex items-center">
                        <FaChartLine className="mr-1" />
                    </button>
                </Link>

                <Link to="/setting">
                    <button className="w-full text-left p-3 rounded-md hover:bg-blue-700 flex items-center">
                        <FaCog className="mr-1" />
                    </button>
                </Link>

                <Link to ="/activity">
                     <button className="w-full text-left p-3 rounded-md hover:bg-blue-700 flex items-center">
                         <FaClipboardList className="mr-1" />
                </button>
                </Link>
                
                <Link to = "/Calender">
                <button className="w-full text-left p-3 rounded-md hover:bg-blue-700 flex items-center">
                    <FaCalendar className="mr-1" />
                </button>
                </Link>

                <Link to = "/search">
                <button className="w-full text-left p-3 rounded-md hover:bg-blue-700 flex items-center">
                    <FaSearch className="mr-1" />
                </button>

                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
