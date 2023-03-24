// import React from 'react'
// import { useState } from 'react';
// import InputRange from 'react-input-range';
// import "react-input-range/lib/css/index.css";

// const DropDownForYearSorting = () => {
//     const [dropdownOpen, setDropdownOpen] = useState(false);
//     const [slideBarValue, setSlideBarValue] = useState({ min: 1900, max: 2023 })

//     const toggle = () => setDropdownOpen(prevState => !prevState);
//     const slideBarControl = (change) => {

//         setSlideBarValue(change)
//     }



//     return (
//         <div className='dropdown-mother'>
//             <div className="dropdown-area">
//                 <button className={dropdownOpen ? 'dropdown-button-open' : "dropdown-button"} onClick={toggle}>Date
//                     <div className='showing-date'>{slideBarValue.min}~{slideBarValue.max}</div>
//                     {dropdownOpen ? <span className='arrow-in-dropdown'>&darr;</span> : <span className='arrow-in-dropdown'>&rarr;</span>}
//                 </button>
//                 {dropdownOpen && (
//                     <div className='dropdown-item'>
//                         <h5>
//                             YEAR Filter
//                         </h5>
//                         <div className='dropdown-item-downside'>
//                             <div style={{fontSize:"14px"}}>
//                                 From:-<span className='year-filter-years'>{slideBarValue.min}</span>
//                                 -to-<span className='year-filter-years'>{slideBarValue.max}</span>-
//                             </div>
//                             <div className='slider-bar-area'>
//                                 <InputRange
//                                     step={10}
//                                     maxValue={2030}
//                                     minValue={1900}
//                                     value={slideBarValue}
//                                     onChange={change => slideBarControl(change)}
//                                     formatLabel={(event)=>{console.log(event)}}
//                                     //foariaLabelledby="aria-labelledby"
//                                     // ariaControls="aria-controls"
//                                     // activeTrack="slider"
//                                     // disabledInputRange="red"
//                                     // inputRange="slider"
//                                     // labelContainer="slider"
//                                     // maxLabel="slider"
//                                     // minLabel="slider"
//                                     // slider="slider"
//                                     // sliderContainer="slider"
//                                     // track="slider"
//                                     // valueLabel="slider"
//                                     // name="slider"rmatLabel={(event)=>{console.log(event)}}   
//                                     // 
//                                 />
//                             </div>
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     )
// }

// export default DropDownForYearSorting
