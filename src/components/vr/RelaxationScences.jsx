import { useEffect, useState } from "react";
import realaxItems from "../data/relax";
import ImagesGrid from "./ImagesGrid";

const RelaxationScences = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <ImagesGrid
      position="-6.5 2 -6"
      rotation="0 50 0"
      title="RELAXATION"
      items={realaxItems}
      isLoading={isLoading}
    />
  );
};

export default RelaxationScences;
