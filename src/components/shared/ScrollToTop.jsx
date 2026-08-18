import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    function handleScroll() {
    if (window.scrollY > 300) {
        setIsVisible(true)
    } else {
        setIsVisible(false)
    }}
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <div>
            {isVisible && 
            (<button 
            className="cursor-pointer fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-black text-white flex items-center 
            justify-center shadow-lg hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300"
                onClick={scrollToTop}>
                <ArrowUp size={22} />
            </button>)}
        </div>
    )
}
export default ScrollToTop
