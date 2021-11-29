import {
  MenuIcon,
  SearchIcon,
  VideoCameraIcon,
  ViewGridIcon,
  BellIcon,
  PlayIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="bg-gray-600 flex p-4 justify-between">
      <MenuIcon className="h-6 w-6 text-white"/>
      <PlayIcon className="h-6 w-6 text-white bg-red-700 "/>
      <p className="text-xl font-semibold text-white tracking-tighter">
        YouTube
      </p>
      <input
        className="bg-transparent bg-gray-900"
        type="text"
        placeholder="Search"
      />
      <SearchIcon className="h-6 w-6 text-white" />
      <VideoCameraIcon className="h-6 w-6 text-white" />
      <ViewGridIcon className="h-6 w-6 text-white" />
      <BellIcon className="h-6 w-6 text-white" />
      <button className="text-white">J</button>
    </div>
  );
};

export default Header;
