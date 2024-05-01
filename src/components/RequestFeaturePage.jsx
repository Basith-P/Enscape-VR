import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RequestFeaturePage = () => {
  const navigate = useNavigate();

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const submit = () => {
    if (isSending) return;
    if (!message) return alert("Please enter a message.");

    setIsSending(true);

    // Simulate a network request
    setTimeout(() => {
      setIsSending(false);
      navigate("/");
    }, 3000);

    navigate("/");
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white flex flex-col justify-center items-center">
      <h1 className="text-4xl mt-6 font-semibold">We're all ears!</h1>
      <p className="max-w-96 mt-4 text-center text-gray-300">
        We're always looking to improve our platform. If you have any feature requests or
        suggestions, we'd love to hear them!
      </p>
      <div className="w-full max-w-96 mt-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          disabled={isSending}
          rows="6"
          onChange={(e) => setMessage(e.target.value)}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        ></textarea>
      </div>
      <div className="flex justify-between w-full max-w-96">
        <button
          className="py-3 px-5 mt-4 bg-gray-950 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit me-2"
          onClick={isSending ? null : () => navigate("/")}
        >
          Go back
        </button>

        <button
          onClick={submit}
          className="py-3 px-5 mt-4 bg-white text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit"
        >
          {isSending ? "Sending.." : "Send message"}
        </button>
      </div>
    </div>
  );
};

export default RequestFeaturePage;
