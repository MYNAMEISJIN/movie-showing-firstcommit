import React from 'react'
import { Col, Row, Container, Badge, Button, Modal } from 'react-bootstrap'
import WatchTrailer from './WatchTrailer'



const MovieImageNDetail = ({ movieDetail,movieYoutubeTrailer }) => {
    

    return (
        <div>
            <Row className='mt-5 img-text-mother'>
                <Col lg={4} sm={6} className="text-end">
                    <img className='img-hello' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${movieDetail.poster_path}`} />
                </Col>
                <Col lg={5}>
                    <div className='mb-3'>
                        {movieDetail.genres?.map(item => (
                            <Badge bg="danger" className='badge-for-detail'>
                                {item.name}
                            </Badge>
                        ))}
                    </div>
                    <h1 className='mb-3'>{movieDetail.title}</h1>
                    <div>{movieDetail.tagline}</div>
                    <div className='rating-section mt-3 mb-3'>
                        <div>&#11088;{parseFloat(movieDetail.vote_average).toFixed(1)}</div>
                        <div>&#x1F39E;{movieDetail.popularity}</div>
                        {movieDetail.adult ? <div className='warning-adult'>18+</div> : <div>nuder 18</div>}
                    </div>
                    <div className='overview'>{movieDetail.overview}</div>

                    <div className='movie-d-t-r-info-mother mt-3'>
                        <div>
                            <Badge bg="danger" className='movie-d-t-r-info'>release_date</Badge><span className='movie-d-t-r-info-font'>{movieDetail.release_date}</span>
                        </div>
                        <div>
                            <Badge bg="danger" className='movie-d-t-r-info'>runtime</Badge><span className='movie-d-t-r-info-font'>{movieDetail.runtime}</span>
                        </div>
                        <div>
                            <Badge bg="danger" className='movie-d-t-r-info'>revenue</Badge><span className='movie-d-t-r-info-font'>{movieDetail.revenue}</span>
                        </div>


                    </div>
                     <WatchTrailer movieYoutubeTrailer={movieYoutubeTrailer} />

                    

                </Col>
            </Row>
        </div>
    )
}

export default MovieImageNDetail
