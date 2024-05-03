import { useEffect, useState } from "react";
import ImagesGrid from "./ImagesGrid";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "@/utils/firebase";

const PhobiaScenes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [scenes, setScenes] = useState([]);

  const getScenes = async () => {
    try {
      const q = query(collection(db, "videos"), where("type", "==", "phobia"));
      const scenesData = await getDocs(q);
      const scenes = scenesData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setScenes(scenes);
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getScenes();
  }, []);

  return (
    <ImagesGrid
      position="6.5 2 -6"
      rotation="0 -50 0"
      title="PHOBIA THERAPY"
      items={scenes}
      isLoading={isLoading}
    />
  );
};

export default PhobiaScenes;
