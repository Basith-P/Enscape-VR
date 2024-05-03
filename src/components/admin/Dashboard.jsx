import { useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import ScenesView from "./ScenesView";
import FeatureRequestsSection from "./FeatureRequestsSection";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      const user = auth.currentUser;
      if (!user) navigate("/login", { replace: true });
      else if (user.email !== "admin@enscape.com") navigate("/", { replace: true });
    }, 1000);
  }, []);

  return (
    <div className="bg-slate-900 text-white min-h-screen p-8">
      <div className="flex mt-12 justify-between items-center">
        <h1 className="text-5xl font-semibold text-white mb-5">Dashboard</h1>
        <button
          onClick={() => navigate("/upload-video")}
          className="py-3 px-5 font-semibold bg-white text-sm text-center text-black rounded-lg bg-primary-700"
        >
          Add new scene
        </button>
      </div>
      <div className="grid grid-cols-5 gap-8 mt-6">
        <div className="col-span-3">
          <ScenesView />
        </div>
        <div className="col-span-2">
          <FeatureRequestsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
