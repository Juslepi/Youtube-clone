import { useEffect, useState } from "react";

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
    <div className="p-4 bg-gray-800 text-white border-t border-b border-opacity-20 ">
      <div className="mx-12 flex overflow-x-scroll no-scrollbar">
        {tags.map((tag, index) => (
          <p
            className="text-sm bg-gray-600 mx-2 px-2 py-1 border border-opacity-20 rounded-full whitespace-nowrap"
            key={index}
          >
            {tag}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Tagbar;
