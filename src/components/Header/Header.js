import React from 'react';
import ReactDOM from 'react-dom'
import './header.css';
import Button from '../Button';
import Category from '../Category/Category';


const Header = () => {

    return (
        <header className="border-b border-slate-400 border-solid h-24">
            <div className="wrapper max-w-5xl mx-auto h-full flex items-center justify-between">
                {
                    ReactDOM.createPortal(<Category />, document.getElementById("root-header"))
                }
                <Button img="./assets/bars.svg" alt="bar" />
                <span className="b_11">
                    <a href="/">Home</a>
                </span>
            </div>
        </header>
    )
};

export default Header;