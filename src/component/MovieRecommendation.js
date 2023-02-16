import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import {Badge} from 'react-bootstrap'



const MovieRecommendation = ({ movieRecommendation }) => {
  const {genreList} = useSelector((state)=>state.movie)


  return (
    <div>
      <Row className='movie-review-area'>
        <Col className='related-movie-zone' lg={4}>
          {movieRecommendation.results.map((item, index) => {
            if (index % 2 == 0) {
              return <Row className='mt-4'>
                <Col className='text-center'>
                  <div
                    
                    className='recommendation-movie-item'
                    style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}` + ")" }}>
                    <div className="recommendation-movie-item-info">
                      <h1>
                        {item.title}
                      </h1>
                      <div>
                      {item.genre_ids.map(id => (
                        <Badge bg="danger">
                            {genreList.find(item=>item.id==id).name}
                        </Badge>
                    ))}
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            }
          })}
        </Col>

        
        <Col className='related-movie-zone' lg={4}>
          {movieRecommendation.results.map((item, index) => {
            if (index % 2 != 0) {
              return <Row className='mt-4'>
              <Col className='text-center'>
                <div
                  className='recommendation-movie-item'
                  style={{ backgroundImage: "url(" + `https://www.themoviedb.org/t/p/w355_and_h200_multi_faces${item.backdrop_path}` + ")" }}>
                  <div className="recommendation-movie-item-info">
                    <h1>
                      {item.title}
                    </h1>
                    <div>
                    {item.genre_ids.map(id => (
                      <Badge bg="danger">
                          {genreList.find(item=>item.id==id).name}
                      </Badge>
                  ))}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            }
          })}

        </Col>
      </Row>
    </div>
  )
}

export default MovieRecommendation
