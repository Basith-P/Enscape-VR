import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/", { replace: true });
  };

  return (
    <main>
      <div class="h-screen w-screen flex justify-center items-center dark:bg-gray-900">
        <div class="grid gap-8">
          <div
            id="back-div"
            class="bg-gradient-to-r from-blue-500 to-purple-500 m-2"
            style={{
              // cut corner top right
              clipPath: "polygon(90% 0, 100% 10%, 100% 100%, 0 100%, 0 0)",
            }}
          >
            <div
              class="dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 2xl:px-24 m-[2px]"
              style={{
                // cut corner top right
                clipPath: "polygon(90% 0, 100% 10%, 100% 100%, 0 100%, 0 0)",
              }}
            >
              <h1 class="pt-8 pb-6 font-bold dark:text-gray-400 text-5xl text-center cursor-default">
                Sign up
              </h1>
              <form action="#" method="post" class="space-y-4">
                <div>
                  <label for="name" class="mb-2  dark:text-gray-400 text-lg">
                    Name
                  </label>
                  <input
                    id="name"
                    class="border p-3 bg-transparent dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-se-md w-full"
                    type="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label for="email" class="mb-2  dark:text-gray-400 text-lg">
                    Email
                  </label>
                  <input
                    id="email"
                    class="border p-3 bg-transparent dark:text-gray-300  dark:border-gray-700 shadow-md placeholder:text-base border-gray-300 rounded-se-md w-full"
                    type="email"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label for="password" class="mb-2 dark:text-gray-400 text-lg">
                    Password
                  </label>
                  <input
                    id="password"
                    class="border p-3 shadow-md bg-transparent dark:text-gray-300  dark:border-gray-700 placeholder:text-base border-gray-300 rounded-se-md w-full"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
                <button
                  class="bg-gradient-to-r dark:text-black font-bold from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                  type="submit"
                  onClick={submitHandler}
                >
                  SIGN UP
                </button>
              </form>
              <div class="flex flex-col mt-4 items-center justify-center text-sm">
                <h3 class="dark:text-gray-300">
                  Already have an account?
                  <a
                    class="group text-blue-400 transition-all duration-100 ease-in-out"
                    href="#"
                  >
                    <span
                      onClick={() => navigate("/login")}
                      class="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out"
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
