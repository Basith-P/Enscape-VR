import { useLocation, useNavigate } from "react-router-dom";
import realaxItems from "./data/relax";
import { useState } from "react";
import { auth, db } from "@/utils/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";

const RateVideoPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const item = location.state ?? realaxItems[0];

  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(4);

  const submit = async () => {
    if (isSending) return;

    try {
      setIsSending(true);
      const now = new Date().getTime();
      await addDoc(collection(db, "videos", item.id, "reviews"), {
        message,
        rating,
        createdAt: now,
        by: auth.currentUser.email,
      });

      const itemRating = item.rating;

      const newRating = itemRating ? (itemRating + rating) / 2 : rating;
      await setDoc(doc(db, "videos", item.id), { rating: newRating }, { merge: true });

      setMessage("");
      navigate("/");
    } catch (error) {
      console.log("error", error);
      alert("Error sending review");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="bg-slate-900 min-h-screen text-white flex flex-col justify-center items-center">
      <p cla>Congratulations!</p>
      <h1 className="text-3xl mt-6">{item.title}</h1>
      <p className="text-gray-300 mt-6">How would you rate your experience?</p>
      <div className="flex items-center mt-2 gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <svg
            key={index}
            className={`w-6 h-6 ${
              index < rating ? "text-yellow-300" : "text-gray-300 dark:text-gray-500"
            } ms-1`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
            onClick={isSending ? null : () => setRating(index + 1)}
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
        ))}
      </div>
      <div className="w-full max-w-96 mt-6">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
        >
          Your message
        </label>
        <textarea
          id="message"
          rows="6"
          disabled={isSending}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          placeholder="Leave a comment..."
        ></textarea>
      </div>
      <div className="flex justify-between w-full max-w-96">
        <button
          className="py-3 px-5 mt-4 bg-gray-950 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit me-2"
          onClick={isSending ? null : () => navigate("/")}
        >
          Back to Home
        </button>
        <button
          onClick={isSending ? null : submit}
          className="py-3 px-5 mt-4 bg-white text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit"
        >
          {isSending ? "Sending.." : "Send"}
        </button>
      </div>
    </div>
  );
};

export default RateVideoPage;
