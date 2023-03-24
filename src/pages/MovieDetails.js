import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';
import { movieAction } from '../redux/actions/movieAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Container } from 'react-bootstrap';
import MovieImageNDetail from '../component/MovieImageNDetail';
import ClipLoader from "react-spinners/ClipLoader";
import AMovieReviews from '../component/AMovieReviews';
import MovieRecommendation from '../component/MovieRecommendation';


const MovieDetails = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const [roR, setRoR] = useState(true);
  const { getAMovieDetail, getAMovieReview, loading,getMovieRecommendation,getMovieYoutubeTrailer } = useSelector((state) => state.movie)
  useEffect(() => { // 랜더를 하고 실행된다. return 다음 실행되는 친구.
    dispatch(movieAction.getAMovieDetail(parseInt(id)))
  }, [])


  const reviewOrRecommendClicked = (item) => {
    
    if(item=="REVIEWS")
    {
      setRoR(true)
    }
    else
    {
      setRoR(false)
      
    }
  }

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
  else {
    return (
      <div>
        <Container>
          <MovieImageNDetail movieDetail={getAMovieDetail} movieYoutubeTrailer={getMovieYoutubeTrailer} />
          <div className='review-recommendation-nav-area'>
            
              <button className={roR?"review-recommendation-each-item-true":"review-recommendation-each-item-false"} onClick={() => reviewOrRecommendClicked("REVIEWS")}>REVIEWS</button>
              <button className={roR?"review-recommendation-each-item-false":"review-recommendation-each-item-true" } onClick={() => reviewOrRecommendClicked("RELATED MOVIES")}>RELATED MOVIES</button>
            
            
          </div>
          {roR ?
            <AMovieReviews movieReviews={getAMovieReview}/> :
            <MovieRecommendation movieRecommendation={getMovieRecommendation}/>
            }
        </Container>
      </div>
    )
  }

}

export default MovieDetails
