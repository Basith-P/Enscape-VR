import React from "react";

const AdminHome = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-900">
      <form className="mx-auto w-1/3">
        <h1 className="text-3xl font-semibold text-white mb-5">Upload Video</h1>
        <div className="mb-5">
          <label
            for="title"
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
            for="videoUrl"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Video URL
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
            for="countries"
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
  );
};

export default AdminHome;
