import React from 'react';
import { useState } from 'react';
import './CategoryFirst.css';
import { FaChevronRight } from "react-icons/fa6";
import CategoryTwoDepth from './CategoryTwoDepth';

const CategoryFirst = ({ mock }) => {
    const [isHovered,setIsHovered] = useState(false);

    const backsAfter = isHovered ? {
        backgroundPosition: `${mock.positionXClick}px ${mock.positionYClick}px`
    }
    : {
        backgroundPosition: `${mock.positionXnoClick}px ${mock.positionYnoClick}px`
    }
    

    return (
        <li className={`first ${isHovered ? 'hovered' : ''}`} onMouseOver={() => { setIsHovered(true); }} onMouseLeave={()=>{ setIsHovered(false)}}  >
          <a href="/" className= {`block py-4 pl-14 relative`} >
            <span>{mock.title}</span>
            <div className="backs" style={backsAfter}></div>
            { isHovered && <FaChevronRight /> }
          </a>
          <CategoryTwoDepth mocks={mock.twodepth} isHovered={isHovered} />
        </li>
    )
}

export default CategoryFirst;