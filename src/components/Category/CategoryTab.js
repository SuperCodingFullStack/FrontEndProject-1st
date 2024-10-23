import React from 'react';
import CategoryFirst from './CategoryFirst';
import catemock from './mock/categories';

const CategoryTab = () => {
    return (
        <div className="c_tab absolute mt-3 py-5 bg-white"
        style={{
            top: "64px",
            left: "0",
            right: "0",
            height: "calc(100% - 64px)"
        }}>
            <h3 className="font-bold text-lg px-5 pb-3">카테고리</h3>
            <nav>
               {
                catemock.map((mock)=>(
                    <CategoryFirst mock={mock} />
                ))
               }
            </nav>
        </div>
    )
}

export default CategoryTab;