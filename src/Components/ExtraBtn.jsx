import React from "react";
import { FaCrown } from "react-icons/fa6";
import { MdDownload } from "react-icons/md";
import { FaShareAlt } from "react-icons/fa";

const ExtraBtn = () =>{
    return(
        <div className="flex flex-col ml-11 mr-5 p-6 gap-1">
            <button className="border rounded-md py-1 px-2 bg-purple-500">
                <FaCrown className="text-white" />
            </button>
            <button className="border rounded-md py-1 px-2 bg-purple-500">
                <MdDownload className="text-white" />
            </button>
            <button className="border rounded-md py-1 px-2 bg-purple-500">
                <FaShareAlt className="text-white" />
            </button>
        </div>
    )
}

export default ExtraBtn