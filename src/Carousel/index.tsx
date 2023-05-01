import { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

interface ICarouselProps {
    pictures: string[];
}

export default function Carousel({ pictures }: ICarouselProps) {
    const [currentPicture, setCurrentPicture] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            handleIncrement()
        }, 5000);
        
        return () => clearInterval(interval);
    });

    function handleIncrement() {
        if (currentPicture === pictures.length - 1) {
            return setCurrentPicture(0)
        }

        setCurrentPicture(currentPicture + 1);
    }

    return <section className="carousel">
        {pictures.map((value, index) => {
            return <CSSTransition key={index} in={currentPicture === index} unmountOnExit timeout={500}>
                <ul className="picture-frame">
                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "20% 20%" }} data-offset={0} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "40% 20%" }} data-offset={1} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "60% 20%" }} data-offset={2} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "80% 20%" }} data-offset={3} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "100% 20%" }} data-offset={4} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "20% 40%" }} data-offset={5} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "40% 40%" }} data-offset={6} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "60% 40%" }} data-offset={7} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "80% 40%" }} data-offset={8} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "100% 40%" }} data-offset={9} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "20% 60%" }} data-offset={10} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "40% 60%" }} data-offset={11} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "60% 60%" }} data-offset={12} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "80% 60%" }} data-offset={13} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "100% 60%" }} data-offset={14} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "20% 80%" }} data-offset={15} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "40% 80%" }} data-offset={16} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "60% 80%" }} data-offset={17} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "80% 80%" }} data-offset={18} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "100% 80%" }} data-offset={19} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "20% 100%" }} data-offset={20} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "40% 100%" }} data-offset={21} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "60% 100%" }} data-offset={22} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "80% 100%" }} data-offset={23} />
                    </li>

                    <li className="picture-trim">
                        <div className="picture" style={{ background: `url(/${value})`, backgroundSize: "500% 500%", backgroundPosition: "100% 100%" }} data-offset={24} />
                    </li>
                </ul>
            </CSSTransition>
        })}
    </section>
}