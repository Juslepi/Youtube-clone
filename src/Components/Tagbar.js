import { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/outline";

import Tag from "./Tag";

const Tagbar = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    let temp_array = [];
    const temp_tags = [
      "matetamatiikka",
      "Jalkapallo",
      "erikoistaitovideo-opastukset",
    ];
    temp_array = temp_array.concat(temp_tags);
    for (let i = 0; i < 10; i++) {
      const tag = "Tag #" + i;
      temp_array.push(tag);
    }

    setTags(temp_array);
  }, []);

  return (
    <div className="flex justify-center align-center p-4 bg-gray-800 text-white border-t border-b border-opacity-20 ">
      <ChevronLeftIcon className="h-10 w-10 cursor-pointer" />
      <div className="relative top-1 mx-4 flex overflow-x-scroll no-scrollbar">
        {tags.map((tag, index) => (
          <Tag key={index} text={tag} />
        ))}
      </div>
      <ChevronRightIcon className="h-10 w-10 cursor-pointer" />
    </div>
  );
};

export default Tagbar;
