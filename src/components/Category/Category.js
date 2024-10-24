import React from 'react';
import UserInfo from './UserInfo';
import CategoryTab from './CategoryTab';
import './Category.css';
import { useSelector } from 'react-redux';

const Category = () => {

    const menuOnOff = useSelector(state => state.menuOnOff.isMenuOn);

    const classes = menuOnOff ? 'menuon' : ''

    return (
        <div className={`category_header fixed top-0 w-96 h-full left-0 ${classes}`} style={{backgroundColor: '#f6f6f6'}}>
            <UserInfo />
            <CategoryTab />
        </div>
    )
}

export default Category;