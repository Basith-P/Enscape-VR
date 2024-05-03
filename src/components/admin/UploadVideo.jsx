import { auth, db } from "@/utils/firebase";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import { addDoc, collection, doc } from "firebase/firestore";

const UploadVideoPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const user = auth.currentUser;
      if (!user) navigate("/login", { replace: true });
      else if (user.email !== "admin@enscape.com") navigate("/", { replace: true });
    }, 1000);
  }, []);

  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [type, setType] = useState("relax");

  const submit = async () => {
    if (!title || !videoUrl || !imageUrl) {
      alert("Please fill all fields");
      return;
    }

    try {
      setIsLoading(true);
      const now = new Date().getTime();
      await addDoc(collection(db, "videos"), {
        title,
        videoUrl,
        type,
        createdAt: now,
        imageUrl,
      });
      alert("Video uploaded successfully");
      setTitle("");
      setImageUrl("");
      setVideoUrl("");
    } catch (error) {
      console.log("error", error);
      alert("Error uploading video");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-2 bg-slate-900 min-h-screen">
      <div className="text-white flex w-full justify-center items-center">
        <div>
          <p className="text-3xl font-semibold text-white mb-5">Steps</p>
          <ul className="list-disc list-inside text-lg">
            <li>
              Upload video to &nbsp;
              <a
                href="https://drive.google.com/drive/folders/1HaHeHK-3fcFNfdvyinW2Np5QdcMXZZeZ?usp=sharing"
                target="_blank"
                rel="noreferrer"
                className="text-blue-300"
              >
                Google Drive
              </a>
            </li>
            <li>Get the shareable link</li>
            <li>Fill the form</li>
          </ul>
        </div>
      </div>
      <div className="flex w-full flex-col justify-center">
        <form className="w-full px-8 max-w-lg">
          <h1 className="text-3xl font-semibold text-white mb-5">Upload Video</h1>
          <div className="mb-5">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Eg: Forest"
              required
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="image"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Image URL
            </label>
            <input
              type="text"
              id="image"
              value={imageUrl}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setImageUrl(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="videoUrl"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Google Drive Video URL
            </label>
            <input
              type="url"
              id="videoUrl"
              value={videoUrl}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="type"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Type
            </label>
            <select
              id="type"
              value={type}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setType(e.target.value)}
            >
              <option value="relax">Relaxation</option>
              <option value="phobia">Phobia Treatment</option>
            </select>
          </div>
          <button
            type="button"
            onClick={isLoading ? null : submit}
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {isLoading ? "Uploading..." : "Upload"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UploadVideoPage;
