import React from "react";

const AdminHome = () => {
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Eg: Forest"
              required
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Select Type
            </label>
            <select
              id="countries"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Relaxation</option>
              <option>Phobia Treatment</option>
            </select>
          </div>
          <button
            type="button"
            className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminHome;
