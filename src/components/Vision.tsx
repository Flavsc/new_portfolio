import React from "react";
import "../styles/components/Vision.scss";
import { Flame, Bomb, Target } from "lucide-react";

const Vision = () => {
    return (
        <section className="vision">
            <div className="container">
                <h2 className="section-title">
                    Our <span className="accent">DNA</span>
                </h2>
                <div className="vision-grid">
                    <div className="vision-card">
                        <Flame size={40} />
                        <h3>Street Culture</h3>
                        <p>
                            Authentic urban aesthetics born from the concrete
                            jungle.
                        </p>
                    </div>
                    <div className="vision-card">
                        <Bomb size={40} />
                        <h3>Disruption</h3>
                        <p>
                            Breaking fashion norms with bold, unapologetic
                            designs.
                        </p>
                    </div>
                    <div className="vision-card">
                        <Target size={40} />
                        <h3>Limited Drops</h3>
                        <p>
                            Exclusive collections that define rarity in
                            streetwear.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Vision;
