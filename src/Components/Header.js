import {
  MenuIcon,
  SearchIcon,
  VideoCameraIcon,
  ViewGridIcon,
  BellIcon,
  MicrophoneIcon,
} from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";

const Header = () => {
  return (
    <div className="bg-gray-800 p-2 flex items-center">
      <MenuIcon className="h-6 w-6 mx-4 text-white" />
      <div className="flex items-center mx-8">
        <PlayIcon className="h-6 w-10 text-white border-4 border-red-600 rounded-md bg-red-600" />
        <p className="text-xl font-semibold text-white tracking-tighter">
          YouTube
        </p>
        <p className="relative bottom-1 left-1 text-white text-xs font-thin b-2">
          FI
        </p>
      </div>
      <form className="flex items-center flex-grow">
        <input
          className="hidden md:block bg-transparent bg-gray-900 flex-grow h-full p-2 py-4"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="p-4 h-12 w-16 text-white md:bg-gray-700" />
        <MicrophoneIcon className="p-2 h-10 w-10 ml-2 text-white bg-gray-900 rounded-full" />
      </form>
      {/* Right Side Icons */}
      <div className="flex mx-4 w-2/6 max-w-xs items-center justify-around">
        <VideoCameraIcon className="h-6 w-6 text-white" />
        <ViewGridIcon className="h-6 w-6 text-white" />
        <BellIcon className="h-6 w-6 text-white" />
        <button className="text-white font-bold px-4 py-2 bg-gray-400 rounded-full">
          J
        </button>
      </div>
    </div>
  );
};

export default Header;
