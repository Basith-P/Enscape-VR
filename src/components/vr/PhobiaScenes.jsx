import { useEffect, useState } from "react";
import phobiaItems from "../data/phobia";
import ImagesGrid from "./ImagesGrid";

const PhobiaScenes = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ImagesGrid
      position="6.5 2 -6"
      rotation="0 -50 0"
      title="PHOBIA THERAPY"
      items={phobiaItems}
      isLoading={isLoading}
    />
  );
};

export default PhobiaScenes;
