import React from 'react';
import './header.css';
import Button from '../Button';
import Category from '../Category/Category';
import { useDispatch } from 'react-redux';
import { menuOnActions } from '../../slice/menuOnSlice';


const Header = () => {

    const dispatch = useDispatch();

    const menuOn = () => {
        dispatch(menuOnActions.menuOn());
        document.getElementById('root').classList.add('dimmed');
    }

    return (
        <header className="border-b border-slate-400 border-solid h-24">
            <div className="wrapper mx-auto h-full flex items-center justify-between">
                <Button img="./assets/bars.svg" alt="bar" clickFunc={menuOn} />
                <Category />
                <span className="b_11">
                    <a href="/">Home</a>
                </span>
            </div>
        </header>
    )
};

export default Header;