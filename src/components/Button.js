import React from 'react';

const Button = ({ img, alt }) => {

    return(
        <button
        style={{
            width: "50px",
            height: "50px",
            borderRadius: "50%",
            boxShadow: "0 0 1px 1px rgba(0,0,0,.25)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <img src={img} alt={alt} width="30px" height="30px" />
        </button>
    )
}

export default Button;