import React from 'react'
import { Navbar,Form,Container,Nav, NavDropdown,Button } from 'react-bootstrap'
import { Link, useNavigationType } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { movieAction } from '../redux/actions/movieAction'

const NavigationBar = ({setPage}) => {
    const navigate = useNavigate();
    const dispatch =useDispatch();

    const setCategoryForMovies = ()=>{
        dispatch({type:"SHOWING_MOVIES_BY_CATEGORY", payload: {category:"Movies",searchKeyword:""}})
        setPage(1)
    }
    const searchTheMovie = (event)=>{
        event.preventDefault()
        
        let searchKeyword = event.target[0].value;
        console.log(searchKeyword)
        setPage(1);
        dispatch(movieAction.getAMoviePageNByCategory(1,searchKeyword))
        dispatch({type:"SHOWING_MOVIES_BY_CATEGORY", payload: {category:"Search",searchKeyword:searchKeyword}})
        
        navigate(`/movies/?q=${searchKeyword}`)
    }
  return (
    <div>
      <Navbar bg="dark" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img width={100} src={"https://imgix.bustle.com/uploads/image/2017/8/29/c8c8077a-10fc-44d5-93f0-da4e592a299e-netflix-logo-print_pms.jpg?w=1200&h=630&fit=crop&crop=faces&fm=jpg"}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Link className='nav-item' to="/">Home</Link>
                            <Link className='nav-item' to="/movies" onClick={setCategoryForMovies}>Movie</Link>
                            
                        </Nav>
                        <Form className="d-flex" onSubmit={searchTheMovie}>
                            <Form.Control
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                                
                            />
                            <Button variant="outline-danger" type='submit'>Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
    </div>
  )
}

export default NavigationBar
