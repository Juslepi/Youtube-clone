import {
  MenuIcon,
  HomeIcon,
  CollectionIcon,
  InformationCircleIcon,
  DatabaseIcon,
} from "@heroicons/react/outline";

const Sidebar = () => {
  return (
    <div className="invisible md:visible text-white fixed h-full top-0 left-0 w-16 z-10 bg-gray-800">
      <div className="icon-container">
        <MenuIcon className="youtube-icon" />
      </div>
      <div className="icon-container">
        <HomeIcon className="youtube-icon" />
        <p>Koti</p>
      </div>
      <div className="icon-container">
        <InformationCircleIcon className="youtube-icon" />
        <p>Tutustu</p>
      </div>
      <div className="icon-container">
        <CollectionIcon className="youtube-icon" />
        <p>Tilaukset</p>
      </div>
      <div className="icon-container">
        <DatabaseIcon className="youtube-icon" />
        <p>Kirjasto</p>
      </div>
    </div>
  );
};

export default Sidebar;
