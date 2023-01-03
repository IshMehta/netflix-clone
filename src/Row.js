import React, {useEffect, useState} from 'react'
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerURL, setTrailerURL] = useState("");
    // snippet of code which runs on specific condition
    useEffect(() => {
        // if [] then run once upon render and dont run again
        // if [movies] then run once when row loads, and run every time movies changes
        async function fecthData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fecthData();
    }, [fetchUrl]);

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoplay: 1,
        },
    };

    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL("");
        } else {
            movieTrailer(movie?.name || movie?.title ||  movie?.original_name || "")
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search) ;
                setTrailerURL(urlParams.get('v'));
            }).catch((error)=>console.log(error));
        }
    }
    
  return (
    <div className='row'>
        <h2>{title}</h2>
        <div className='row_posters'>
            {/* several row posters */}
            {movies.map(movie => (
                <img 
                key={movie.id} 
                onClick= {() => handleClick(movie)}
                className={`row_poster ${isLargeRow && "row_posterLarge"} `}
                src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                alt={movie.name} />
            ))}
        </div>
       {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  )
}

export default Row