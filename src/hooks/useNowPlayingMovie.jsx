import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utilies/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilies/constant";
import { URL } from "../utilies/constant";


const useNowPlayingMovie=()=>{
    const dispatch=useDispatch();

    const getNowPlayingMovie =async()=>{
      const data=await fetch(URL, API_OPTIONS);
      const json= await data.json();
      console.log(json);
      dispatch(addNowPlayingMovies(json));
    }
    
    useEffect(()=>{
    getNowPlayingMovie();
    },[])
}
export default useNowPlayingMovie;