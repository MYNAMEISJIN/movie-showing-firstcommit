import React, { useEffect, useState, Component } from 'react'
import { Container, Row, Col, Dropdown } from 'react-bootstrap'
import DropdownForMovies from '../component/DropdownForMovies'
import CardForMoviesArea from '../component/CardForMoviesArea'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'
import ClipLoader from "react-spinners/ClipLoader";
import Pagination from "react-js-pagination";
import DropDownForYearSorting from '../component/DropDownForYearSorting'






const Movies = ({ page, setPage }) => {
  //const [page, setPage] = useState(1)
  const dispatch = useDispatch()
  const { getAMovieByPageChange, loadingForMovies, getMOviesBySearch, category, sortedData } = useSelector(state => state.movie)
  const [descAsc, setDescAsc] = useState(true);
  let showingPage;
  

  //console.log("getMOviesBySearch",getMOviesBySearch)
  

  useEffect(() => { // 랜더를 하고 실행된다. return 다음 실행되는 친구.
    
    dispatch(movieAction.getAMoviePageNByCategory(category,page))
    
    
  }, [page,descAsc])

  const handlePageChange = (event) => {
    setPage(event)
  }

  if (category == "Search") {
    showingPage = {...getMOviesBySearch}
  }
  else{
    showingPage = {...getAMovieByPageChange}
  }

 
  // console.log("getAMovieByPageChange",getAMovieByPageChange)
  // console.log("sortedData",sortedData)
  // console.log("sortedData[1]",sortedData[1])
  // console.log("sortedData[2]",sortedData[2])
  // console.log("showing page", showingPage)
  

  if (category == "Search") {
    showingPage = {...getMOviesBySearch};
    if(descAsc)
    {
      showingPage.results?.sort();
    }
    else{
      showingPage.results?.reverse();
    }
  }
  else {
    showingPage = {...getAMovieByPageChange};
    if(descAsc)
    {
      showingPage.results?.sort();
      
    }
    else{
      showingPage.results?.reverse();
      
    }
  }
  // console.log("showingPage",showingPage)
  


  

  if (loadingForMovies) {
    return <div className='loading-mate'>

      <ClipLoader
        color="#ffff"
        loading={loadingForMovies}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>

  }
  else return (
    <div>
      <Container>
        <Row>
          <Col className='text-center' lg={4}>
            <DropdownForMovies setDescAsc={setDescAsc} descAsc={descAsc}/>
            {/* <div>&nbsp; </div>
            <DropDownForYearSorting /> */}
          </Col>

          <Col>
            <Row className='movies-cards-container'>
              <Col lg={5}>


                {showingPage.results.map((item, index) => {
                  if (index % 2 == 0)
                    return <CardForMoviesArea item={item} />

                })}

              </Col>
              <Col lg={5}>
                {showingPage.results.map((item, index) => {
                  if (index % 2 != 0)
                    return <CardForMoviesArea item={item} />

                })}

              </Col>
            </Row>
          </Col>


          <div className='pagination-area'>
            <Pagination
              activePage={page}
              itemsCountPerPage={20}
              totalItemsCount={showingPage.total_results<=10000?showingPage.total_results:10000}
              pageRangeDisplayed={5}
              onChange={(event) => handlePageChange(event)}
              itemClass="page-item"
              linkClass="page-link"
              activeClass="page-active"
              activeLinkClass="page-active-link"
              hideDisabled={true}
            />
          </div>

        </Row>
      </Container>
    </div>
  )
}

export default Movies
