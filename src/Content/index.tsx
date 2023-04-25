import { ReactNode } from 'react';

interface IContentProps {
    id: string;
    header: string;
    children: ReactNode
}

function Content({ id, header, children }: IContentProps) {
    return (
        <section id={id} className="section">
            <h2 className='section-header'>{header}</h2>

            {children}
        </section>
    );
}

export default Content;