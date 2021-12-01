import { useEffect, useState } from "react";
import axios from "axios";

import Card from "./Card";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => setVideos(res.data.items));
  });
  return (
    <div className="flex justify-center md:justify-start min-w-full h-full flex-wrap text-white bg-gray-900 m-2">
      {videos.map((video, index) => {
        return (
          <Card
            key={index}
            title={video.snippet.title}
            channel={video.snippet.channelTitle}
            views={video.statistics.viewCount}
            thumbnail={video.snippet.thumbnails.medium.url}
            uploaded={video.snippet.publishedAt}
          />
        );
      })}
    </div>
  );
};

export default VideoContainer;

// useEffect(() => {
//   const tmp = [];
//   for (let i = 0; i < 10; i++) {
//     tmp.push(i);
//   }
//   setVideos(tmp);
// }, []);
