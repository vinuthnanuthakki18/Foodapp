import { useEffect,useState } from "react";
import { motion } from "framer-motion";


function AnimatedComponent({children}) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const element = document.getElementById("about");
        if (element) {
          const top = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          if (top < windowHeight * 0.9) {
            setIsVisible(true);
          }
        }
      };
  
      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check visibility on load
  
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
  return (
    <div>
      <motion.div 
      id="about"
      initial={{ opacity: 0, y: 50 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 1, ease: "easeOut" }}>
        {children}
      </motion.div>
    </div>
  )
}

export default AnimatedComponent
