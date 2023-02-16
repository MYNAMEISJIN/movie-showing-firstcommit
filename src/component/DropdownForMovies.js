import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useState,} from 'react';


const DropdownForMovies = ({setDescAsc, descAsc}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  
  
  const toggle = () => setDropdownOpen(prevState => !prevState);
  const aDToggle = () =>
  {
    setDescAsc(prevState => !prevState);
    
  }

  return (
    <div className='dropdown-mother'>
      <div className="dropdown-area">
        <button className={dropdownOpen?'dropdown-button-open':"dropdown-button"} onClick={toggle}>Sort
        <div className='showing-desc-asc'>{descAsc?"Desc":"Asc"}</div>
          {dropdownOpen ? <span className='arrow-in-dropdown'>&darr;</span> : <span className='arrow-in-dropdown'>&rarr;</span>}
        </button>
        {dropdownOpen && (
          <div className='dropdown-item'>
            <h5>
            Sort Results By
            </h5>
            <div className='dropdown-item-downside'>
              <div className='dropdown-item-downside-head'>
                Sort By
              </div>
              <div className='dropdown-item-downside-down' onClick={aDToggle}>
                {descAsc?"Popularity (Desc)":"Popularity (Asc)"}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default DropdownForMovies
