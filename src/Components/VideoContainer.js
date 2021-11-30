import { useEffect, useState } from "react";

import Card from "./Card";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const tmp = [];
    for (let i = 0; i < 10; i++) {
      tmp.push(i);
    }
    setVideos(tmp);
  }, []);
  return (
    <div className="flex justify-center md:justify-start w-full h-full flex-wrap text-white bg-gray-900 m-2">
      {videos.map((video, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
};

export default VideoContainer;
