import React from "react";
import { WifiOff } from "lucide-react";
import { Link } from "react-router-dom";

const Offline = () => {
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      <WifiOff className="size-36 text-gray-600" />
      <p className="text-center text-gray-400 text-xl">
        You have no internet connection!
      </p>
      <Link
        className="bg-purple-600 py-1 px-4 text-white rounded font-semibold mt-5"
        to="/"
      >
        Home
      </Link>
    </div>
  );
};

export default Offline;
