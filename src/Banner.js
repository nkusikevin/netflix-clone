import React,{useState,useEffect} from 'react'
import axios from './axios'
import requests from './request'
import './banner.css'
function Banner() {
    const [movie,setMovie ] = useState([])
    useEffect(()=>{
async function fetchData(){
const request = await axios.get(requests.fetchTrending)
let n = Math.floor(Math.random() * request.data.results.length)
setMovie(request.data.results[n])
}
fetchData()
    }, [])
    console.log(movie)
    function truncate(str ,n){
        return str?.length>n ?str.substr(0,n-1)+"..." : str
    }
    return (
        <header className='banner'
        style={{
            backgroundSize:'cover',
            backgroundImage:`url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
                )`,
            backgroundPosition:"center center"
        }}
        >
            <div className='banner_contents'>
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <div className="banner_description">
                <h1 className="banner_description">
                    {truncate(movie?.overview,150)}
                </h1>
            </div>
            </div>
            <div className="banner_fade"></div>
        </header>
    )
}

export default Banner
