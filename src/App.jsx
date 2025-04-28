import React from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { toast, Toaster } from "sonner";
import Home from "./page/home";
import Offline from "./page/offline";

const App = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleOnline = () => {
      toast.success("Your are online");
      navigate(-1);
    };
    const handleOffline = () => {
      toast.error("Your are offline");
      navigate("/offline");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, [navigate]);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offline" element={<Offline />} />
      </Routes>
      <Toaster richColors position="top-center" />
    </div>
  );
};

export default App;
