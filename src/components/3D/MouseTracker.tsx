import React, { useEffect, useRef } from "react";
import "../../styles/components/3D/MouseTracker.scss";
import { useMousePosition } from "../../hooks/useMousePosition";

const MouseTracker = () => {
    const { x, y } = useMousePosition();
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        const shapes = containerRef.current.querySelectorAll(".shape");
        shapes.forEach((shape) => {
            const speed = parseFloat(
                (shape as HTMLElement).dataset.speed || "1"
            );
            const rotateX = (y / window.innerHeight - 0.5) * 20 * speed;
            const rotateY = (x / window.innerWidth - 0.5) * 20 * speed;

            (shape as HTMLElement).style.transform =
                `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
    }, [x, y]);

    return (
        <div className="mouse-tracker" ref={containerRef}>
            <div className="shape cube" data-speed="2">
                <div className="face front"></div>
                <div className="face back"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face top"></div>
                <div className="face bottom"></div>
            </div>
            <div className="shape pyramid" data-speed="1.5">
                <div className="face front"></div>
                <div className="face right"></div>
                <div className="face left"></div>
                <div className="face bottom"></div>
            </div>
            <div className="shape floating-text" data-speed="1">
                <span>M</span>
                <span>A</span>
                <span>Z</span>
                <span>C</span>
                <span>A</span>
            </div>
        </div>
    );
};

export default MouseTracker;
