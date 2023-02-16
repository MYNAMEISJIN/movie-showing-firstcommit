import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const AMovieReviews = ({ movieReviews }) => {
    
    return (
        <div>
                <Row className='movie-review-area'>
                    <Col className='movie-review-words' lg={9}>
                    {movieReviews.results?.map(item => (
                    <div className='review-underline'>
                        <div>- {item.author} -</div>
                        <div>{item.content}</div>
                    </div>
                ))}
                    </Col>
                </Row>
        </div>
    )
}

export default AMovieReviews
