import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";

const FeatureRequestsSection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [requests, setRequests] = useState([]);

  const getRequests = async () => {
    try {
      const scenesData = await getDocs(collection(db, "featureRequests"));
      const scenes = scenesData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setRequests(scenes);
      console.log("scenes", scenes);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getRequests();
  }, []);

  return (
    <>
      <h2 className="text-3xl text-white mb-5">Feature Requests</h2>
      {isLoading ? (
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-100"></div>
      ) : requests.isEmpty ? (
        <p className="my-4 text-gray-300 text-xl">No Requests yet</p>
      ) : (
        requests.map((request, index) => (
          <div
            key={index}
            className="mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <div className="flex justify-between items-center">
              <p className="font-medium text-gray-300">{request.by}</p>
              <div className="text-gray-400">
                {new Date(request.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
            <p className="font-normal mt-2 text-white">{request.message}</p>
          </div>
        ))
      )}
    </>
  );
};

export default FeatureRequestsSection;
