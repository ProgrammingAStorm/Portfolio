import { useState } from 'react';

interface IScrollerProps {
    children: React.ReactNode | React.ReactNode[];
}

const Scoller: React.FC<IScrollerProps> = ({ children }) => {
    return (
        <ul id="scroller" className="article-scroller">
            {children}
        </ul>
    );
};

export default Scoller;