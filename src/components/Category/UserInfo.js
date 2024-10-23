import React from 'react';
import './UserInfo.css';

const UserInfo = () => {
    return (
        <div className="userInfo fixed top-0 left-0 w-96 h-16 px-5 py-5 bg-white flex justify-between items-center">
            <a href="/login" className="block text-xl font-bold pl-8 relative"
               style={{ top: "0.05rem", letterSpacing: '-1px' }}>
                <span>로그인</span>
                <i class="bi bi-lock"></i>
            </a>

            <button>
                <i className="bi bi-x-lg"></i>
            </button>
        </div>
    )
}

export default UserInfo;