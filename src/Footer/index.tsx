export default function Footer() {
    return <footer className="footer">
        <section className="footer-content">
            <div className="footer-headers">
                <h4 className="footer-header-main">Made with ❤️‍🔥 using:</h4>

                <ul className="footer-headers-sub">
                    <li>
                        <h5 className="footer-header-sub">
                            React
                        </h5>
                    </li>

                    <li>
                        <h5 className="footer-header-sub">
                            Tailwind
                        </h5>
                    </li>

                    <li>
                        <h5 className="footer-header-sub">
                            CSSTransitions
                        </h5>
                    </li>
                </ul>
            </div>

            <div className="footer-links">
                <h4 className="h-8 text-center text-xl sm:text-2xl">Links:</h4>

                <ul className="footer-links-list">
                    <li className="footer-link-trim">
                        <a className="footer-link" href="https://www.linkedin.com/in/mark-pavel-744297202/" target={"_blank"}>
                            <svg className="w-12 hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                        </a>
                    </li>

                    <li className="footer-link-trim">
                        <a className="footer-link" href="https://github.com/ProgrammingAStorm" target={"_blank"}>
                            <svg className="w-14 h-14 hover:scale-110 transition-all" xmlns="http://www.w3.org/2000/svg"><path className="scale-50" fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="#fff" /></svg>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
    </footer>
}