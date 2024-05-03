import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/utils/firebase";
const ScenesView = (props) => {
  const [isLoading, setIsLoading] = useState(true);
  const [scenes, setScenes] = useState([]);

  const getScenes = async () => {
    try {
      const scenesData = await getDocs(collection(db, "videos"));
      const scenes = scenesData.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setScenes(scenes);
      console.log("scenes", scenes);
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
    <>
      <h2 className="text-3xl text-white mb-5">Scenes</h2>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {isLoading ? (
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-100"></div>
        ) : scenes.isEmpty ? (
          <p className="my-4 text-gray-300 text-xl">Oops! No scenes found</p>
        ) : (
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Type
                </th>
                <th scope="col" className="px-6 py-3">
                  Rating
                </th>
                <th scope="col" className="px-6 py-3 text-right">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {scenes.map((scene, index) => (
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4">{scene.title}</td>
                  <td className="px-6 py-4">{scene.type.toUpperCase()}</td>
                  <td className="px-6 py-4">{scene.rating ?? "N/A"}</td>
                  <td className="px-6 py-4 text-right">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Reviews
                    </a>
                    {" | "}
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default ScenesView;
