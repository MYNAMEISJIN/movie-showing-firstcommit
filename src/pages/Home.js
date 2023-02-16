import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import { useSelector } from 'react-redux'
import Banner from '../component/Banner'
import MovieSlide from '../component/MovieSlide'
import ClipLoader from "react-spinners/ClipLoader";


const Home = () => {
    const dispatch = useDispatch()
    const { popularMovies, topRatedMovies, upComingMovies, loading } = useSelector(state => state.movie)
    useEffect(() => { // 랜더를 하고 실행된다. return 다음 실행되는 친구.
        dispatch(movieAction.getMovies())
        
    }, [])
    //console.log("popularMovies",popularMovies)
    
    if (loading) {
        return <div className='loading-mate'>

            <ClipLoader
                color="#ffff"
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
            />
        </div>

    }
    else return (
        <div>

            <Banner movie={popularMovies.results[0]} />
            <h1>Popular Movie</h1>
            <MovieSlide movies={popularMovies} />
            <h1>Top rated Movie</h1>
            <MovieSlide movies={topRatedMovies} />
            <h1>Upcoming Movie</h1>
            <MovieSlide movies={upComingMovies} />
        </div>
        
    )
}

export default Home
