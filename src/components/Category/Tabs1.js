import React from 'react';
import catemock from './mock/categories';
import CategoryFirst from './CategoryFirst';

const Tabs1 = () => {
    return (
        <div className="tabs1 mb-3 bg-white">
            <h3 className="font-bold text-lg px-5 pb-3 pt-3">카테고리</h3>
            <nav>
                {
                    catemock.map((mock,i)=>(
                        <CategoryFirst mock={mock} mockIndex={i} key={i} />
                    ))
                }
            </nav>  
        </div>  
    )
}

export default Tabs1;