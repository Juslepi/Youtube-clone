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
    <div className="h-14 text-white bg-gray-800 flex items-center">
      <MenuIcon className="md:invisible ml-2 youtube-icon " />
      <div className="flex items-center cursor-pointer">
        <PlayIcon className="h-6 w-10  border-4 border-red-600 rounded-md bg-red-600" />
        <p className="text-xl font-semibold  tracking-tighter">YouTube</p>
        <p className="relative bottom-1 left-1  text-xs font-thin b-2">FI</p>
      </div>
      <form className="ml-4 flex items-center flex-grow">
        <input
          className="hidden md:block bg-transparent bg-gray-900 flex-grow h-full p-2"
          type="text"
          placeholder="Search"
        />
        <SearchIcon className="p-2 h-9 w-16 md:bg-gray-700 cursor-pointer" />
        <MicrophoneIcon className="p-2 h-10 w-10 ml-2  bg-gray-900 rounded-full cursor-pointer" />
      </form>
      {/* Right Side Icons */}
      <div className="flex mx-4 w-2/6 max-w-xs items-center justify-around">
        <VideoCameraIcon className="youtube-icon " />
        <ViewGridIcon className="youtube-icon " />
        <BellIcon className="youtube-icon " />
        <button className=" font-bold px-4 py-2 bg-gray-400 rounded-full">
          J
        </button>
      </div>
    </div>
  );
};

export default Header;
