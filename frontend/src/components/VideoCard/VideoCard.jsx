import "./VideoCard.css";

function VideoCard() {
  return (
    <div className="video-card">

      <div className="thumbnail">
        Thumbnail
      </div>

      <div className="video-info">
        <h3>Docker Tutorial for Beginners</h3>

        <p>StreamNest Academy</p>

        <span>120K Views • 2 days ago</span>
      </div>

    </div>
  );
}

export default VideoCard;