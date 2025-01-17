/* eslint-disable prettier/prettier */
import React from "react";
import "../../styles/components/3D/FloatingElements.scss";
import { useMousePosition } from "../../hooks/useMousePosition";

const FloatingElements = () => {
    const { x, y } = useMousePosition();

    return (
        <div className="floating-elements">
            <div
                className="element cube"
                style={{
                    transform: `translate3d(${x * 0.02}px, ${y * 0.02}px, 0) rotateX(${y * 0.05}deg) rotateY(${x * 0.05}deg)`
                }}
            >
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>

            <div
                className="element sphere"
                style={{
                    transform: `translate3d(${x * -0.01}px, ${y * -0.01}px, 0)`
                }}
            ></div>

            <div
                className="element pyramid"
                style={{
                    transform: `translate3d(${x * 0.015}px, ${y * 0.015}px, 0) rotateX(${y * 0.02}deg) rotateY(${x * 0.02}deg)`
                }}
            >
                <div className="face front"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face bottom"></div>
            </div>
        </div>
    );
};

export default FloatingElements;
