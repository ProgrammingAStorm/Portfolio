export default function ContactMe() {
    return <section className="section contactme">
        <h2 className="section-header">Contact Me</h2>

        <div>
            <h3>Mark Pavel</h3>
            <a href="mailto:markpavel02@gmail.com" className="link content">markpavel02@gmail.com</a>
            <p className="content">(734) 341-9709</p>
        </div>

        <a href="#footer" className="arrow" style={{
            animationDelay: "1s"
        }}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
        </a>
    </section>
}