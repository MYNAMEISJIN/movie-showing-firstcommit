import React from 'react'
import { Badge } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const MovieCard = ({ item }) => {

    const {genreList} = useSelector((state)=>state.movie)
    const navigate = useNavigate()
    const gotoDetail= ()=>{
        navigate(`/movies/${item.id}`)
    }

    
    return (
        <div
            className='card' onClick={gotoDetail}
            style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}` + ")" }}>
            <div className='overlay'>
                <h2>{item.original_title}</h2>
                <div>
                    {item.genre_ids.map(id => (
                        <Badge bg="danger">
                            {genreList.find(item=>item.id==id).name}
                        </Badge>
                    ))}
                </div>
                <div>
                    <span>{item.vote_average}</span>
                    <span>{item.adult?"청불":"Under 18"}</span>
                </div>
            </div>
        </div>
    )
}

export default MovieCard
