import "./Home.css";

import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import HeroBanner from "../../components/HeroBanner/HeroBanner";
import VideoGrid from "../../components/VideoGrid/VideoGrid";

function Home() {
  return (
    <>
      <Navbar />

      <div className="home-layout">
        <Sidebar />

        <div className="content">
          <HeroBanner />

          <VideoGrid />
        </div>
      </div>
    </>
  );
}

export default Home;