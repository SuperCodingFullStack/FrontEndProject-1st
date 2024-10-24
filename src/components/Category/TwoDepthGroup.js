import React from 'react';
import './TwoDepthGroup.css';

const TwoDepthGroup = ( { mocked } ) => {
    return (
        <div className="two_depth_group py-8">
            <h2 className="px-5">{ mocked.titles }</h2>
            <nav>
                {mocked.details.map((detail,i)=>(
                    <li key={i}><a href="/" className="px-5 py-5">{detail.name}</a></li>
                ))}
            </nav>
        </div>
    )
}

export default TwoDepthGroup;