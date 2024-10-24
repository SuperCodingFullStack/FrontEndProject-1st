import React from 'react';
import UserInfo from './UserInfo';
import CategoryTab from './CategoryTab';
import './Category.css';

const Category = () => {

    return (
        <div className={`category_header fixed top-0 w-96 h-full left-0`} style={{backgroundColor: '#f6f6f6'}}>
            <UserInfo />
            <CategoryTab />
        </div>
    )
}

export default Category;