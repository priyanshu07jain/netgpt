import { useSelector } from "react-redux"
import VideoTitle from "./videoTitle";
import VideoBackground from "./videoBackground";

function MainContainer() {
    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
  return (
    <div>
        <VideoTitle/>
        <VideoBackground />
    </div>
  )
}

export default MainContainer