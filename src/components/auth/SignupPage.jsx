import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SignupPage = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // validate data
    if (!name || !email || !password) {
      alert("Please fill all the fields");
      return;
    }

    navigate("/", { replace: true });
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
                Sign up
              </h1>
              <form action="#" method="post" className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-2  dark:text-gray-400 text-lg">
                    Name
                  </label>
                  <input
                    id="name"
                    className="border p-3 bg-transparent dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-se-md w-full"
                    type="name"
                    placeholder="John Doe"
                    required
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2  dark:text-gray-400 text-lg">
                    Email
                  </label>
                  <input
                    id="email"
                    className="border p-3 bg-transparent dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-se-md w-full"
                    type="email"
                    placeholder="john@example.com"
                    required
                    onChange={(e) => setEmail(e.target.value)}
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
                    placeholder="********"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button
                  className="bg-gradient-to-r dark:text-black font-bold from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                  type="submit"
                  onClick={submitHandler}
                >
                  SIGN UP
                </button>
              </form>
              <div className="flex flex-col mt-4 items-center justify-center text-sm">
                <h3 className="dark:text-gray-300">
                  Already have an account?
                  <a
                    className="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span
                      onClick={() => navigate("/login")}
                      className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
                    >
                      Login
                    </span>
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SignupPage;
