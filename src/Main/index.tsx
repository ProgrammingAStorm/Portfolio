import { ReactNode, useEffect, useState } from "react"

interface IMainProps {
    currentSection: number | null;
    setCurrentSection: Function;
    children: ReactNode[];
}

export default function Main({ currentSection, setCurrentSection, children }: IMainProps) {
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsReady(true), 2000);

        return () => clearTimeout(timer);
    }, [])

    const handleLeft = () => {
        if (currentSection === 0) {
            setCurrentSection(children.length - 1);
        } else {
            setCurrentSection(currentSection! - 1);
        }
    }

    const handleRight = () => {
        if (currentSection === children.length - 1) {
            setCurrentSection(0);
        } else {
            setCurrentSection(currentSection! + 1);
        }
    }

    return <main id="main" className="main">
        <div className="main-content slate-card">
            {isReady && (
                <>
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

                    {children}
                </>
            )}
        </div>
    </main>
}