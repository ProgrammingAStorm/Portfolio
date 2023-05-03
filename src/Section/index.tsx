import { ReactNode, useState } from "react";
import Scroller from "../Scroller";

interface ISectionProps {
    header: string;
    subHeaders: string[];
    animationName: string;
    children: ReactNode | ReactNode[]
}

export default function Section({ header, subHeaders, animationName, children }: ISectionProps) {
    const [mouseDownAt, setMouseDownAt] = useState<number>(0);
    const [percentage, setPercentage] = useState<number>(0);
    const [prevPercentage, setPrevPercentage] = useState<number>(0);

    const handleOnDownMouse = (event: React.MouseEvent<HTMLUListElement>) => {
        setMouseDownAt(event.clientX);
    };

    const handleOnUpMouse = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };

    const handleOnMoveMouse = (event: React.MouseEvent<HTMLUListElement>) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = parseFloat((mouseDownAt - event.clientX).toString());
        const scroller = document.querySelector('#scroller');
        const maxDelta = scroller!.clientWidth / 2;

        const currentPercentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat((prevPercentage + currentPercentage).toString());
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        setPercentage(nextPercentage);

        scroller?.animate({
            transform: `translate(${nextPercentage}%, 0%)`
        }, { duration: 1200, fill: "forwards" });
    };

    const handleOnDownTouch = (event: React.TouchEvent<HTMLUListElement>) => {
        setMouseDownAt(event.touches[0].clientX);
    };

    const handleOnUpTouch = () => {
        setMouseDownAt(0);
        setPrevPercentage(percentage);
    };

    const handleOnMoveTouch = (event: React.TouchEvent<HTMLUListElement>) => {
        if (mouseDownAt === 0) return;

        const mouseDelta = parseFloat((mouseDownAt - event.touches[0].clientX).toString());
        const scroller = document.querySelector('#scroller');
        const maxDelta = scroller!.clientWidth / 2;

        const currentPercentage = (mouseDelta / maxDelta) * -100;
        const nextPercentageUnconstrained = parseFloat((prevPercentage + currentPercentage).toString());
        const nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

        setPercentage(nextPercentage);

        scroller?.animate({
            transform: `translate(${nextPercentage}%, 0%)`
        }, { duration: 1200, fill: "forwards" });
    };


    return <section className={`section ${animationName}`}
        onMouseDown={handleOnDownMouse}
        onMouseUp={handleOnUpMouse}
        onMouseMove={handleOnMoveMouse}
        onTouchStart={handleOnDownTouch}
        onTouchEnd={handleOnUpTouch}
        onTouchMove={handleOnMoveTouch}>
        <div className="section-headers">
            <h2 className="section-header">
                {header}
            </h2>

            <ul className="section-sub-headers">
                {subHeaders.map((value, index) => {
                    return (
                        <li key={index}>
                            <h3>
                                {value}
                            </h3>
                        </li>
                    );
                })}
            </ul>
        </div>

        <div className="section-content">
            <Scroller>
                {children}
            </Scroller>
        </div>
    </section>
}