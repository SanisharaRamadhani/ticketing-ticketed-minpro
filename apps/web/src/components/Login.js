import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <>
      <div className="w-full min-h-screen bg-gray-50 flex flex-col sm:justify-center items-center pt-6 sm:pt-0 mb-0">
        <div className="w-full sm:max-w-md p-5 mx-auto">
          <h2 className="mb-12 text-center text-5xl font-extrabold">Login</h2>
          <form>
            <div className="mb-4">
              <label className="block mb-1" for="email">
                Email
              </label>
              <input
                id="email"
                placeholder="@mail.com"
                type="text"
                name="email"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1" for="password">
                Password
              </label>
              <input
                id="password"
                placeholder="********"
                type="password"
                name="password"
                className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"
              />
            </div>
            <div className="mt-6 flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  type="checkbox"
                  className="border border-gray-300 text-red-600 shadow-sm focus:border-red-300 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                />
                <label
                  for="remember_me"
                  className="ml-2 block text-sm leading-5 text-gray-900"
                >
                  {' '}
                  Remember me{' '}
                </label>
              </div>
              <Link href="/forgotpassword">
                <ul className="cursor-pointer">Forgot your password?</ul>
              </Link>
            </div>
            <div className="mt-6">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#555486] border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                Sign In
              </button>
            </div>
            <div className="mt-6 text-center">
              <Link href="/sign-up">
                <ul className="underline">Sign up for an account</ul>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
