import { useNavigate } from "react-router-dom";
import { useToast } from "../ui/use-toast";
import { useState } from "react";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/utils/firebase";

const LoginPage = () => {
  const navigate = useNavigate();

  // const { toast } = useToast();

  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    let desc;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !password) desc = "Please fill all fields";
    else if (password.length < 8) desc = "Password must be at least 8 characters long";
    else if (!emailRegex.test(email)) desc = "Invalid email address";

    if (desc) {
      alert(desc);
      return;
    }

    setIsLoading(true);
    try {
      await setPersistence(auth, browserLocalPersistence);
      const credentials = await signInWithEmailAndPassword(auth, email, password);
      console.log("credentials", credentials);
      navigate("/", { replace: true });
    } catch (error) {
      console.log("error", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
        <div className="grid gap-8">
          <div
            id="back-div"
            className="bg-gradient-to-r from-blue-500 to-purple-500 m-2"
            style={{
              // cut corner top right
              clipPath: "polygon(90% 0, 100% 10%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <div
              className="dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 2xl:px-24 m-[2px]"
              style={{
                // cut corner top right
                clipPath: "polygon(90% 0, 100% 10%, 100% 100%, 0 100%, 0 0)",
              }}
            >
              <h1 className="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                Log in
              </h1>
              <form action="#" method="post" className="space-y-4">
                <div>
                  <label htmlFor="email" className="mb-2  dark:text-gray-400 text-lg">
                    Email
                  </label>
                  <input
                    id="email"
                    className="border p-3 bg-transparent dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-se-md w-full"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                <div>
                  <label htmlFor="password" className="mb-2 dark:text-gray-400 text-lg">
                    Password
                  </label>
                  <input
                    id="password"
                    className="border p-3 shadow-md bg-transparent dark:text-gray-300  dark:border-gray-700 placeholder:text-base border-gray-300 rounded-se-md w-full"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    disabled={isLoading}
                  />
                </div>
                {/* <a
                  className="group text-blue-400 transition-all duration-100 ease-in-out text-center mx-auto mt-4 inline-block"
                  href="#"
                >
                  <span className="bg-left-bottom bg-gradient-to-r text-center text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Forget your password?
                  </span>
                </a> */}
                <button
                  className="bg-gradient-to-r dark:text-black font-bold from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                  type="button"
                  onClick={isLoading ? null : submitHandler}
                >
                  {isLoading ? "Loading..." : "LOG IN"}
                </button>
              </form>
              <div className="flex flex-col mt-4 items-center justify-center text-sm">
                <h3 className="dark:text-gray-300">
                  Don't have an account?
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span
                      onClick={() => navigate("/register")}
                      className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Sign Up
                    </span>
                  </a>
                </h3>
              </div>
              {/* <!-- Third Party Authentication Options --> */}
              {/* <div
                id="third-party-auth"
                className="flex items-center justify-center mt-5 flex-wrap"
              >
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                    alt="Google"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                    alt="Linkedin"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px] filter dark:invert"
                    src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                    alt="Github"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                    alt="Facebook"
                  />
                </button>
                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px] dark:gray-100"
                    src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                    alt="twitter"
                  />
                </button>

                <button
                  href="#"
                  className="hover:scale-105 ease-in-out duration-300 shadow-lg p-2 rounded-lg m-1"
                >
                  <img
                    className="max-w-[25px]"
                    src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                    alt="apple"
                  />
                </button>
              </div> */}

              {/* <div className="text-gray-500 flex text-center flex-col mt-4 items-center text-sm">
                <p className="cursor-default">
                  By signing in, you agree to our
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {` Terms `}
                    </span>
                  </a>
                  and
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span className="cursor-pointer bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                      {` Privacy Policy`}
                    </span>
                  </a>
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginPage;
