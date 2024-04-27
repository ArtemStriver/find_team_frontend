import React from 'react';
import "./header.css"
import img from "../../img/logo.svg"

const Logo = () => {
    return (
        <div>
            <a className="logo" href="/public">
                <img
                    src={img}
                    alt="Findy"
                    className="logo_image"
                    height={32}
                    width={212}
                />
            </a>
        </div>
    );
};

export default Logo;