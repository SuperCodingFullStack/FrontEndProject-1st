import React from 'react';
import Tabs1 from './Tabs1';
import Tabs2 from './Tabs2';
import './CategoryTab.css';

const CategoryTab = () => {
    return (
        <div className="c_tab absolute mt-2"
        style={{
            top: "64px",
            left: "0",
            right: "0",
            height: "calc(100% - 64px)",
            overflowY: "auto",
            boxSizing: "content-box",
        }}>
            <Tabs1 />
            <Tabs2 />
        </div>
    )
}

export default CategoryTab;