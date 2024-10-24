import React from 'react';
import TwoDepthGroup from './TwoDepthGroup';

const CategoryTwoDepth = ({ mocks, isHovered }) => {
    return (
    <div className={`two_depth fixed top-0 h-full bg-white ${isHovered ? 'block' : 'hidden'}`} style={{left: '24rem', width: '300px', overflowY: 'auto'}}>
                {
                    mocks.map((mocked,i) => (
                        <TwoDepthGroup mocked={mocked} key={i} />
                    ))
                }
        </div>
    )
}

export default CategoryTwoDepth;