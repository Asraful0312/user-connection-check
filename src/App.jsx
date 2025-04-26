import React, { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./components/home";
import { toast, Toaster } from "sonner";
import Offline from "./components/offline";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleOnline = () => {
      toast.success("You are Online");
      navigate(-1);
    };
    const handleOffline = () => {
      toast.error("You are Offline");
      navigate("/offline");
    };
    window.addEventListener("offline", handleOffline);
    window.addEventListener("online", handleOnline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, [navigate]);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offline" element={<Offline />} />
      </Routes>
      <Toaster richColors position="top-center" />
    </main>
  );
};

export default App;
