import { WifiOff } from "lucide-react";
import React from "react";

const Offline = () => {
  return (
    <div className="flex justify-center items-center h-screen flex-col">
      <WifiOff className="size-36 text-gray-400" />
      <p className="text-center text-gray-500 text-lg">
        You are offline. Check your connection.
      </p>
    </div>
  );
};

export default Offline;
