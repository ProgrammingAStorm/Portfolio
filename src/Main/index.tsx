import { ReactNode, useRef, useState } from "react"

import "intersection-observer";

import { useIsVisible } from 'react-is-visible'

interface IMainProps {
    children: ReactNode[];
}

export default function Main({ children }: IMainProps) {
    const [currentChild, setCurrentChild] = useState(0)

    const mainRef = useRef(null)
    const isVisible = useIsVisible(mainRef);

    const handleLeft = () => {
        if(currentChild === children.length - 1) {
            setCurrentChild(0);
        } else {
            setCurrentChild(currentChild + 1);
        }
    }

    const handleRight = () => {
        if(currentChild === 0) {
            setCurrentChild(children.length - 1);
        } else {
            setCurrentChild(currentChild - 1);
        }
    }

    console.log(isVisible)

    return <main ref={mainRef} id="main" className="main">
        <i className="main-arrow left" onClick={handleLeft}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
        </i>

        <i className="main-arrow right" onClick={handleRight}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
        </i>

        {children[currentChild]}
    </main>
}