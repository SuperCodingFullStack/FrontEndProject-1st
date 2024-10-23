import React from 'react';
import { useState } from 'react';
import './CategoryFirst.css';
import { FaChevronRight } from "react-icons/fa6";

const CategoryFirst = ({ mock }) => {
    const [isHovered,setIsHovered] = useState(false);

    const backsAfter = isHovered ? {
        backgroundPosition: `${mock.positionXClick}px ${mock.positionYClick}px`
    }
    : {
        backgroundPosition: `${mock.positionXnoClick}px ${mock.positionYnoClick}px`
    }

    return (
        <li className="first">
          <a href="/" className= {`block py-4 pl-14 relative ${isHovered ? 'hovered' : ''}`} onMouseOver={() => { setIsHovered(true) }} onMouseLeave = {() => { setIsHovered(false) }} >
            <span>{mock.title}</span>
            <div className="backs" style={backsAfter}></div>
            { isHovered && <FaChevronRight /> }
          </a>
        </li>
    )
}

export default CategoryFirst;