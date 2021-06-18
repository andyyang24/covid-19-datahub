import { MenuIcon } from "@heroicons/react/solid";
import { LinkIcon } from "@heroicons/react/solid";

export default function MobileHeader(props) {
  return (
    <header className="w-full h-16 z-40 flex items-center bg-gray-200 justify-between shadow-md">
      <div className="block mt-2 p-1 lg:hidden ml-4">
        <button
          className="
              flex
              p-2
              items-center
              rounded-full
              bg-white
              shadow
              text-gray-400
              hover:text-gray-700
              text-md
              focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 focus:bg-purple-500 focus:text-white"
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>
      <div className="relative z-20 flex flex-col justify-end h-full px-3 md:w-full">
        <div className="relative p-2 flex items-center w-full space-x-4 justify-end">
          <button
            className="
                flex
                p-2
                items-center
                rounded-full
                text-gray-400
                hover:text-gray-700
                bg-white
                shadow
                text-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 focus:bg-purple-500 focus:text-white"
          >
            <LinkIcon className="h-5 w-5" />
          </button>
          <button
            className="
                flex
                p-2
                items-center
                rounded-full
                bg-white
                shadow
                text-gray-400
                hover:text-gray-700
                text-md
                focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 focus:bg-purple-500 focus:text-white"
          >
            <svg
              width="20"
              height="20"
              className=""
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M912 1696q0-16-16-16-59 0-101.5-42.5t-42.5-101.5q0-16-16-16t-16 16q0 73 51.5 124.5t124.5 51.5q16 0 16-16zm816-288q0 52-38 90t-90 38h-448q0 106-75 181t-181 75-181-75-75-181h-448q-52 0-90-38t-38-90q50-42 91-88t85-119.5 74.5-158.5 50-206 19.5-260q0-152 117-282.5t307-158.5q-8-19-8-39 0-40 28-68t68-28 68 28 28 68q0 20-8 39 190 28 307 158.5t117 282.5q0 139 19.5 260t50 206 74.5 158.5 85 119.5 91 88z"></path>
            </svg>
          </button>
          <span className="w-1 h-8 rounded-lg bg-gray-200"> </span>
          <a href="#" className="block relative">
            <img
              alt="Picture of the author"
              src="/profile.jpeg"
              className="mx-auto object-cover rounded-full h-10 w-10"
            />
          </a>
          <button className="flex items-center text-gray-500 dark:text-white text-md focus:outline-none focus:ring-0">
            Andy Y
            <svg
              width="20"
              height="20"
              className="hidden"
              fill="currentColor"
              viewBox="0 0 1792 1792"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1408 704q0 26-19 45l-448 448q-19 19-45 19t-45-19l-448-448q-19-19-19-45t19-45 45-19h896q26 0 45 19t19 45z"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
