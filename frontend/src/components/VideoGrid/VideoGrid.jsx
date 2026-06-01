import "./VideoGrid.css";
import VideoCard from "../VideoCard/VideoCard";

function VideoGrid() {
  return (
    <div className="video-grid">
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
      <VideoCard />
    </div>
  );
}

export default VideoGrid;