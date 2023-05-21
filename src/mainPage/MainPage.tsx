import React, {useCallback} from 'react';
import s from './MainPage.module.scss';
import myPhoto from '../assets/images/myPhoto.jpg'
import type {Container, Engine} from "tsparticles-engine";
import Particles from "react-tsparticles";
import {loadFull} from "tsparticles";

export function MainPage() {
    const myPhotoImage = {
        backgroundImage: `url(${myPhoto})`,
    };

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    return (
        <div className={s.mainPage}>
            <Particles
                className={s.particles}
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={{
                    fullScreen: {
                        enable: false,
                        zIndex: 1
                    },
                    background: {
                        color: {
                            value: "white",
                        },
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: "push",
                            },
                            onHover: {
                                enable: true,
                                mode: "grab",
                                parallax: {
                                    enable: true,
                                    force: 60,
                                    smooth: 10
                                }
                            },
                            resize: true,
                        },
                        modes: {
                            attract: {
                                distance: 200,
                                duration: 0.4,
                                easing: 'ease-out-quad',
                                factor: 1,
                                maxSpeed: 50,
                                speed: 1
                            }
                        },
                    },
                    particles: {
                        color: {
                            value: "#696969",
                        },
                        links: {
                            color: "#696969",
                            distance: 150,
                            enable: true,
                            opacity: 0.5,
                            width: 1,
                        },
                        collisions: {
                            enable: true,
                        },
                        move: {
                            direction: "none",
                            enable: true,
                            outModes: {
                                default: "bounce",
                            },
                            random: false,
                            speed: 1,
                            straight: false,
                        },
                        number: {
                            density: {
                                enable: true,
                                area: 800,
                            },
                            value: 120,
                        },
                        opacity: {
                            value: 0.5,
                        },
                        shape: {
                            type: "circle",
                        },
                        size: {
                            value: {min: 1, max: 5},
                        },
                    },
                    detectRetina: true,
                }}
            />
            <div className={s.MainPageBlockContainer}>
                <div className={s.mainPageInfo}>
                    <h6 className={s.description}>Hi there!I'm Evgeniy Zakharov</h6>
                    <h1 className={s.mainPageTitle}>
                        Frontend developer</h1>
                </div>
                <div className={s.photoWrapper}>
                    <div className={s.photo} style={myPhotoImage}></div>
                </div>
            </div>
        </div>
    );
}