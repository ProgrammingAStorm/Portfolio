import { ReactNode } from "react";

interface ISectionProps {
    header: string;
    subHeaders: string[];
    animationName: string;
    children: ReactNode | ReactNode[]
}

export default function Section({ header, subHeaders, animationName, children }: ISectionProps) {
    return <section className={`section ${animationName}`}>
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
            <ul className="article-scroller">
                {children}
            </ul>
        </div>
    </section>
}