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
    <div className="flex w-full h-full flex-wrap text-white bg-gray-900 m-1">
      {videos.map((video, index) => {
        return <Card key={index} />;
      })}
    </div>
  );
};

export default VideoContainer;
