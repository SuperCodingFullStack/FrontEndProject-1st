import React from 'react';
import UserInfo from './UserInfo';
import CategoryTab from './CategoryTab';

const Category = () => {
    return (
        <div className="category_header fixed bg-slate-200 top-0 w-96 h-full left-0">
            <UserInfo />
            <CategoryTab />
        </div>
    )
}

export default Category;