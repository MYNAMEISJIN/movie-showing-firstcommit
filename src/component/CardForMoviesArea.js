import React from 'react'
import { Container,Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CardForMoviesArea = ({ item }) => {

    //console.log("item",item)
    const {genreForMovies} = useSelector((state)=>state.movie)
    const navigate = useNavigate()
    
    
    const selected = (id) =>{
        
        navigate(`/movies/${id}`)
    }
    
    

    return (
        <Container
            onClick={()=>selected(item.id)}
            className='card-style-for-movies'
            style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${item.backdrop_path}` + ")", width: "330px", height: "500px" }}>
            <div className='card-style-for-movies-inside'>
                <div className='mt-3 card-style-for-movies-inside-head-area'>
                    <img style={{ width: "65px", height: "84px" }} src={`https://www.themoviedb.org/t/p/w138_and_h175_face${item.poster_path}`} />
                    <div className='movies-head-title-area'>
                        <h3>
                            {item.original_title}
                        </h3>
                        <div style={{color: "rgb(100, 149, 237)"}}>
                            {item.release_date}
                        </div>
                    </div>

                </div>
                <div style={{width:"70%"}}>
                    {item.genre_ids.map(id => (
                        <Badge bg="danger">
                            {genreForMovies.find(item=>item.id==id).name}
                        </Badge>
                    ))}
                </div>
                <div 
                className='text-limit'
                style={{width:"80%"}}>
                    {item.overview}
                </div>
                <div className='mb-5 movies-card-bottom'>
                    <div>&#11088;{parseFloat(item.vote_average).toFixed(1)}</div>
                    <div>&#x1F39E;{item.popularity}</div>
                    {item.adult ? <div className='warning-adult'>18+</div> : <div>nuder 18</div>}
                </div>


            </div>
        </Container>
    )
}

export default CardForMoviesArea
