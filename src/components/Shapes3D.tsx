import React from "react";
import "../styles/components/Shapes3D.scss";

const Shapes3D = () => {
    return (
        <div className="shapes-container">
            <div className="shape cube">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
            <div className="shape pyramid">
                <div className="face front"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face bottom"></div>
            </div>
            <div className="shape prism">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
        </div>
    );
};

export default Shapes3D;
