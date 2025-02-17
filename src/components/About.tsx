/* eslint-disable prettier/prettier */
import "../styles/components/About.scss";

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h2 className="section-title">
                            About <span className="accent">166 studios.</span>
                        </h2>
                        <p>
                            Created by Flavio Carvalho as a way to show to the
                            world how art and technology can be used together to
                            improve the performance of your application. As a
                            designer and a Developer I would like to show you
                            the intersection of creativity and technology.
                        </p>
                        <div className="stats">
                            <div className="stat">
                                <span className="number">100%</span>
                                <span className="label">Authentic</span>
                            </div>

                            <div className="stat">
                                <span className="number">32+</span>
                                <span className="label">
                                    Delivered projects
                                </span>
                            </div>

                            <div className="stat">
                                <span className="number">2</span>
                                <span className="label">years of work</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-image">
                        <img
                            src="https://i.ibb.co/x8nvQfp/gato.jpg"
                            alt="Urban Fashion"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
