import { useEffect, useState } from "react";
import realaxItems from "../data/relax";
import phobiaItems from "../data/phobia";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const [scenes, setScenes] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      const user = auth.currentUser;
      if (!user) navigate("/login", { replace: true });
      else if (user.email !== "admin@enscape.com") navigate("/", { replace: true });
    }, 1000);

    const scenes = [...realaxItems, ...phobiaItems];

    setScenes(scenes.sort(() => Math.random() - 0.5));
  }, []);

  const requests = [
    {
      email: "john@email.com",
      message: "I would like to see a scene of a beach",
      createdAt: "2021-09-01T12:00:00Z",
    },
    {
      email: "james@email.com",
      message: "I would like to see a scene of a desert",
      createdAt: "2021-09-01T12:00:00Z",
    },
  ];

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
          <h2 className="text-3xl text-white mb-5">Scenes</h2>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Type
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
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {scene.id}
                    </th>
                    <td className="px-6 py-4">{scene.title}</td>
                    <td className="px-6 py-4">{scene.type.toUpperCase()}</td>
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
          </div>
        </div>
        <div className="col-span-2">
          <h2 className="text-3xl text-white mb-5">Feature Requests</h2>
          {requests.map((request, index) => (
            <div class="mb-4 p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
              <div className="flex justify-between items-center">
                <p className="font-medium text-gray-300">{request.email}</p>
                <div className="text-gray-400">
                  {new Date(request.createdAt).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
              </div>
              <p class="font-normal mt-2 text-white">{request.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
