
import useNowPlayingMovie from "../hooks/useNowPlayingMovie"
import Header from "./Header"
import MainContainer from "./MainContainer";

const Browse = () => {
//for fetching data
useNowPlayingMovie();
  return (
    <div>
      <Header/>
      <MainContainer/>
    </div>
  )
}

export default Browse