import { useEffect } from "react"

export default function BgImage() {

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)

        return () => window.removeEventListener('mousemove', handleMouseMove)
    });

    function handleMouseMove(e: MouseEvent) {
        const image = document.querySelector('.background-image')

        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        image?.animate({
            backgroundPosition: `${x * 100}% ${y * 100}%`
        }, { duration: 2500, fill: "forwards" });
    }

    return <div className="background-image" />
}